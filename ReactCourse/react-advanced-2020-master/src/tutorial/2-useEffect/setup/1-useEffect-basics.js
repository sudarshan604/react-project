import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [value, setValue] = useState(0);

  const changeValur = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    console.log("call useEffect");
  });

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={changeValur}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
