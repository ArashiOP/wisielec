import Letter from "./Letter";
import { Result } from "./Result";

const alphabet = [
  "A",
  "Ą",
  "B",
  "C",
  "Ć",
  "D",
  "E",
  "Ę",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Ł",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Ś",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ź",
  "Ż",
];

export default function Tab({
  displayWord,
  setDisplayWord,
  guessWord,
  misses,
  setMisses,
}) {
  if (misses >= 9) {
    return <Result>YOU LOOSE</Result>;
  } else if (displayWord ? !displayWord.includes("-") : false) {
    return <Result>YOU WIN</Result>;
  } else {
    return (
      <div className="Tab">
        {alphabet.map((letter, index) => (
          <Letter
            displayWord={displayWord}
            guessWord={guessWord}
            setDisplayWord={setDisplayWord}
            className="LetterNeutral"
            key={index}
            misses={misses}
            setMisses={setMisses}
          >
            {letter}
          </Letter>
        ))}
      </div>
    );
  }
}
