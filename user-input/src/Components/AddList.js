import React from "react";
import Card from "./Card";
import "../style.css";
function List(props) {
  return (
    <Card>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.username}
              {user.userage}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default List;
