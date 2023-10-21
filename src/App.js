import "./App.css";
import { Gallows } from "./components/Gallows";
import Tab from "./components/Tab";
import { Word } from "./components/Word";
import { useState } from "react";


function App() {

  let hasło1 = "ABCFFF";

  const [hasło, setHasło] = useState(
    hasło1
      .split("")
      .map((x) => (x === " " ? " " : "-"))
      .join("")
  );

  return (
    <div className="App">
      <Word hasło1={hasło1} hasło={hasło} setHasło={setHasło} />
      <div className="container">
        <Gallows />
        <Tab hasło1={hasło1} hasło={hasło} setHasło={setHasło} />
      </div>
    </div>
  );
}

export default App;
