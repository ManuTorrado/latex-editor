import React from "react";

import { useTabContext } from "./TabContext";

interface Props {
  children?: React.ReactNode;
  label?: string;
}

const Tab = (props: Props) => {
  const context = useTabContext();
  return <>{props.children}</>;
};

export default Tab;
