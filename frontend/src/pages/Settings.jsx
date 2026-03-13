import { useState } from "react";

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full relative flex items-center px-1 transition-colors duration-200 ${
        enabled ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
      }`}
      aria-pressed={enabled}
    >
      <span
        className={`bg-white size-4 rounded-full shadow transition-transform duration-200 ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
      {children}
    </h3>
  );
}

function SettingRow({ icon, title, description, action, divider = true }) {
  return (
    <>
      <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-slate-100">{title}</p>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
        <div className="shrink-0">{action}</div>
      </div>
      {divider && <div className="h-px bg-slate-200 dark:bg-slate-800 mx-4" />}
    </>
  );
}

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      {/* App Settings */}
      <section>
        <SectionTitle>App Settings</SectionTitle>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <SettingRow
            icon="language"
            title="App Language"
            description="Choose your interface language"
            action={
              <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <span className="text-sm">English (US)</span>
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </div>
            }
          />
          <SettingRow
            icon="dark_mode"
            title="Dark Mode"
            description="Adjust the app's appearance"
            divider={false}
            action={<Toggle enabled={darkMode} onToggle={() => setDarkMode((v) => !v)} />}
          />
        </div>
      </section>

      {/* Notifications */}
      <section>
        <SectionTitle>Notification Settings</SectionTitle>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <SettingRow
            icon="notifications_active"
            title="Push Notifications"
            description="Daily study reminders and news"
            action={<Toggle enabled={pushNotifs} onToggle={() => setPushNotifs((v) => !v)} />}
          />
          <SettingRow
            icon="mail"
            title="Weekly Progress Report"
            description="Summary of your learning statistics"
            divider={false}
            action={<Toggle enabled={emailDigest} onToggle={() => setEmailDigest((v) => !v)} />}
          />
        </div>
      </section>

      {/* Subscription & Billing */}
      <section>
        <SectionTitle>Subscription &amp; Billing</SectionTitle>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6">
          {/* Plan header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex gap-4">
              <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  LingoFlash Premium
                </h4>
                <p className="text-sm text-slate-500">
                  Next billing date: Oct 12, 2024 ($9.99/mo)
                </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded uppercase whitespace-nowrap">
                  Active
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded uppercase whitespace-nowrap">
                  Auto-renew on
                </span>
              </div>
              </div>
            </div>
            <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0">
              Change Plan
            </button>
          </div>

          {/* Payment & Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 mb-1">Payment Method</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">credit_card</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Visa ending in 4242
                  </span>
                </div>
                <button className="text-xs text-primary font-bold hover:text-primary/80">Edit</button>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 mb-1">Billing Address</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">location_on</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                    San Francisco, CA
                  </span>
                </div>
                <button className="text-xs text-primary font-bold hover:text-primary/80">Edit</button>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <button className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors">
              Cancel Subscription
            </button>
            <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              View Billing History
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>
      </section>

      {/* Account */}
      <section>
        <SectionTitle>Account</SectionTitle>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
                <span className="material-symbols-outlined">delete</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-red-500">Delete Account</p>
                <p className="text-sm text-slate-500">Permanently remove your data</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
}
