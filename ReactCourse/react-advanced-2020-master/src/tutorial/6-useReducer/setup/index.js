import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";
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
      dispatch({ type: "NO_ITEM" });
    }
  };
  const removeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={removeModal} modalContent={state.ModalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h2>{person.name}</h2>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", itemId: person.id })
              }
            >
              Remove item
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
