import "../style.css";
export default function Navbar() {
  return (
    <nav>
      <img
        className="airbnb-img"
        src={require("../images/air-bnb-logo.jpg")}
        alt="air bnb logo"
      />
    </nav>
  );
}
