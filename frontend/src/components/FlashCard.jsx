import { useState, useEffect, useRef } from "react";

export default function FlashCard({ term, azTranslation, azDescription, allFlipped }) {
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);

  // Lazy loading via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Sync with global flip all toggle
  useEffect(() => {
    setFlipped(allFlipped);
  }, [allFlipped]);

  const handleClick = () => setFlipped((f) => !f);

  return (
    <div
      ref={ref}
      className="h-48 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      {!visible ? (
        /* Skeleton placeholder */
        <div className="h-full w-full rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
      ) : (
        <div
          className="relative h-full w-full rounded-2xl shadow-md transition-all duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front — English term */}
          <div
            className="absolute inset-0 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center p-6 border-2 border-slate-100 dark:border-slate-800"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{term}</h3>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Term</p>
            </div>
          </div>

          {/* Back — Azerbaijani translation */}
          <div
            className="absolute inset-0 rounded-2xl bg-primary p-6 text-white flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="text-xl font-bold mb-2">{azTranslation}</h3>
            <p className="text-sm opacity-80 leading-relaxed italic">{azDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}
