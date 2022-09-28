import "../../style.css";
function Favourite({ detail }) {
  return (
    <div className="fav-collection">
      <img className="fav-image" src={detail.url} alt="" />
      <p>{detail.rating}</p>
      <p>{detail.desc}</p>
      <h2>+ Watchlist</h2>
      <h3 className="trail">
        <span class="ri-play-fill"></span>
        Trailer
      </h3>
    </div>
  );
}
export default Favourite;
