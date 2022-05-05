import React from "react";
import frequently from "./Data";
import Component from "./Components";
function App() {
  return (
    <div>
      {frequently.map((dat) => (
        <Component title={dat.question} info={dat.answer} />
      ))}
    </div>
  );
}

export default App;
