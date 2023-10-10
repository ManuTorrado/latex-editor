import React, { useState } from "react";
import Tab from "./Tab";
interface Props {
  children: React.ReactNode;
}

const Tabs = (props: Props) => {
  const [selectedTab, setTab] = useState(0);
  return <div>{props.children}</div>;
};

export default Tabs;
