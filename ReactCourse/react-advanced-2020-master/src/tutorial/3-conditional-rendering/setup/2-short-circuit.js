import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setError] = useState(false);

  const firstValue = text || "hello world";

  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || <h1>ankit </h1>}</h1>
      <h2>{text && <h2>ganesh saud</h2>}</h2>
      <button clasName="btn" onClick={() => setError(!isError)}>
        toggle
      </button>
      {isError && <h2>this is an error...</h2>}
      {isError ? <h2>sudarshan</h2> : <h2>kshetri</h2>}
    </>
  );
};

export default ShortCircuit;
