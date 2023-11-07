import "./App.css";
import { Gallows } from "./components/Gallows";
import Tab from "./components/Tab";
import { Word } from "./components/Word";
import { useEffect, useState } from "react";
import Categories from "./components/Categories";

function App() {
  const [guessWord, setGuessWord] = useState("");

  const [misses, setMisses] = useState(0);

  const [displayWord, setDisplayWord] = useState();

  useEffect(() => {
    setDisplayWord(
      guessWord
        .split("")
        .map((x) => (x === " " ? " " : "-"))
        .join("")
    );
  }, [guessWord]);

  return (
    <div className="App">
      {guessWord ? (
        <Word
          guessWord={guessWord}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
        />
      ) : (
        <Categories setGuessWord={setGuessWord} />
      )}
      <div className="container">
        <Gallows misses={misses} />
        <Tab
          guessWord={guessWord}
          displayWord={displayWord}
          setDisplayWord={setDisplayWord}
          misses={misses}
          setMisses={setMisses}
        />
      </div>
    </div>
  );
}

export default App;
