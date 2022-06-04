import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <d iv className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://source.unsplash.com/random/200x200"
          alt="random image"
        />

        <p>
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </p>
      </d>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLlOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fa-brands fa-facebook-square"></i>
          <i className="sidebar-icon fa-brands fa-twitter-square"></i>
          <i className="sidebar-icon fa-brands fa-pinterest"></i>
          <i className="sidebar-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
