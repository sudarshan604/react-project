import "../../style.css";
import crdata from "../../data/crdata";
import Featured from "../Featured/Feature";
import aside from "../../data/aside";
import Aside from "../Featured/Aside";
function Coursoul() {
  return (
    <div className="wrapper">
      <section className="Coursoul">
        <div className="video">
          <img
            className="ghost"
            src="https://m.media-amazon.com/images/M/MV5BYjBmZDU3MGQtMGExNC00NmJmLWIxMTItNjVjYjE5NTVmNjYzXkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <img
            className="thor"
            src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
            alt=""
          />
          <div className="bottom-text">
            <span class="ri-play-circle-line circle-play"></span>
            <div>
              <h3>'Thor:Love and Thunder' 2:16</h3>
              <p className="z">Watch the new Trailer</p>
            </div>
          </div>
        </div>
        <aside className="video-list">
          <h2 className="next">Up next</h2>
          {aside.map((dat) => (
            <Aside aside={dat} />
          ))}
          <h3>Browse trailers {">"} </h3>
        </aside>
      </section>
      <div className="feature">
        <h2>Featured today</h2>
        <footer className="figure">
          {crdata.map((dat) => (
            <Featured list={dat} />
          ))}
        </footer>
        <h2 className="watch">What to Watch</h2>
        <h3 className="watchlist">
          From your watchlist<span className="hvg">{">"}</span>
        </h3>
      </div>
    </div>
  );
}
export default Coursoul;
