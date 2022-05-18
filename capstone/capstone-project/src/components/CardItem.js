import "../style.css";
import { context } from "../Context";
import { useContext } from "react";
function CardItem({ item }) {
  const { removeCartItem } = useContext(context);
  function removeItem() {}
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeCartItem(item)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}
export default CardItem;
