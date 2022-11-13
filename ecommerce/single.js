import datas from "./data.js";

const cloneTemplate = document.querySelector("[data-section-collection]");
const parentSection = document.querySelector("[data-wrap-section]");
const sameAuthor = document.querySelector("[data-same-author-List]");
const relatedContainer = document.querySelector("[data-related-book]");

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

function sameAuthorList(data) {
  const authorTemplate = document.querySelector("[ data-author-template");

  const newAuthorContent = authorTemplate.content.cloneNode(true);
  const authorImg = newAuthorContent.querySelector("img");

  authorImg.src = data.image;
  const authorName = newAuthorContent.querySelector("[data-same-name ]");

  authorName.innerText = data.name;
  const samePrice = newAuthorContent.querySelector("[data-s-price]");
  samePrice.innerText = data.price;

  sameAuthor.appendChild(newAuthorContent);
}

function renderAll() {
  const currentAuthor = datas.filter((item) => item.id == id);

  const newAuthorLIst = datas.filter(
    (item) => item.name === currentAuthor[0].name
  );

  newAuthorLIst.forEach(sameAuthorList);
}

renderAll();

function relatedBook(data) {
  const relatedTemplate = document.querySelector("[data-related-template]");

  const relatedContent = relatedTemplate.content.cloneNode(true);
  const authorImg = relatedContent.querySelector("img");

  authorImg.src = data.image;
  console.log(datas.image);
  const authorName = relatedContent.querySelector("[data-related-name]");

  authorName.innerText = data.name;
  const samePrice = relatedContent.querySelector("[ data-r-p ]");
  samePrice.innerText = data.price;
  const bookName = relatedContent.querySelector("[data-related-b]");
  bookName.innerText = "hello";

  relatedContainer.appendChild(relatedContent);
}

function renderRelated() {
  const relatedAuthor = datas.filter((item) => item.id == id);

  const newAuthorRelated = datas.filter(
    (item) => item.category === relatedAuthor[0].category
  );

  newAuthorRelated.forEach(relatedBook);
  console.log(newAuthorRelated);
}

renderRelated();
