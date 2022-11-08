const wrapperBook = document.querySelector("[data-book-component]");
const nextButton = document.querySelector("[data-btn-right]");
const previousButton = document.querySelector("[data-btn-left]");

const bookList = document.querySelector("[data-small-book-list]");
import items from "./item.js";

let n = 4;
let i = 0;
let np = 0;
let sw = true;
let total = items.length;
export function nextPo() {
  selectBook();
}

nextButton.addEventListener("click", (e) => {
  if (sw) {
    n = 4;
    i = 0;
    np = 0;
    bookList.innerHTML = "";
    sw = false;
    selectBook();
    return;
  }
  np++;

  if (n > total - 1) {
    n = 4;
    i = 0;
    np = 0;
  } else {
    n = n + 1;
    i = np;
  }

  console.log("i=", i, "n=", n);
  bookList.innerHTML = "";

  selectBook();
});

previousButton.addEventListener("click", (e) => {
  n = items.length - 1 - 4;
  i = items.length - 1;

  if (n < 1) {
    n = 4;
    i = 0;
    selectBook();
    bookList.innerHTML = "";
    return;
  } else {
    i = i - 1;
    n = n - 1;
  }
  console.log("n=", n, "i=", i);

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
  const containerBook = wrapperBook.content.cloneNode(true);

  const priceRs = containerBook.querySelector("[data-price]");
  const imgBook = containerBook.querySelector("[data-img-small]");
  priceRs.innerText = item.price;

  imgBook.src = item.image;

  bookList.appendChild(containerBook);
}
