import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>hide/show</button>
      {show && <Title />}
    </>
  );
};

const Title = () => {
  const [value, setValue] = useState(window.innerWidth);

  const changeSize = () => {
    setValue(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
  }, []);

  return (
    <>
      <h2>Window</h2>
      <h3>size:{value}</h3>
    </>
  );
};

export default ShowHide;
