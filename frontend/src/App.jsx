import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MyDecks from "./pages/MyDecks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import DeckSession from "./pages/DeckSession";
import StudySession from "./pages/StudySession";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/decks" element={<MyDecks />} />
        <Route path="/decks/:deckId" element={<DeckSession />} />
        <Route path="/decks/study/:deckId" element={<StudySession />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
