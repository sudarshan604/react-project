import React, { useEffect, useState } from "react";

const Modal = ({ modalContent, closeModal }) => {
  // console.log(modalContent);
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <h2>{modalContent}</h2>
    </div>
  );
};

export default Modal;
