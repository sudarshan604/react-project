function Video({ vid, className }) {
  const style = {
    margin: className === undefined ? "" : "10px",
    // marginLeft: className === undefined ? "90px" : " ",
    color: className === undefined ? "white" : "gray",
  };
  return (
    <div className="wrap-imdb">
      <img className="video-img" src={vid.url} alt="" />
      <h3>
        <span class="ri-play-circle-line"></span>

        {vid.rating}
      </h3>

      <div>
        <p style={style}>{vid.desc}</p>
      </div>
    </div>
  );
}
export default Video;
