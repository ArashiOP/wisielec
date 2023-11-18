import "./App.css";
import { Gallows } from "./components/Gallows";
import Tab from "./components/Tab";
import { Word } from "./components/Word";
import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import InputWordPopUp from "./components/InputWordPopUp";

function App() {
  const [guessWord, setGuessWord] = useState(() => {
    const localValueGuessWord = localStorage.getItem("guessWord");
    return localValueGuessWord !== null ? JSON.parse(localValueGuessWord) : "";
  });

  const [misses, setMisses] = useState(() => {
    const localValueMisses = localStorage.getItem("misses");
    return localValueMisses !== null ? JSON.parse(localValueMisses) : 0;
  });

  const [displayWord, setDisplayWord] = useState(() => {
    const localValueDisplayWord = localStorage.getItem("displayWord");
    return localValueDisplayWord !== null
      ? JSON.parse(localValueDisplayWord)
      : null;
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("misses", JSON.stringify(misses));
  }, [misses]);

  useEffect(() => {
    localStorage.setItem("guessWord", JSON.stringify(guessWord));
  }, [guessWord]);

  useEffect(() => {
    localStorage.setItem("displayWord", JSON.stringify(displayWord));
  }, [displayWord]);

  useEffect(() => {
    displayWord ||
      setDisplayWord(
        guessWord
          .split("")
          .map((x) => (x === " " ? " " : "-"))
          .join("")
      );
  }, [guessWord, displayWord]);
  // localStorage.clear()

  return (
    <div className="App">
      {guessWord ? (
        <Word guessWord={guessWord} displayWord={displayWord} misses={misses} />
      ) : (
        <Categories setIsVisible={setIsVisible} setGuessWord={setGuessWord} />
      )}
      <div className="container">
        <Gallows misses={misses} />
        <Tab
          guessWord={guessWord}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
          misses={misses}
          setMisses={setMisses}
          setGuessWord={setGuessWord}
        />
      </div>
      <InputWordPopUp
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setGuessWord={setGuessWord}
      />
    </div>
  );
}

export default App;
