import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { icon: "dashboard", label: "Dashboard", to: "/dashboard" },
  { icon: "style", label: "My Decks", to: "/decks" },
  { icon: "person", label: "Profile", to: "/profile" },
  { icon: "settings", label: "Settings", to: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0">
      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map(({ icon, label, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/20"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            }
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}