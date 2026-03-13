const AVATARS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzYDWyNGAvo0VBKWZgpoNDdXmAJBpB_xcKMlcmTyHN13KSmFZ0YYHbMJVRbTvmiZj-wxHqxihM7kDTOpF5IfmuLyd2ST7KEnNyetkWyrjfLb4dmt5R-BRuTL2paW2MPCj5iAzdrTnw67DK64DnF-XTqnAuG3o35pE18J2V_PMbetVuGoAO5JwZQbfY9_rNjE3NkgTZCBZlzXj--WYZzkuUDYAxNQM8Q99U-hl7TtuAtv9VE4iHWZox2B8T-sr_97kOxohT1nsh1wY",
    alt: "Young smiling woman",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4PwZNjv0m8qPg4dcgLAJVwhfrBqlGTqtKoOZOZwa68Q_nypqFloBp6cOuuaXLwPJTcDs_wTOWuYkesDxQI-ybSsYDda9b3YfPuULKDgOEXZQ1GdEX0R3iU1kjIJ3XuLySnNUibjoxVUA-EZAQ3JRKKBOs3j7llXcMNZTPVHSycgu4-UPQXmUTaIZ5UmBjFugOgUnpnRNMa_eZEKup8APQ9HnrQBpe49x59fyUx9DEmjvQlKJbQpH4KjC3KZr8bmzQysrsxEchgeY",
    alt: "Professional man",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4HAElPLSGKHI56OzK-kwwpik_JvnnPfQpcjtyFwxmBW0pgxI7zvJ3liVvr6EL3kI5N9JPNfyc4oxpPGlZUik6IIl96ih-j7qs7saOdZX54D7bSVRqCNE1GPfoBK0FH4I3A_cdCQ-1tJ5JoOO9_XxwpLTq5Ss3fh3vsRDOJqaj1jPTL9fgVOh-LbeYiQUIbdsHbjia_LqrjYCToIYeVU5kmZQqvvvPZBEmzzncrotCgQg3XtF13KlSSnukHgBj4DMN_h9lbAJ5XU",
    alt: "Happy student",
  },
];

export default function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-8 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            New: Tinder-style study mode
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Master New Languages with{" "}
            <span className="text-primary">Flashcards</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Learn English, Azerbaijani and more with interactive decks and
            Tinder-style study mode. Scientifically proven methods to boost your
            retention.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="h-14 px-8 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform flex items-center gap-2">
              Get Started for Free
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white">
              Browse Decks
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url('${av.src}')` }}
                  aria-label={av.alt}
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Join{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                10,000+
              </span>{" "}
              language learners
            </p>
          </div>
        </div>

        {/* Right column – flashcard preview */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden aspect-[4/3] flex items-center justify-center group">
            <div className="w-64 h-96 bg-primary rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-white relative rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <span className="material-symbols-outlined text-6xl mb-4">translate</span>
              <p className="text-2xl font-bold">Salam</p>
              <p className="opacity-80 mt-2 text-sm">Azerbaijani</p>
              <div className="absolute bottom-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400">close</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400">check</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
