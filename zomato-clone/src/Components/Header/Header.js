import "../../style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="hamburger-header">
      <input type="checkbox" className="checkbox" />

      <div className="hamburger-lines">
        <span className="lines1 lines"></span>
        <span className="lines2 lines"></span>
        <span className="lines3 lines"></span>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li className="app-name">
            <Link className="link" to="/">
              get the App
            </Link>
          </li>
          <li>
            <Link className="link" to="/investor">
              Invest Relation
            </Link>
          </li>
          <li>
            <Link className="link" to="/resturant">
              Add resturant
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              log in
            </Link>
          </li>
          <li>
            <Link className="link" to="/signup">
              sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
