export default function RecentCards({ cards }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base lg:text-lg font-bold">Recent Cards</h3>
        <a href="#" className="text-primary text-xs lg:text-sm font-bold hover:underline">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-2">
        {cards.slice(0, 4).map(({ word, translation }) => (
          <div
            key={word + translation}
            className="flex items-center justify-between p-2.5 lg:p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <div>
              <p className="text-sm lg:text-base font-bold text-slate-900 dark:text-white">{word}</p>
              <p className="text-xs lg:text-sm text-slate-500">{translation}</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-lg lg:text-2xl">
              chevron_right
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}