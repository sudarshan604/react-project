import { nextPo } from "./scroll.js";
import { createComponent } from "./category.js";
import { addCart, hideCart } from "./cart.js";

nextPo();

createComponent();

function shoppingCart() {
  hideCart();
  document.addEventListener("click", (e) => {
    if (!e.target.matches("[data-cart-add]")) return;

    const id = e.target.closest("[data-id-container]").dataset.itemId;

    addCart(parseInt(id));
  });
}

shoppingCart();

const invisibleList = document.querySelector("[data-box-cart]");

const toggleButton = document.querySelector("[data-toggle-button]");

toggleButton.addEventListener("click", (e) => {
  invisibleList.classList.remove("hidden");
  invisibleList.classList.toggle("invisible");
});
