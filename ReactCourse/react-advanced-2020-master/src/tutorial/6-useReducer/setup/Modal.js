import React, { useEffect, useState } from "react";

const Modal = ({ modalContent }) => {
  // console.log(modalContent);
  return (
    <div className="modal">
      <h2>{modalContent}</h2>
    </div>
  );
};

export default Modal;
