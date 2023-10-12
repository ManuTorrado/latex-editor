import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const TabContext = React.createContext({ labels: [""] });

export const useTabContext = () => {
  return useContext(TabContext);
};

const TabProvider = (props: Props) => {
  return (
    <TabContext.Provider value={{ labels: [""] }}>
      {props.children}
    </TabContext.Provider>
  );
};

export default TabProvider;
