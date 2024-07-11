import { Flashcards } from "./components/flashcards";
import { flashcards } from "./data/flashcards.data";

export default function App() {
  return <Flashcards flashcardsData={flashcards} />;
}
