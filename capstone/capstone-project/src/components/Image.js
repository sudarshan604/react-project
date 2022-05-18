import "../style.css";
import { useState, useContext } from "react";
import { context } from "../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const { toggleFavourite, cardItem, addCardItem } = useContext(context);

  const [isHover, setHover] = useState(false);
  const lineHeart = isHover && (
    <i
      onClick={() => toggleFavourite(img.id)}
      className="ri-heart-line favorite"
    ></i>
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavourite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHover) {
      return (
        <i
          onClick={() => toggleFavourite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }
  function cartIcon() {
    const fillCart = cardItem.some((photo) => photo.id === img.id);
    if (fillCart) {
      return (
        <i
          className="ri-add-circle-fill cart"
          onClick={() => addCardItem(img)}
        ></i>
      );
    } else if (isHover) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addCardItem(img)}
        ></i>
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${className}  image-container`}
    >
      {heartIcon()}
      {cartIcon()}

      <img src={img.url} className="image-grid" alt="" />
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
