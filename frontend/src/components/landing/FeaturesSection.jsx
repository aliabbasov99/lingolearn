const FEATURES = [
  {
    icon: "style",
    title: "Smart Flashcards",
    description:
      "Interactive decks tailored to your learning pace and personal interests. Create your own or use community decks.",
  },
  {
    icon: "swipe",
    title: "Study Modes",
    description:
      "Experience our unique Tinder-style swiping mode for quick review, or dive deep with classic spaced repetition.",
  },
  {
    icon: "insights",
    title: "Progress Tracking",
    description:
      "Visualize your growth with detailed analytics, daily streaks, and mastery level indicators for every word.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900/50 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
            Why Choose LingoFlash?
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Our scientifically proven methods help you retain vocabulary faster
            and more effectively through active recall and spaced repetition.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-background-light dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
