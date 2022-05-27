import "../../style.css";

function Navabar() {
  return (
    <header>
      <nav>
        <div className="imd-name">IMDb</div>
        <div className="search-bar">
          <input type="text" />
          <span class="ri-search-line searchicon"></span>
        </div>
        <p className="imdb hover">
          IMDb <span>pro</span>
          <span className="hori"></span>
        </p>
        <div className="watch hover">watchlist</div>
        <div className="sign hover">signin</div>
      </nav>
    </header>
  );
}

export default Navabar;
