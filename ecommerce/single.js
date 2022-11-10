import datas from "./data.js";

const cloneTemplate = document.querySelector("[data-section-collection]");
const parentSection = document.querySelector("[data-wrap-section]");

let swap = true;

const id = localStorage.getItem("pageId");

function renderSinglePage(data) {
  const newCloneTemplate = cloneTemplate.content.cloneNode(true);

  const pageImg = newCloneTemplate.querySelector("img");

  const bookName = newCloneTemplate.querySelector("[data-book-name-page ]");

  const authorName = newCloneTemplate.querySelector("[data-author-name]");
  const bookPrice = newCloneTemplate.querySelector("[data-book-price-page]");

  pageImg.src = data.image;
  bookName.innerText = data.name;
  bookPrice.innerText = `NPR ${data.price}`;
  parentSection.appendChild(newCloneTemplate);
}

function filterPage(id) {
  const display = datas.filter((item) => item.id == id);

  display.forEach(renderSinglePage);
}

filterPage(id);

function bookInfo(data) {
  const bookDescription = document.querySelector("[data-book-info]");

  const display = datas.filter((item) => item.id == id);

  bookDescription.innerText = ` ${display[0].info.substring(
    0,
    display[0].info.length / 2
  )}...`;

  const clickRead = document.querySelector("[ data-select-read]");

  clickRead.addEventListener("click", (e) => {
    clickRead.innerText =
      clickRead.innerText === "Read more" ? "show Less" : "Read more";

    if (swap) {
      bookDescription.innerText = display[0].info.substring(
        0,
        display[0].info.length
      );
      swap = !swap;
    } else {
      bookDescription.innerText = `${display[0].info.substring(
        0,
        display[0].info.length / 2
      )}...`;
      swap = !swap;
    }
  });
}

bookInfo(id);
