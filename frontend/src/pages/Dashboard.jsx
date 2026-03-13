import FlashCardCreator from "../components/FlashCardCreator";
import TranslationPreview from "../components/Translatepreview";
import RecentCards from "../components/Recentscards";

const cards = [
  { word: "Morning", translation: "Mañana" },
  { word: "Library", translation: "Biblioteca" },
  { word: "Success", translation: "Éxito" },
  { word: "Journey", translation: "Viaje" },
];

export default function Dashboard() {
    return (
      <div className="flex flex-col gap-8">
        <FlashCardCreator sourceLang={"Azerbaijani"} targetLang={"English"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TranslationPreview original={"Adventure"} translation={"Aventura"} />
          <RecentCards cards={cards} />
        </div>
      </div>
    );
}