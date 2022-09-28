import React, { useState } from "react";

import "./style.css";

function App() {
  const [countDown, setCountDowm] = useState(4);
  const [text, setText] = React.useState({
    typeText: "",
  });

  const [isTimeRemaining, setTimeRemaining] = useState(false);
  const [countWord, setCountWord] = useState(0);
  const [isdisible, setDisible] = useState(false);
  const inputRef = React.useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setText((prev) => {
      return {
        [name]: value,
      };
    });
  }

  function countTotalWord(text) {
    const newArray = text.trim().split(" ");

    return newArray.filter((dat) => dat !== "").length;
  }

  function endGame() {
    console.log("end game");
    setTimeRemaining(false);
    setDisible(false);
    setCountWord(countTotalWord(text.typeText));
  }

  React.useEffect(() => {
    if (isTimeRemaining) {
      function decreased() {
        setCountDowm((prev) => prev - 1);
      }
      const myTimeout = setTimeout(decreased, 1000);

      if (countDown === 0) {
        endGame();
        clearTimeout(myTimeout);
      }
    }
  }, [countDown, isTimeRemaining]);

  function handleClick() {
    setTimeRemaining(true);
    setCountDowm(4);
    setDisible(true);
    setText({
      typeText: "",
    });
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={inputRef}
        name="typeText"
        onChange={handleChange}
        value={text.typeText}
        disabled={!isTimeRemaining}
      />
      <h4>Time remaining:{countDown}</h4>
      <button disabled={isTimeRemaining} onClick={handleClick}>
        start
      </button>
      <h1>word count:{countWord}</h1>
    </div>
  );
}

export default App;
