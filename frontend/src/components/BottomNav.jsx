import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">

      <NavLink to="/dashboard" className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-primary" : "flex flex-col items-center gap-1 text-slate-400"}>
        <span className="material-symbols-outlined">dashboard</span>
        <span className="text-[10px] font-bold">Home</span>
      </NavLink>

      <NavLink to="/decks" className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-primary" : "flex flex-col items-center gap-1 text-slate-400"}>
        <span className="material-symbols-outlined">style</span>
        <span className="text-[10px] font-bold">Decks</span>
      </NavLink>

      <div className="relative -top-8">
        <button className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-background-light dark:border-background-dark">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>

      <NavLink to="/profile" className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-primary" : "flex flex-col items-center gap-1 text-slate-400"}>
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-bold">Profile</span>
      </NavLink>

      <NavLink to="/settings" className={({ isActive }) => isActive ? "flex flex-col items-center gap-1 text-primary" : "flex flex-col items-center gap-1 text-slate-400"}>
        <span className="material-symbols-outlined">settings</span>
        <span className="text-[10px] font-bold">Settings</span>
      </NavLink>

    </nav>
  );
}