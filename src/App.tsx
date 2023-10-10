import React, { useState } from "react";
import "./App.css";
import Display from "./comps/Display";
import LatexInput from "./comps/LatexInput";
import Keyboard from "./comps/Keyboard";

function App() {
  const [areaInput, setAreaInput] = useState<string>("");

  const handleInput = (event: React.FormEvent<HTMLDivElement>) =>
    setAreaInput(
      event.currentTarget.textContent ? event.currentTarget.textContent : ""
    );

  return (
    <div>
      <button>Source</button>
      <button>Beutify</button>
      <div style={{ display: "flex" }}>
        <LatexInput onInput={handleInput} />
        <Display content={areaInput} />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
