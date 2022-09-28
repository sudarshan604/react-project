import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  console.log(useState);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>clear me</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </>
  );
};

export default UseStateArray;
