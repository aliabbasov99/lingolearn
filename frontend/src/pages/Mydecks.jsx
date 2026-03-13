import { useState } from "react";
import DeckCard from "../components/DeckCard";

const MY_DECKS = [
  {
    id: 1,
    icon: "business_center",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    title: "Business English",
    count: 120,
    badges: [{ text: "8 times added" }],
  },
  {
    id: 2,
    icon: "flight_takeoff",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Travel Phrases",
    count: 85,
    badges: [{ text: "Not Shared", variant: "muted" }],
  },
  {
    id: 3,
    icon: "medical_services",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "Medical Terms",
    count: 150,
    badges: [{ text: "Not Shared", variant: "muted" }],
  },
  {
    id: 4,
    icon: "chat",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Daily Conversation",
    count: 200,
    badges: [{ text: "15 times added" }],
  },
  {
    id: 5,
    icon: "school",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    title: "Academic Vocabulary",
    count: 300,
    badges: [{ text: "Not Shared", variant: "muted" }],
  },
  {
    id: 6,
    icon: "memory",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    iconColor: "text-slate-600 dark:text-slate-400",
    title: "IT Terminology",
    count: 110,
    badges: [{ text: "6 times added" }],
  },
];

const BROWSE_DECKS = [
  {
    id: 1,
    icon: "work",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Business English",
    count: 150,
    badges: [{ text: "4 times added" }],
  },
  {
    id: 2,
    icon: "flight_takeoff",
    iconBg: "bg-sky-100 dark:bg-sky-900/30",
    iconColor: "text-sky-600 dark:text-sky-400",
    title: "Travel Phrases",
    count: 180,
    badges: [{ text: "12 times added" }],
  },
  {
    id: 3,
    icon: "medical_services",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
    title: "Medical Terminology",
    count: 200,
    badges: [{ text: "7 times added" }],
  },
  {
    id: 4,
    icon: "restaurant",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "Daily Lifestyle",
    count: 120,
    badges: [{ text: "3 times added" }],
  },
  {
    id: 5,
    icon: "spellcheck",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    title: "Essential Grammar",
    count: 100,
    badges: [{ text: "9 times added" }],
  },
  {
    id: 6,
    icon: "museum",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    title: "Cultural Nuances",
    count: 95,
    badges: [{ text: "2 times added" }],
  },
];

const TABS = ["My Decks", "Browse Decks"];

export default function MyDecks() {
  const [activeTab, setActiveTab] = useState("My Decks");
  const [search, setSearch] = useState("");

  const filteredBrowse = BROWSE_DECKS.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Page Title */}
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight">My Library</h2>
        <p className="text-slate-500 text-sm">Organize and master your language collections.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 -mt-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* My Decks Grid */}
      {activeTab === "My Decks" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MY_DECKS.map((deck) => (
            <DeckCard key={deck.id} {...deck} />
          ))}
        </div>
      )}

      {/* Browse Decks */}
      {activeTab === "Browse Decks" && (
        <div className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search decks..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredBrowse.length > 0 ? (
              filteredBrowse.map((deck) => (
                <DeckCard
                  key={deck.id}
                  {...deck}
                  countSuffix="cards"
                  buttonLabel="Add Deck"
                  buttonIcon="add_circle"
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
                <span className="material-symbols-outlined text-5xl">search_off</span>
                <p className="text-base font-medium">No decks found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
