import React from "react";
interface Props {
  children?: React.ReactNode;
  label?: string;
}

const Tab = (props: Props) => {
  return <>{props.children}</>;
};

export default Tab;
