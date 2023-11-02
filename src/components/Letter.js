import { useState } from "react";

export default function Letter({
  children: letter,
  setDisplayWord,
  guessWord,
  displayWord,
  misses,
  setMisses,
}) {
  const [letterStatus, setLetterStatus] = useState("LetterNeutral");

  function handleClick() {
    let newWord = displayWord;
    let newMisses = misses;
    for (let i = 0; i < guessWord.length; i++) {
      if (guessWord[i] === letter && newWord[i] !== letter) {
        newWord = newWord.slice(0, i) + letter + newWord.slice(i + 1);
      }
    }
    if (newWord === displayWord) {
      setLetterStatus("LetterMiss");
      newMisses++;
    } else {
      setLetterStatus("LetterScore");
    }
    setDisplayWord(newWord);
    setMisses(newMisses);
  }

  return (
    <div
      onClick={letterStatus !== "LetterNeutral" ? null : handleClick}
      className={letterStatus}
    >
      {letter}
    </div>
  );
}