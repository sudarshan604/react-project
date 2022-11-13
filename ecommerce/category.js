import data from "./data.js";

export function createComponent() {
  data.forEach(render);
}

const catBook = document.querySelector("[data-cat-component]");
const catAllBook = document.querySelector("[data-book-cat-collection]");
const allCategoryName = document.querySelector("[ data-cateory-list]");

const allCategories = ["All", ...new Set(data.map((item) => item.category))];

allCategories.forEach(createList);

function render(data) {
  const catComponent = catBook.content.cloneNode(true);

  const catImg = catComponent.querySelector("img");

  catImg.src = data.image;
  const containerId = catComponent.querySelector("[data-id-container]");

  const articleId = catComponent.querySelector("[data-single-component]");

  articleId.dataset.pageId = data.id;

  containerId.dataset.itemId = data.id;

  const bookName = catComponent.querySelector("[data-book-cat-name]");
  bookName.innerText = data.name;

  const bookPrice = catComponent.querySelector("[ data-book-cat-price]");

  bookPrice.innerText = data.price;

  catAllBook.appendChild(catComponent);
}

function createList(cg) {
  const newP = document.createElement("p");
  newP.innerText = cg;
  newP.addEventListener("click", () => display(cg));
  allCategoryName.appendChild(newP);
}

function display(seletCategory) {
  const filterData = data.filter((ite) => ite.category === seletCategory);
  if (seletCategory === "All") {
    catAllBook.innerHTML = "";
    displayFilter(data);
    return;
  }
  catAllBook.innerHTML = " ";
  displayFilter(filterData);
}

function displayFilter(items) {
  items.forEach(render);
}
