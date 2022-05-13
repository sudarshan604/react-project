import "../style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>
        <Link to="/Photos">pic Some</Link>
      </h2>

      <Link to="/Cart">
        {" "}
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}

export default Header;
