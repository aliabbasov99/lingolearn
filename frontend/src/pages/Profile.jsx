import { useState } from "react";

const WEEKLY_BARS = [
  { day: "Mon", height: "40%", active: false },
  { day: "Tue", height: "60%", active: false },
  { day: "Wed", height: "30%", active: false },
  { day: "Thu", height: "80%", active: true, dim: true },
  { day: "Fri", height: "100%", active: true },
  { day: "Sat", height: "50%", active: false },
  { day: "Sun", height: "45%", active: false },
];

export default function Profile() {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      {/* Profile Header Card */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        {/* Avatar */}
        <div className="relative group shrink-0">
          <div className="w-32 h-32 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PoJIHqJ7rnjMgkFvupfimSPwN7_DjSJc8SFcwTFBDWHS2z6NHN7cN45kcPa7lZDWS5XOUul_TRBzqU7BeMYxF-WYYWZU6EWR3j49AGIZG9WZzNFCwkpubKHz9mEKh6vCLV-p_RF8Ga9qAoEVoBmGKMjyQgCOOFtvXvi7sTiZJLAV8GGQZRp_thktDEzoWlwt6RzcpYD4rIWGiJ4rWQmxxznLxOlSFVNh9btA6QGhmSCn5hXFzd0s2mc_ghZn3eBhSLjQA9Ph9hY"
              alt="Profile picture of Alex Rivera"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-900">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>

        {/* Info */}
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Rivera</h2>
          <p className="text-slate-500 dark:text-slate-400">alex.rivera@email.com</p>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              Pro Member
            </span>
            <span className="text-xs text-slate-400">Since October 2023</span>
          </div>
        </div>

        {/* Edit button */}
        <div className="md:ml-auto">
          <button className="px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Personal Info + Security */}
        <div className="lg:col-span-2 space-y-8">
          {/* Personal Information */}
          <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white">Personal Information</h3>
              <button className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                Change
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", value: "Alex Rivera" },
                { label: "Email Address", value: "alex.rivera@email.com" },
                { label: "Language Interests", value: "Spanish, Japanese, French" },
                { label: "Location", value: "San Francisco, USA" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">
                    {label}
                  </label>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Account Security */}
          <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white">Account Security</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-200">Password</p>
                    <p className="text-sm text-slate-500">Last changed 3 months ago</p>
                  </div>
                </div>
                <button className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                  Update
                </button>
              </div>

              {/* 2FA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-slate-500">Enable for extra security</p>
                  </div>
                </div>
                {/* Toggle */}
                <button
                  onClick={() => setTwoFactor((v) => !v)}
                  className={`relative inline-flex w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                    twoFactor ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                  aria-pressed={twoFactor}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                      twoFactor ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Stats + Sign Out */}
        <div className="space-y-8">
          <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Learning Statistics</h3>
            <div className="space-y-6">
              {/* Words Learned */}
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Total Words Learned
                  </span>
                  <span className="text-primary font-bold text-xl">1,250</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full">
                  <div className="bg-primary h-2 rounded-full w-[65%]" />
                </div>
                <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  +12% from last month
                </div>
              </div>

              {/* Daily Streak */}
              <div className="p-4 bg-orange-500/5 rounded-xl border border-orange-500/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 block">
                      Daily Streak
                    </span>
                    <span className="text-orange-600 font-bold text-2xl tracking-tight">
                      45 Days
                    </span>
                  </div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600">
                    <span className="material-symbols-outlined text-3xl">local_fire_department</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>
                  Top 5% of learners
                </div>
              </div>

              {/* Weekly Progress Chart */}
              <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Weekly Progress
                  </span>
                </div>
                <div className="flex items-end justify-between h-20 gap-2">
                  {WEEKLY_BARS.map(({ day, height, active, dim }) => (
                    <div
                      key={day}
                      className={`w-full rounded-t-sm transition-all ${
                        active
                          ? dim
                            ? "bg-primary/60"
                            : "bg-primary"
                          : "bg-slate-200 dark:bg-slate-700"
                      }`}
                      style={{ height }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium uppercase">
                  {WEEKLY_BARS.map(({ day }) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sign Out */}
          <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors font-semibold">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
