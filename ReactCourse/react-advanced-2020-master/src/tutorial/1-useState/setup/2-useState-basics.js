import React, { useState } from "react";

const UseStateBasics = () => {
  const value = useState("hello world  ");

  const [text, setText] = useState("randim title");

  const handleClick = () => {
    setText("hello world");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>;
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
