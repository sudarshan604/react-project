import "../style.css";
import React from "react";

const Meme = function () {
  const [memeData, setMemeData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    return setMemeData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);

    const imageUrl = allMeme[randomNumber].url;
    setMemeData({
      randomImage: imageUrl,
    });
  }

  return (
    <main className="main-cont">
      <form className="form-data">
        <div className="input-wrap">
          <input
            name="topText"
            type="text"
            placeholder="top text"
            className="input-text text1"
            onChange={handleChange}
            value={memeData.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom-text"
            className="input-text"
            value={memeData.bottomText}
            onChange={handleChange}
          />
        </div>
        <input
          className="form-btn"
          type="button"
          value="click to generate Meme"
          onClick={handleClick}
        />
      </form>
      <figure className="meme-image">
        <img src={memeData.randomImage} alt="meme Image" />
        <h3 class="meme-text">{memeData.topText}</h3>
        <h3 class="meme-t">{memeData.bottomText}</h3>
      </figure>
    </main>
  );
};

export default Meme;
