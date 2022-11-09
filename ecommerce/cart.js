import data from "./data.js";
import items from "./data.js";

const cartWholeBox = document.querySelector("[ data-cart-list]");
const cartBox = document.querySelector("[data-cart-single-item]");
const dataItemCount = document.querySelector("[data-item-count]");
const cartWrapper = document.querySelector("[data-box-cart ]");

const cartClose = document.querySelector("[data-cart-close]");

let shoppingCart = [];

export function addCart(id) {
  renderShoppingCart(id);
  hideCart();
  removeCartItem();
}

function renderShoppingCart(id) {
  const existingId = shoppingCart.find((item) => item.id == id);
  if (existingId) {
    existingId.quantity++;
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }
  cartWholeBox.innerHTML = " ";
  shoppingCart.forEach(renderCart);
}

function renderCart(data) {
  const slectCartIem = items.find((item) => item.id == data.id);

  const newAddCartItem = cartBox.content.cloneNode(true);

  const cartImg = newAddCartItem.querySelector("img");

  cartImg.src = slectCartIem.image;

  const closeId = newAddCartItem.querySelector("[data-close-cart-id]");
  closeId.dataset.closeId = data.id;

  const objectQuantity = newAddCartItem.querySelector("[data-item-quantity]");

  objectQuantity.innerText = ` x  ${data.quantity}`;

  const itemPrice = newAddCartItem.querySelector("[data-item-price]");
  itemPrice.innerText = data.quantity * slectCartIem.price;

  cartWholeBox.appendChild(newAddCartItem);
}

export function hideCart() {
  dataItemCount.innerText = shoppingCart.length;

  if (shoppingCart.length == 0) {
    cartWrapper.classList.add("hidden");
  }
}

function removeCartItem() {
  document.addEventListener("click", (e) => {
    if (!e.target.matches("[data-cart-close]")) return;

    const itemIds = e.target.closest("[data-close-cart-id]").dataset.closeId;
    console.log("hello");
    removeCartList(parseInt(itemIds));
  });
}

function removeCartList(id) {
  const existinCard = shoppingCart.find((entry) => entry.id === id);
  if (existinCard === null) return;

  shoppingCart = shoppingCart.filter((entry) => entry.id !== id);

  cartWholeBox.innerHTML = " ";
  hideCart();
  shoppingCart.forEach(renderCart);
}
