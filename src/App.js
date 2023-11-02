import "./App.css";
import { Gallows } from "./components/Gallows";
import Tab from "./components/Tab";
import { Word } from "./components/Word";
import { useState } from "react";

function App() {
  let guessWord = "ALFABET";

  const [misses, setMisses] = useState(0);

  const [displayWord, setDisplayWord] = useState(
    guessWord
      .split("")
      .map((x) => (x === " " ? " " : "-"))
      .join("")
  );

  return (
    <div className="App">
      <Word
        guessWord={guessWord}
        displayWord={displayWord}
        setDisplayWord={setDisplayWord}
      />
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
