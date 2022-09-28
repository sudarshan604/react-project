import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const changeSize = () => {
    // alert("hello");
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("helo");
    // window.addEventListener("click", changeSize);

    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
