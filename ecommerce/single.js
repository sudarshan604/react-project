import datas from "./data.js";

const cloneTemplate = document.querySelector("[data-section-collection]");

const parentSection = document.querySelector("[data-wrap-section]");

const id = localStorage.getItem("pageId");

function renderSinglePage(data) {
  const newCloneTemplate = cloneTemplate.content.cloneNode(true);

  const pageImg = newCloneTemplate.querySelector("img");

  const bookName = newCloneTemplate.querySelector("[data-book-name-page ]");

  const authorName = newCloneTemplate.querySelector("[data-author-name]");

  const bookPrice = newCloneTemplate.querySelector("[data-book-price-page]");

  pageImg.src = data.image;
  bookName.innerText = data.bookName;
  bookPrice.innerText = `NPR ${data.price}`;
  parentSection.appendChild(newCloneTemplate);
}

function filterPage(id) {
  const display = datas.filter((item) => item.id == id);

  display.forEach(renderSinglePage);
}

filterPage(id);
