import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sudarshan kshteri",
    age: 25,
    messgae: "hello my name is sudarshan kshetri",
  });

  const changeMessage = () => {
    setPerson({ ...person, messgae: "hello world" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h2>{person.age}</h2>
      <p>{person.messgae}</p>

      <button className="btn" onClick={changeMessage}></button>
    </>
  );
};

export default UseStateObject;
