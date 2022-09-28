import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
import { context } from "../Context";
function Header() {
  const { cardItem } = React.useContext(context);

  const cartClass =
    cardItem.length - 1 > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <header>
      <h2>
        <Link to="/Photos">pic Some</Link>
      </h2>

      <Link to="/Cart">
        <i className={`${cartClass} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
