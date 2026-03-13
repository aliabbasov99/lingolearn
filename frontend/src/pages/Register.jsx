import { useState } from "react";

const GOOGLE_LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_YAI4YWCBRtjkYV97478myM4b0xXAUZ7qAmPgOqWATHgx-hOzLGxRK3zlIFYxj9sj8YYId7cyVvMGkkOYwNraEpeFprnFsbHjuaZQgdsBmSzafdrn7kw4qrhQoHuoZoxW4w4jAIoe6IA6FpLlN4bWxmvZUMECpQc6v92UtL_kb4puUrf0XE-CbB9HOfx8cLnLOEpXNyll95exXcAg-1gx7UINZG4Lz41fjcYogHixRNpFqnCfcRl8dnFSE38SxIVPOufI4PsB7nU";

const APPLE_LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCvY5hwl-WCDPkMlZiIyDhOA9bliPvMA_coVUQDWkCCaidGSI1lcnAoSjUYjFzUSZ-I5pZgflldays5EsBanFBbjlsD3D3O3mFoNBjb3jkJAPvxzI-Y9JBtPvIoQU8NjX8S4d8FD8XcUAfrcZE1kWymS4FWBzCVSGX-iaatnXpL2z-3vVib4Wxnjb-1krL1ZAi_dVDirgbev8hgI7bwty-fomjcSKv361CDwC0HmD_Q2SpH9vfywrUC1mmPRT8yXmmRlhJebVuvRE";

function InputField({ icon, type = "text", placeholder }) {
  return (
    <div className="relative">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all outline-none"
      />
    </div>
  );
}

export default function Register() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-5 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">translate</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              LingoFlash
            </h1>
          </div>
          <nav>
            <a
              href="#"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Support
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
          {/* Title */}
          <div className="p-8 pb-0 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Create Account
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Join the world's fastest growing language community
            </p>
          </div>

          {/* Form */}
          <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Full Name
              </label>
              <InputField icon="person" placeholder="Enter your full name" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Email Address
              </label>
              <InputField icon="mail" type="email" placeholder="name@example.com" />
            </div>

            {/* Password row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Password
                </label>
                <InputField icon="lock" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Confirm Password
                </label>
                <InputField icon="lock" type="password" placeholder="••••••••" />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 py-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 size-4 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700 accent-primary"
              />
              <label
                htmlFor="terms"
                className="text-sm text-slate-600 dark:text-slate-400 leading-snug"
              >
                I agree to the{" "}
                <a href="#" className="text-primary font-medium hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary font-medium hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 active:scale-[0.98]"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative py-2 flex items-center">
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800" />
              <span className="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-widest">
                or sign up with
              </span>
              <div className="flex-grow border-t border-slate-100 dark:border-slate-800" />
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <img src={GOOGLE_LOGO} alt="Google" className="size-5" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Google
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <img src={APPLE_LOGO} alt="Apple" className="size-5 dark:invert" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Apple
                </span>
              </button>
            </div>
          </form>

          {/* Login CTA */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 text-center border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account?
              <a href="/login" className="text-primary font-bold hover:underline ml-1">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="text-slate-400 text-sm">
          © 2024 LingoFlash Inc. Master any language with flashcards.
        </p>
      </footer>
    </div>
  );
}
