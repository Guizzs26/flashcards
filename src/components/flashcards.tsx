import { useState } from "react";
import styles from "./flashcards.module.css";

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
      {flashcardsData.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={styles.question}
        >
          <p>
            {question.id === selectedId ? question.answer : question.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
