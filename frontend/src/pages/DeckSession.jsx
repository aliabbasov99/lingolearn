import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FlashCard from "../components/FlashCard";
import { DECK_DATA } from "../data/deckData";

export default function DeckSession() {
  const { deckId } = useParams();
  const deck = DECK_DATA[deckId] ?? DECK_DATA[3];

  const [allFlipped, setAllFlipped] = useState(false);
  const [isPublished, setIsPublished] = useState(deck.publishedCount !== null);
  const [publishedCount] = useState(deck.publishedCount ?? 1);

  return (
    <div className="flex flex-col gap-8">
      {/* Deck Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <Link
            to="/decks"
            className="flex items-center gap-1.5 text-primary text-sm font-bold mb-1 hover:opacity-80 transition-opacity w-fit"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Decks</span>
          </Link>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {deck.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {deck.cards.length} cards
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full md:w-auto">

          {/* Mobile only: publish full width */}
          <div className="flex md:hidden items-center gap-2">
            {isPublished && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                {publishedCount} times added
              </span>
            )}
            <button
              onClick={() => setIsPublished((prev) => !prev)}
              className={`flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-bold transition-all active:scale-95 ${
                isPublished
                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {isPublished ? "check_circle" : "publish"}
              </span>
              {isPublished ? "Published" : "Publish"}
            </button>
          </div>

          {/* Desktop */}
          <div className="flex items-center gap-3">

            {/* Desktop only: times added + publish */}
            <div className="hidden md:flex items-center gap-2">
              {isPublished && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  {publishedCount} times added
                </span>
              )}
              <button
                onClick={() => setIsPublished((prev) => !prev)}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all active:scale-95 ${
                  isPublished
                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {isPublished ? "check_circle" : "publish"}
                </span>
                {isPublished ? "Published" : "Publish"}
              </button>
            </div>

            <Link
              to={`/decks/study/${deckId}`}
              className="flex flex-1 md:flex-none items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">school</span>
              Study Now
            </Link>

            <button
              onClick={() => setAllFlipped((prev) => !prev)}
              className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all"
              title={allFlipped ? "Flip Back" : "Flip All"}
            >
              <span className="material-symbols-outlined">flip_to_back</span>
            </button>

          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deck.cards.map((card, index) => (
          <FlashCard
            key={`${deckId}-${index}`}
            term={card.term}
            azTranslation={card.azTranslation}
            azDescription={card.azDescription}
            allFlipped={allFlipped}
          />
        ))}
      </div>
    </div>
  );
}
