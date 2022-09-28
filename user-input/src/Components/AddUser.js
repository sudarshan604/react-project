import React from "react";
import Card from "./Card";
import "../style.css";
import Button from "./Button";
import Error from "./ErrorComp";
function AddUser(props) {
  const [userInfo, setUserInfo] = React.useState({
    userName: "",
    userAge: "",
  });

  const [error, setError] = React.useState();

  function hanldesubmit(e) {
    e.preventDefault();
    if (
      userInfo.userName.trim().length === 0 ||
      userInfo.userAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "field cannot be empty",
      });
    }
    if (+userInfo.userAge < 0) {
      setError({
        title: "invalid input",
        message: "Age should be greate then 0",
      });
    }

    props.listPerson({ name: userInfo.userName, age: userInfo.userAge });

    setUserInfo({
      userAge: "",
      userName: "",
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleClick() {
    setError();
  }
  return (
    <div>
      {error && (
        <Error
          onClick={handleClick}
          message={error.message}
          title={error.title}
        />
      )}
      <Card>
        <form onSubmit={hanldesubmit}>
          <label htmlFor="userName">Usernamme</label>
          <input
            name="userName"
            onChange={handleChange}
            id="userName"
            type="text"
            value={userInfo.userName}
          />
          <label htmlFor="age">Age</label>
          <input
            value={userInfo.userAge}
            name="userAge"
            onChange={handleChange}
            id="age"
            type="number"
          />
          <br />
          <Button type="submit" className="btn">
            Click me
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
