import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setisError(true);
          setLoading(false);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        setUser(user.login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1> Error...</h1>
      </div>
    );
  }
  return <h1>{user}</h1>;
};

export default MultipleReturns;
