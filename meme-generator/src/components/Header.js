import React from "react";
import "../style.css";
export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../images/troll-face.png")}
        alt="face"
        className="header-img"
      />

      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}
