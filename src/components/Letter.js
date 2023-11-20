import { useState, useEffect } from "react";

export default function Letter({
  children: letter,
  setDisplayWord,
  guessWord,
  displayWord,
  misses,
  setMisses,
}) {
  const uniqueStatus = "letterStatus_" + letter;
  const [letterStatus, setLetterStatus] = useState(() => {
    const localValueLetterStatus = localStorage.getItem(uniqueStatus);
    return localValueLetterStatus !== null
      ? JSON.parse(localValueLetterStatus)
      : "letter letter-neutral";
  });

  useEffect(() => {
    localStorage.setItem(uniqueStatus, JSON.stringify(letterStatus));
  }, [letterStatus, uniqueStatus]);

  const handleClick = () => {
    let newWord = displayWord;
    let newMisses = misses;
    for (let i = 0; i < guessWord.length; i++) {
      if (guessWord[i] === letter && newWord[i] !== letter) {
        newWord = newWord.slice(0, i) + letter + newWord.slice(i + 1);
      }
    }
    if (newWord === displayWord) {
      setLetterStatus("letter letter-miss");
      newMisses++;
    } else {
      setLetterStatus("letter letter-score");
    }
    setDisplayWord(newWord);
    setMisses(newMisses);
  };

  return (
    <div
      onClick={letterStatus !== "letter letter-neutral" ? null : handleClick}
      className={letterStatus}
    >
      {letter}
    </div>
  );
}
