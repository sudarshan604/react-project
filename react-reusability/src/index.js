import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const reactElement = React.createElement("div", null, "hello");

// const reactElement = <button>hello</button>;

const Button = ({ children, colors }) => {
  return (
    <div style={{ color: colors }}>
      {children} This is operational.
      <br />
    </div>
  );
};

function App() {
  return (
    <div>
      <Button colors="green">Success</Button>
      <Button colors="red">Remove</Button>
      <Button colors="yellow">Warning</Button>
      <Button colors="blue">Beta</Button>
    </div>
  );
}

root.render(
  <div>
    <App />
  </div>
);
