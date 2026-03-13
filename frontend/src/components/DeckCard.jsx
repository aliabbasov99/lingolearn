import { useNavigate } from "react-router-dom";

export default function DeckCard({
  id,
  icon,
  iconBg,
  iconColor,
  title,
  count,
  countSuffix = "words",
  buttonLabel = "Study Now",
  buttonIcon = null,
  badges = [],
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id) navigate(`/decks/${id}`);
  };

  const handleStudy = (e) => {
    e.stopPropagation();
    if (buttonLabel === "Study Now" && id) {
      navigate(`/decks/study/${id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-primary/30 transition-all flex flex-col gap-4 cursor-pointer"
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between gap-2">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        {badges.length > 0 && (
          <div className="flex flex-col items-end gap-1">
            {badges.map(({ text, variant = "default" }) => (
              <span
                key={text}
                className={
                  variant === "muted"
                    ? "text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 whitespace-nowrap"
                    : "text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap"
                }
              >
                {text}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-slate-500 mt-0.5 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">style</span>
          {count} {countSuffix}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleStudy}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-1.5"
      >
        {buttonIcon && <span className="material-symbols-outlined text-lg">{buttonIcon}</span>}
        {buttonLabel}
      </button>
    </div>
  );
}
