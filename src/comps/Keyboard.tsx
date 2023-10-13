import React, { useState } from "react";
import Latex from "react-latex";
import { symbols, letters } from "../latex-symbols";
import { Button, CloseButton } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

interface Props {
  onInput: Function;
  closed?: boolean;
}

type Symbol = { nombre: string; comando: string };

const Keyboard = (props: Props) => {
  const { closed = true } = props;
  const [isClosed, setClosed] = useState(closed);
  const toggleKeyboard = () => setClosed(!isClosed);

  const buttonsSize: string = "50px";

  const handleKeyClick = (s: Symbol) => {
    props.onInput(s);
  };

  return (
    <>
      {isClosed ? (
        <div
          style={{
            position: "fixed",
            bottom: 0,
          }}
        >
          <Button onClick={toggleKeyboard}>Keyboard</Button>
        </div>
      ) : (
        <div
          style={{
            bottom: 0,
            backgroundColor: "white",
            position: "fixed",
            padding: "10px",
            minWidth: "100%",
            maxWidth: "100%",
            maxHeight: "30%",
            minHeight: "30%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CloseButton onClick={toggleKeyboard} />
            <Tabs>
              <TabList>
                <Tab>
                  {" "}
                  <Latex displayMode={true}>{"$$f(x)$$"}</Latex>
                </Tab>
                <Tab>Letters</Tab>
              </TabList>

              <TabPanels>
                <TabPanel style={{ display: "flex", gap: "10%" }}>
                  {symbols.map((symbol, key) => (
                    <Button
                      title={symbol.nombre}
                      key={key}
                      onClick={(e) => {
                        handleKeyClick(symbol);
                      }}
                      style={{ maxHeight: "70px", minHeight: "70px" }}
                    >
                      {" "}
                      <Latex displayMode={true}>
                        {"$$" + symbol.comando + "$$"}
                      </Latex>
                    </Button>
                  ))}
                </TabPanel>
                <TabPanel style={{ display: "flex", gap: "1%" }}>
                  {letters.map((symbol, key) => (
                    <Button
                      title={symbol.nombre}
                      key={key}
                      onClick={(e) => {
                        handleKeyClick(symbol);
                      }}
                      style={{ maxHeight: "70px", minHeight: "70px" }}
                    >
                      {" "}
                      <Latex displayMode={true}>
                        {"$$" + symbol.comando + "$$"}
                      </Latex>
                    </Button>
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};
export default Keyboard;
