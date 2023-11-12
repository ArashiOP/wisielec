import Letter from "./Letter";
import { Result } from "./Result";
import { alphabet } from "../consts/alphabet";

export default function Tab({
  displayWord,
  setDisplayWord,
  guessWord,
  misses,
  setMisses,
  setGuessWord,
}) {
  let message;
  if (misses >= 9) {
    message = "PRZEGRAŁEŚ!";
  } else if (displayWord ? !displayWord.includes("-") : false) {
    message = "WYGRAŁEŚ!";
  } else {
    message = "Wybierz kategorię";
  }

  if (!displayWord || !displayWord.includes("-") || misses >= 9) {
    return (
      <Result setMisses={setMisses} setGuessWord={setGuessWord} setDisplayWord={setDisplayWord}>
        {message}
      </Result>
    );
  } else {
    // if (misses >= 9) {
    //   return <Result setMisses={setMisses}>PRZEGRAŁEŚ!</Result>;
    // } else if (displayWord ? !displayWord.includes("-") : false) {
    //   return <Result setMisses={setMisses}>WYGRAŁEŚ!</Result>;
    // } else if (!displayWord) {
    //   return <Result >Wybierz kategorię</Result>;
    // } else {
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
