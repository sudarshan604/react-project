import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  };

  return (
    <>
      <h2> counter example</h2>
      <h1>{count}</h1>

      <button onClick={increaseCount}>click</button>
    </>
  );
};

export default UseStateCounter;
