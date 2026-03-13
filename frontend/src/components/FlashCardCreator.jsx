export default function FlashCardCreator({
  inputText,
  setInputText,
  sourceLang,
  targetLang,
  onSwapLang,
  onTranslate,
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      onTranslate();
    }
  }

  return (
    <section className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Create Flashcard</h2>

      <div className="space-y-6">
        {/* Language toggle */}
        <div className="flex items-center gap-4 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
          <button className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm font-medium text-sm">
            {sourceLang}
          </button>
          <button
            onClick={onSwapLang}
            className="hover:rotate-180 transition-transform duration-300"
            title="Swap languages"
          >
            <span className="material-symbols-outlined text-slate-400">sync</span>
          </button>
          <button className="px-4 py-2 text-slate-500 font-medium text-sm">{targetLang}</button>
        </div>

        {/* Input */}
        <div className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-lg outline-none"
            placeholder="Enter word or phrase to translate..."
            rows={4}
          />
          <span className="absolute bottom-3 right-3 text-xs text-slate-400 select-none">
            Ctrl+Enter
          </span>
        </div>

        <button
          onClick={onTranslate}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Translate &amp; Preview
        </button>
      </div>
    </section>
  );
}