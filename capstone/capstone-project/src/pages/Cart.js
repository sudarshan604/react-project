import CardItem from "../components/CardItem";
import { useContext, useState } from "react";
import { context } from "../Context";

function Cart() {
  const [order, setOrder] = useState("placed order");
  const { cardItem, emptyCart } = useContext(context);
  const CartItemProduct = cardItem.map((item) => (
    <CardItem key={item.id} item={item}></CardItem>
  ));

  const Cost = 5 * cardItem.length;
  const totalCost = Cost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function orderItem() {
    setOrder("ordering..,");
    setTimeout(() => {
      setOrder("order placed");
      emptyCart();
    }, 3000);
  }
  const btnStyle = {
    display: cardItem.length === 0 && "none",
  };
  return (
    <main className="cart-page">
      <h1>check out</h1>
      {CartItemProduct}
      <p className="total-cost" style={btnStyle}>
        Total:{totalCost}
      </p>
      <div className="order-button">
        <button onClick={orderItem} style={btnStyle}>
          {order}
        </button>
      </div>
    </main>
  );
}
export default Cart;
