import data from "./data.js";
import items from "./data.js";

const cartWholeBox = document.querySelector("[ data-cart-list]");
const cartBox = document.querySelector("[data-cart-single-item]");
const dataItemCount = document.querySelector("[data-item-count]");
const cartWrapper = document.querySelector("[data-box-cart ]");

const shoppingCart = [];

export function addCart(id) {
  const existingId = shoppingCart.find((item) => item.id == id);
  if (existingId) {
    existingId.quantity++;
    console.log(existingId.quantity);
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }
  cartWholeBox.innerHTML = " ";
  shoppingCart.forEach(renderCart);
  dataItemCount.innerText = shoppingCart.length;
  hideCart();
}

function renderCart(data) {
  const slectCartIem = items.find((item) => item.id == data.id);

  const newAddCartItem = cartBox.content.cloneNode(true);

  const cartImg = newAddCartItem.querySelector("img");

  cartImg.src = slectCartIem.image;

  const objectQuantity = newAddCartItem.querySelector("[data-item-quantity]");

  objectQuantity.innerText = ` x  ${data.quantity}`;

  const itemPrice = newAddCartItem.querySelector("[data-item-price]");
  itemPrice.innerText = data.quantity * slectCartIem.price;

  cartWholeBox.appendChild(newAddCartItem);
}

export function hideCart() {
  if (shoppingCart.length == 0) {
    console.log("hello");

    cartWrapper.classList.add("hidden");
  }
}
