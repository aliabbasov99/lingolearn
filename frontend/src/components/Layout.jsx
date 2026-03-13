import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto flex gap-8 p-4 lg:p-10">
        <Sidebar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <BottomNav />
      <div className="lg:hidden h-20" />
    </div>
  );
}