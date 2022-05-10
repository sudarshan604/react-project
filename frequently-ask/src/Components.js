import React, { useState } from "react";
import "./style.css";
function Component(props) {
  const [isSelect, setSelect] = useState(false);
  function handleClick() {
    setSelect(!isSelect);
  }
  return (
    <div className="wrapper">
      <header className="heading">
        <h2>{props.title}</h2>
        <button onClick={handleClick} className="toggle">
          {isSelect ? "-" : "+"}
        </button>
      </header>
      <p style={{ display: isSelect ? "block" : "none" }} className="answer">
        {props.info}
      </p>
    </div>
  );
}

export default Component;
