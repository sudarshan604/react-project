import React from "react";
import Navabar from "./components/navbar/navbar";
import Coursoul from "./components/Cursoul/Coursoul";
import Favourite from "./components/favorite/Favorite";
import fav from "./data/fav";
import Videos from "./components/favorite/Video";
import video from "./data/video";
import prime from "./data/prime";
import Collection from "./components/Featured/Collection";
import Collectiondata from "./data/Collectiondata";
import "./style.css";
import Coming from "./data/Coming";
import Featured from "./components/Featured/Feature";
import Explore from "./data/Explore";
import Born from "./data/Born";
import Born1 from "./components/Born/Born";
function App() {
  return (
    <div>
      <Navabar />
      <Coursoul />
      <main>
        <div className="main-div">
          <h3>Sign in to access your Watchlist</h3>
          <p>Save shows and movies to keep track of what you want to watch.</p>
          <button>sign in to imdb</button>
        </div>
      </main>
      <section className="fanfav">
        <h2>
          Fan Favorite <span className="grt">{">"}</span>
        </h2>
        <p>This weeks top tv and movies</p>
        <section className="fav-image">
          {fav.map((dat) => (
            <Favourite detail={dat} />
          ))}
        </section>
        <h3 className="more">More to watch</h3>
        <p>imDB helps you select the perfect next show or movie ti watch</p>
        <span className="two-btn">watch Guide</span>
        <span className="two-btn">Most Popular</span>
        <h2 id="ex">Exclusive Videos</h2>
        <h3 className="imdbo">IMDB Originals</h3>
        <p>
          Celebrity interviews ,trending entertainment stories and expert
          analysis
        </p>
        <div className="imdb-video">
          {video.map((dat) => (
            <Videos vid={dat} />
          ))}
        </div>
      </section>
      <article className="exploring">
        <h3>Explore What's streaming</h3>
        <p>Prime Video</p>
        <h4>include with Prime</h4>
        <div className="exp-video">
          {prime.map((dat) => (
            <Favourite detail={dat} />
          ))}
        </div>
      </article>
      <article className="movie-collection">
        <h2>Explore Movies & TV shows</h2>
        <h3>
          Top box Office(US) <span>{">"}</span>{" "}
        </h3>
        <p>Weekend os May 20-22</p>
        <div className="collection-list">
          {Collectiondata.map((dat) => (
            <Collection list={dat} />
          ))}
        </div>
      </article>
      <section className="coming-soon">
        <h3>
          Coming soon to theatre (US) <span>{">"}</span>
        </h3>
        <p>Trailer for upcoming release</p>
        <div className="com-vid">
          {Coming.map((dat) => (
            <Videos vid={dat} className="black" />
          ))}
        </div>
      </section>
      <section className="more-explorer">
        <h2>More to explore</h2>
        <h3>Editors picks</h3>
        <div className="inside-explore">
          {Explore.map((dat) => (
            <Featured list={dat} />
          ))}
        </div>
      </section>
      <section className="born">
        <h3>Born today</h3>
        <p>People born on may 27</p>
        <div className="born-flex">
          {Born.map((info) => (
            <Born1 list={info} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default App;
