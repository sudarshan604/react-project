import React from "react";
import AddUser from "./Components/AddUser";
import "./style.css";
import List from "./Components/AddList";

function App() {
  const [personList, setPersonList] = React.useState([]);

  const addPersonList = ({ name, age }) => {
    setPersonList((prev) => {
      return [...prev, { username: name, userage: age }];
    });
  };

  return (
    <div>
      <AddUser listPerson={addPersonList} />
      <List users={personList} />
    </div>
  );
}
export default App;
