import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="emailName">Name : </label>
          <input type="email" id="emailName" name="firstName" />
        </div>
      </form>
    </>
  );
};

export default ControlledInputs;
