import "../style.css";
import { context } from "../Context";
import { useContext, useState } from "react";
function CardItem({ item }) {
  const { removeCartItem } = useContext(context);
  const [isHover, setHover] = useState(false);
  function binHandle() {
    if (isHover) {
      return (
        <i
          className="ri-delete-bin-fill"
          onClick={() => removeCartItem(item)}
        ></i>
      );
    } else {
      return (
        <i
          className="ri-delete-bin-line"
          onClick={() => removeCartItem(item)}
        ></i>
      );
    }
  }

  return (
    <div className="cart-item">
      {binHandle()}
      <img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={item.url}
        width="130px"
        alt=""
      />
      <p>$5.99</p>
    </div>
  );
}
export default CardItem;
