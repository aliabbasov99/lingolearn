export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Decorative icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined" style={{ fontSize: "200px" }}>
              language
            </span>
          </div>

          <h2 className="text-4xl font-black mb-6 relative z-10">
            Ready to start your journey?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto relative z-10 opacity-90">
            Join thousands of students and start mastering your dream language
            today with LingoFlash.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="h-14 px-10 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
              Get Started for Free
            </button>
            <button className="h-14 px-10 bg-primary/20 border border-white/30 text-white font-bold rounded-xl hover:bg-primary/30 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
