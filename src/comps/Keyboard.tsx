import React from "react";
import Latex from "react-latex";
import { symbols, letters } from "../latex-symbols";
import { Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
        minWidth: "50%",
        maxWidth: "50%",
        maxHeight: "30%",
        minHeight: "30%",
      }}
    >
      <Tabs variant="enclosed">
        <TabList>
          <Tab>
            {" "}
            <Latex displayMode={true}>{"$$f(x)$$"}</Latex>
          </Tab>
          <Tab>Letters</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {symbols.map((symbol) => (
              <Button style={{ maxHeight: "70px", minHeight: "70px" }}>
                {" "}
                <Latex displayMode={true}>{"$$" + symbol.comando + "$$"}</Latex>
              </Button>
            ))}
          </TabPanel>
          <TabPanel>
            {letters.map((symbol) => (
              <Button style={{ maxHeight: "70px", minHeight: "70px" }}>
                {" "}
                <Latex displayMode={true}>{"$$" + symbol.comando + "$$"}</Latex>
              </Button>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
export default Keyboard;
