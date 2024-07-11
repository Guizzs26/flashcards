import styles from "./App.module.css";

import { Flashcards } from "./components/flashcards";
import { flashcards } from "./data/flashcards.data";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Flashcards flashcardsData={flashcards} />
    </div>
  );
}
