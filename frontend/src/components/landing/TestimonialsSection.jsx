const TESTIMONIALS = [
  {
    name: "Aytan M.",
    subject: "Learning Azerbaijani",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNl1jbBoqWsgn9f46aNa8s-7IcAoXR4fvcGlYEPlGHjkFIycwTkTTSlNf64ljBIy4Wp5ZxZANjdJ1W2CMfK2yVfFa74lZAHY32XysTdXCPVb6oXdLS4NiN_ZhICsUD8ZoEQ_F8KZCjxgtz2v6SFnLVnNSu0840eCCNixLJKQhI7z_TL2Rk9QrnoWJ1nQEYnvbX-KlcnQnuX-msN5UiyAq1UvGUJ424M5235mxKMVuAza79oF2x1tFvGm3lmXjWAgj00YVHQy3V5z4",
    quote:
      '"LingoFlash changed how I learn Azerbaijani. The swipe mode is addictive! I find myself reviewing words during my commute every day."',
    likes: 24,
    when: "2 days ago",
  },
  {
    name: "John D.",
    subject: "Learning English",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVjE2YoBHbDSNnqK7Vtw-KCMS2EFi60cYZJExm64vJhuW--ST3CKEOzpMIDKflP8lcv-5ChhY2aE-XDwCN-8A2Deigh6Y3EEyUtTg3QEeNScBO45X9d5f4kAhatnIRbuxLEA5Yzd8Q-ozzW6pmosGIUpqlEa0dV4ifbPcnXroEUDXr4wfxfL7Bya00ZoIa8Y8acdRsr3eLAx5_gQMMRgVKgYHUwH_Yujpkp0nZozNnGMpSvtzqR5uyr4UkXWwkkgnjW2OZmbsUKvg",
    quote:
      '"Best flashcard app I\'ve used for English. The progress tracking keeps me motivated and the decks are high quality."',
    likes: 18,
    when: "1 week ago",
  },
];

function StarRating() {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center text-slate-900 dark:text-white">
          What Our Learners Say
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url('${t.avatar}')` }}
                    aria-label={`Portrait of ${t.name}`}
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.subject}</p>
                  </div>
                </div>
                <StarRating />
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-300 italic">{t.quote}</p>

              <div className="flex items-center gap-6 text-slate-400">
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">thumb_up</span>
                  <span className="text-xs font-medium">{t.likes}</span>
                </button>
                <span className="text-xs">{t.when}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
