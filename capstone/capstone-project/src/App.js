import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import React from "react";
import "./style.css";
// import { UserContextConsumer } from "./Context";

function App() {
  // const value = React.useContext(UserContextConsumer);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/Photos">
          <Photos />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
