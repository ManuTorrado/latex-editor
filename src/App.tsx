import React, { useState } from "react";
import "./App.css";
import Display from "./comps/Display";
import LatexInput from "./comps/LatexInput";
import Keyboard from "./comps/Keyboard";

type Symbol = { nombre: string; comando: string };

function App() {
  const [areaInput, setAreaInput] = useState<string>("");

  const handleInput = (event: React.FormEvent<HTMLDivElement>) =>
    setAreaInput(
      event.currentTarget.textContent ? event.currentTarget.textContent : ""
    );

  const handleKeyboard = (symbol: Symbol) => {
    setAreaInput(areaInput + symbol.comando);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <LatexInput onInput={handleInput} />
        <Display content={areaInput} />
      </div>
      <Keyboard onInput={handleKeyboard} />
    </div>
  );
}

export default App;
