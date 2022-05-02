import React from "react";
import "../style.css";
export default function Hero() {
  return (
    <main>
      <img
        className="photo-grid"
        src={require("../images/photo-grid.png")}
        alt="photogrid"
      />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
