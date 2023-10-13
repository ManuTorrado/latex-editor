import React from "react";
import Latex from "react-latex";

const Display = ({ content = "" }) => {
    
  const FormatedText = (
    <Latex displayMode={true}>{"" + content + ""}</Latex>
  );

  return (
    <div style={{ display: "inline-block", width: "50vw" }}>{FormatedText}</div>
  );
};

export default Display;
