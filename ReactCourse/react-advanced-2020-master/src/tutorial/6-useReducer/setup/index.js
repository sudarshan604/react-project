import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const addPeople = [...state.people, action.addPeople];
    return {
      ...state,
      people: addPeople,
      isModalOpen: true,
      ModalContent: "item added",
    };
  }
  if (action.type === "NO_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      ModalContent: "please add item",
    };
  }
  throw new Error("no matching action type");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  ModalContent: " ",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log("hello world");

      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: "TESTING", addPeople: newPeople });
      setName(" ");
    } else {
      console.log("hello");
      dispatch({ type: "NO_ITEM" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.ModalContent} />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
      {state.people.map((person) => {
        return <h2 key={person.id}>{person.name}</h2>;
      })}
    </>
  );
};

export default Index;
