export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-xl">style</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LingoFlash</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Flashcards", "Study Modes", "Decks", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-sm font-bold px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            Log In
          </button>
          <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-shadow shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
