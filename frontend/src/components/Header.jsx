export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 lg:px-10 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl">layers</span>
          <h1 className="text-xl font-bold tracking-tight">LingoLearn</h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search your decks..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zFynhH5m_Gsnrust3Rwwvz04HbJtqPiCpFFNWXCEd38_PMCZUZ1FRg_C52HB0Epb1FZ-Z7ZHA3wAhhFhC8xDPdhAHxZh8Pyaf4M0ThacuKXwmU88B4ZRPZOWwciwKVZTkkArzCCZOy71p7PcNVs2Ha5HhR515i9rZRq2RvsbHmAn4hzQrcOJEl0AHD9LIfTUGu1173Sm1TXfeVXqZdWy3sfapC0IkVDw5WNaJb-tlccTDtrebFtDO_rVZHwmpXcwffU3XvO4btY"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}