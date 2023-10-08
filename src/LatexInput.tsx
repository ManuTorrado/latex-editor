import React, { ChangeEvent } from "react";

interface Props {
  onInput(e: React.FormEvent<HTMLDivElement>): void;
}

const LatexInput = (props: Props) => {
  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    props.onInput(event);
  };

  return (
    <div
      contentEditable
      style={{
        resize: "none",
        display: "inline-block",
        width: "50vw",
        height: "100vh",
       
      }}
      onInput={handleInput}
    />
  );
};

export default LatexInput;
