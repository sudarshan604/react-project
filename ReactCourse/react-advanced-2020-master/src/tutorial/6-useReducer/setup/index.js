import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [person, setPerson] = useState(data);
  const [name, setName] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPerson({ ...person, id: new Date().getTime().toString() });
    } else {
      setShowModal(true);
    }
    setName(" ");
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
      {data.map((person) => {
        return <h2 key={person.id}>{person.name}</h2>;
      })}
    </>
  );
};

export default Index;
