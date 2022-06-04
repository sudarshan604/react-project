import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";
function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-twitter-square"></i>
        <i className="top-icon fa-brands fa-pinterest"></i>
        <i className="top-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/write">
              write
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              {user && "logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-image"
            src="https://source.unsplash.com/random/50x50"
            alt="profile image"
          />
        ) : (
          <ul className="top-list">
            <li>
              <Link className="link" to="/login">
                login
              </Link>
            </li>
            <li>
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default TopBar;
