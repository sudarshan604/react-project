import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Node</span>
        <spam className="header-title-bg">Blog</spam>
      </div>
      <img className="header-image" src="https://source.unsplash.com/random/" />
    </div>
  );
}
export default Header;
