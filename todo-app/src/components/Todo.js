import React from "react";

let toDo = 0;

function Todo() {
  const [todo, setTod] = React.useState([]);

  const [value, setValue] = React.useState("");

  function createNewNote() {
    setTod((prev) => [...prev, { text: value, id: toDo++ }]);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function saveOnEnter(e) {
    if (e.keyCode === 13) {
      createNewNote();
    }
  }

  function deleteNote(dleteId) {
    setTod((oldTodo) => oldTodo.filter((list) => list.id !== dleteId));
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={saveOnEnter}
      />
      <button onClick={createNewNote}>Add to note</button>
      {todo.map((list, index) => (
        <div key={index}>
          <li>
            {list.text}
            {list.id}
          </li>
          <button onClick={() => deleteNote(list.id)}> delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
