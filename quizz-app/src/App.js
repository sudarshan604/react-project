import React from "react";
import Data from "./Data";
import "./style.css";

function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleClick() {
    setCurrentIndex((prev) => prev + 1);
  }
  return (
    <div className="wrapper">
      <section className="question">
        <h2>
          Remaining questions {currentIndex}/{Data.length}
        </h2>
        <p>{Data[currentIndex].questions} ?</p>
      </section>
      <section className="answer">
        {Data[currentIndex].answerOptions.map((ans) => (
          <button onClick={handleClick}>{ans.answerText}</button>
        ))}
      </section>
    </div>
  );
}
export default App;
