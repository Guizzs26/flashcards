import styles from "./flashcards.module.css";
import { useState } from "react";

export type FlashcardsProps = {
  flashcardsData: { id: string; question: string; answer: string }[];
};

export function Flashcards({ flashcardsData }: FlashcardsProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className={styles.flashcards}>
      {flashcardsData.map((flashcard) => (
        <div
          key={flashcard.id}
          onClick={() => handleClick(flashcard.id)}
          className={`${styles.flashcard} ${
            flashcard.id === selectedId ? styles.selected : ""
          }`}
        >
          <p>
            {flashcard.id === selectedId
              ? flashcard.answer
              : flashcard.question}
          </p>
        </div>
      ))}
    </div>
  );
}
