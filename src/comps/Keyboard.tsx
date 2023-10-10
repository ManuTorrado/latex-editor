import React from "react";
import Latex from "react-latex";
import { symbols, letters } from "../latex-symbols";
import Tab from "./Tab/Tab";
import Tabs from "./Tab/Tabs";
import TabProvider from "./Tab/TabContext";

const Keyboard = () => {
  const buttonsSize: string = "50px";
  return (
    <div
      style={{
        bottom: 0,
        right: "25%",
        position: "fixed",
        padding: "10px",
        backgroundColor: "grey",
      }}
    >
      <div>
        <TabProvider>
          <Tabs>
            <Tab label="Letters">
              {letters.map((letter) => (
                <button
                  style={{
                    maxHeight: buttonsSize,
                    minHeight: buttonsSize,
                    maxWidth: buttonsSize,
                    minWidth: buttonsSize,
                  }}
                >
                  {" "}
                  <Latex displayMode={true}>
                    {"$$" + letter.comando + "$$"}
                  </Latex>
                </button>
              ))}
            </Tab>
            <Tab label="Simbols"></Tab>
          </Tabs>
        </TabProvider>
        {symbols.map((symbol) => (
          <button style={{ maxHeight: "70px", minHeight: "70px" }}>
            {" "}
            <Latex displayMode={true}>{"$$" + symbol.comando + "$$"}</Latex>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Keyboard;
