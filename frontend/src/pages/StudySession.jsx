import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { DECK_DATA } from "../data/deckData";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SWIPE_THRESHOLD = 80;

export default function StudySession() {
  const { deckId } = useParams();
  const deck = DECK_DATA[deckId] ?? DECK_DATA[3];

  const [queue, setQueue] = useState(() => shuffleArray([...deck.cards]));
  const [completed, setCompleted] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDir, setExitDir] = useState(null);

  const startXRef = useRef(0);
  const isDownRef = useRef(false);

  const currentCard = queue[0] ?? null;
  const remaining = queue.length;
  const total = deck.cards.length;

  const swipeProgress = Math.min(Math.abs(dragX) / SWIPE_THRESHOLD, 1);
  const rightOpacity = dragX > 5 ? swipeProgress : 0;
  const leftOpacity = dragX < -5 ? swipeProgress : 0;

  const handleKnow = useCallback(() => {
    setCompleted((c) => c + 1);
    setQueue((q) => q.slice(1));
    setIsFlipped(false);
  }, []);

  const handleDontKnow = useCallback(() => {
    setQueue((q) => {
      if (q.length <= 1) return q;
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setIsFlipped(false);
  }, []);

  const handleSkip = useCallback(() => {
    setQueue((q) => {
      if (q.length <= 1) return q;
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setIsFlipped(false);
  }, []);

  const doExitKnow = useCallback(() => {
    setExitDir("right");
    setTimeout(() => {
      handleKnow();
      setExitDir(null);
      setDragX(0);
    }, 360);
  }, [handleKnow]);

  const doExitDontKnow = useCallback(() => {
    setExitDir("left");
    setTimeout(() => {
      handleDontKnow();
      setExitDir(null);
      setDragX(0);
    }, 360);
  }, [handleDontKnow]);

  const onPointerDown = useCallback((e) => {
    isDownRef.current = true;
    startXRef.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDownRef.current) return;
    setDragX(e.clientX - startXRef.current);
  }, []);

  const onPointerUp = useCallback((e) => {
    if (!isDownRef.current) return;
    isDownRef.current = false;
    setIsDragging(false);

    const delta = e.clientX - startXRef.current;

    if (delta >= SWIPE_THRESHOLD) {
      doExitKnow();
    } else if (delta <= -SWIPE_THRESHOLD) {
      doExitDontKnow();
    } else {
      if (Math.abs(delta) < 10) setIsFlipped((f) => !f);
      setDragX(0);
    }
  }, [doExitKnow, doExitDontKnow]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") doExitDontKnow();
      else if (e.key === "ArrowRight") doExitKnow();
      else if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [doExitDontKnow, doExitKnow]);

  // Prevent page scroll while dragging — fixes BottomNav jumping
  useEffect(() => {
    const prevent = (e) => { if (isDragging) e.preventDefault(); };
    document.addEventListener("touchmove", prevent, { passive: false });
    return () => document.removeEventListener("touchmove", prevent);
  }, [isDragging]);

  const rotZ = isDragging ? dragX * 0.07 : 0;
  let cardTransform;
  if (exitDir === "right") cardTransform = "translateX(150vw) rotate(28deg)";
  else if (exitDir === "left") cardTransform = "translateX(-150vw) rotate(-28deg)";
  else cardTransform = `translateX(${dragX}px) rotate(${rotZ}deg)`;

  const cardTransition = isDragging
    ? "none"
    : exitDir
    ? "transform 0.36s cubic-bezier(0.4, 0, 1, 1)"
    : "transform 0.28s ease";

  if (!currentCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center p-6">
        <div className="size-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: "52px" }}>
            celebration
          </span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Tamamlandı! 🎉</h2>
        <p className="text-slate-500 dark:text-slate-400">{total} kartın hamısını öyrəndiniz.</p>
        <Link
          to="/decks"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">layers</span>
          Decks-ə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 pb-6 overflow-x-hidden">
      {/* Take a Break */}
      <Link
        to={`/decks/${deckId}`}
        className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-semibold hover:text-primary transition-colors w-fit"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>free_cancellation</span>
        <span>Take a Break</span>
      </Link>

      <div className="flex flex-col items-center gap-6">

        {/* Stats */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: "18px" }}>check_circle</span>
            <span className="text-sm font-bold text-emerald-500">Completed: {completed}</span>
          </div>
          <div className="w-px h-4 bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-rose-500" style={{ fontSize: "18px" }}>pending</span>
            <span className="text-sm font-bold text-rose-500">Remaining: {remaining}</span>
          </div>
        </div>

        {/* Card Stack */}
        <div className="relative w-full max-w-sm h-64 md:h-72">

          <div
            className="absolute inset-0 rounded-xl border border-slate-200/50 dark:border-slate-700/50 bg-white/40 dark:bg-slate-800/40"
            style={{ transform: "translateY(12px) scale(0.94)", zIndex: 0 }}
          />
          <div
            className="absolute inset-0 rounded-xl border border-slate-200/50 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60"
            style={{ transform: "translateY(6px) scale(0.97)", zIndex: 1 }}
          />

          <div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{
              zIndex: 2,
              transform: cardTransform,
              transition: cardTransition,
              touchAction: "none",
              userSelect: "none",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* I Know It badge */}
            <div
              className="absolute top-3 left-3 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-xs uppercase tracking-widest shadow-lg"
              style={{ opacity: rightOpacity, pointerEvents: "none" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>favorite</span>
              I Know It
            </div>

            {/* Don't Know badge */}
            <div
              className="absolute top-3 right-3 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500 text-white font-black text-xs uppercase tracking-widest shadow-lg"
              style={{ opacity: leftOpacity, pointerEvents: "none" }}
            >
              Don't Know
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>close</span>
            </div>

            {/* 3D Flip */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                transformStyle: "preserve-3d",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: `perspective(1200px) rotateY(${isFlipped ? 180 : 0}deg)`,
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-between p-6 text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div />
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                  {currentCard.term}
                </h3>
                <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                  <button
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => setIsFlipped(true)}
                    className="group flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">Flip Card</span>
                    <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-300" style={{ fontSize: "18px" }}>
                      flip_to_back
                    </span>
                  </button>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 p-6 text-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-2xl font-black text-primary">{currentCard.azTranslation}</p>
                <div className="w-10 h-px bg-slate-200 dark:bg-slate-700" />
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {currentCard.azDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-10 md:gap-14 mt-4">

          {/* Don't Know */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={doExitDontKnow}
              className="size-16 rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-500 flex items-center justify-center active:scale-95 transition-all"
              style={{
                backgroundColor: leftOpacity > 0.4 ? "rgb(244,63,94)" : undefined,
                color: leftOpacity > 0.4 ? "white" : undefined,
                boxShadow: leftOpacity > 0.4 ? "0 8px 20px rgba(244,63,94,0.35)" : undefined,
                transform: leftOpacity > 0.4 ? "scale(1.12)" : undefined,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>close</span>
            </button>
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Don't Know</span>
          </div>

          {/* Skip */}
          <button
            onClick={handleSkip}
            title="Skip"
            className="size-11 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center active:scale-95"
          >
            <span className="material-symbols-outlined">replay</span>
          </button>

          {/* I Know It */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={doExitKnow}
              className="size-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center active:scale-95 transition-all"
              style={{
                backgroundColor: rightOpacity > 0.4 ? "rgb(16,185,129)" : undefined,
                color: rightOpacity > 0.4 ? "white" : undefined,
                boxShadow: rightOpacity > 0.4 ? "0 8px 20px rgba(16,185,129,0.35)" : undefined,
                transform: rightOpacity > 0.4 ? "scale(1.12)" : undefined,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>favorite</span>
            </button>
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">I Know It</span>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="text-slate-400 text-xs hidden md:flex items-center gap-2 flex-wrap justify-center">
          Swipe or use{" "}
          <kbd className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-mono text-xs">← Left</kbd>
          {" "}/{" "}
          <kbd className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-mono text-xs">Right →</kbd>
          {" "}• Tap card to flip
        </p>
      </div>
    </div>
  );
}