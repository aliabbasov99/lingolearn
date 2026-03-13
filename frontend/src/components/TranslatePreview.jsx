export default function TranslationPreview({ original, translation, onAdd }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base lg:text-lg font-bold">Translation Preview</h3>

      <div className="group relative bg-gradient-to-br from-primary to-blue-700 p-5 lg:p-8 rounded-3xl text-white shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col h-full min-h-[160px] lg:min-h-[200px] justify-between">
          <div>
            <p className="text-blue-100 text-xs lg:text-sm font-medium mb-1">Original</p>
            <h4 className="text-xl lg:text-3xl font-bold mb-4">{original}</h4>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-blue-100 text-xs lg:text-sm font-medium">Translation</p>
              <button className="p-1.5 lg:p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                <span className="material-symbols-outlined text-lg lg:text-xl">volume_up</span>
              </button>
            </div>
            <h4 className="text-xl lg:text-3xl font-bold">{translation}</h4>
          </div>

          <button
            onClick={onAdd}
            className="mt-5 lg:mt-8 w-full py-2.5 lg:py-3 bg-white text-primary text-sm lg:text-base font-bold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Add to My Collection
          </button>
        </div>

        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined" style={{ fontSize: 120 }}>
            translate
          </span>
        </div>
      </div>
    </div>
  );
}