const LINKS = {
  Product: ["Flashcards", "Study Modes", "Decks", "Pricing"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const SOCIAL_ICONS = ["public", "play_circle", "share"];

export default function LandingFooter() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-xl">style</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                LingoFlash
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-6 text-sm leading-relaxed">
              The smartest way to learn new vocabulary using interactive
              flashcards and scientifically proven study methods.
            </p>
            <div className="flex gap-4">
              {SOCIAL_ICONS.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold mb-6 text-slate-900 dark:text-white">{category}</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© 2024 LingoFlash. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">language</span>
              English (US)
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">shield</span>
              Secure Payments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
