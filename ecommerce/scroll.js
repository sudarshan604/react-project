const wrapperBook = document.querySelector("[data-book-component]");
const nextButton = document.querySelector("[data-btn-right]");
const previousButton = document.querySelector("[data-btn-left]");

const bookList = document.querySelector("[data-small-book-list]");
import items from "./item.js";

let n = 4;
let i = 0;
let np = 0;
let pp = 0;
let total = items.length;
export function nextPo() {
  selectBook();
}

nextButton.addEventListener("click", (e) => {
  np++;

  if (n > total - 1) {
    n = 4;
    i = 0;
    np = 0;
  } else {
    n = n + 1;
    i = np;
  }
  console.log(n, i);
  bookList.innerHTML = "";

  selectBook();
});

previousButton.addEventListener("click", (e) => {
  pp++;
  n = total - 4 - pp;

  if (n < 0 || i < 0) {
    i = 0;
    n = 4;
    pp = 0;
    bookList.innerHTML = "";
    selectBook();
    n = total;
    return;
  } else {
    i = total - pp;
  }
  bookList.innerHTML = "";
  selectBook("minus");
});

function selectBook(op) {
  if (op === "minus") {
    for (i; i > n; i--) {
      render(items[i]);
    }
  } else {
    for (i; i < n; i++) {
      render(items[i]);
    }
  }
}

function render(item) {
  console.log(item);
  const containerBook = wrapperBook.content.cloneNode(true);

  const priceRs = containerBook.querySelector("[data-price]");
  const imgBook = containerBook.querySelector("[data-img-small]");

  priceRs.innerText = item.price;

  imgBook.src = item.image;

  bookList.appendChild(containerBook);
}
