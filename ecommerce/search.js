import datas from "./data.js";

const searchInput = document.querySelector("[data-search]");
const searchCo = document.querySelector("[data-search-content-w]");

searchInput.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  if (!e.target.value) {
    searchCo.innerHTML = " ";
    searchCo.style.display = "none";
    return;
  }
  searchCo.innerHTML = " ";

  for (let i = 0; i < datas.length; i++) {
    let currentText = datas[i].name.toLowerCase();
    let currentDiv = datas[i];

    const isTrue = currentText.includes(searchQuery);
    console.log(isTrue);
    if (isTrue) {
      createContent(currentDiv);
      searchCo.style.display = "block";
    } else {
    }
  }
  if (searchCo.innerHTML === " ") {
    console.log("hell");
    const h = document.createElement("h2");
    h.innerText = "no item found ..";
    searchCo.appendChild(h);
    searchCo.style.display = "block";
  }
});

function createContent(cu) {
  searchCo.innerHTML = " ";

  const tem = document.querySelector("[data-search-template]");
  const newSearch = tem.content.cloneNode(true);
  const searchImage = newSearch.querySelector("img");
  const itemId = newSearch.querySelector("[data-search-c-id ]");
  itemId.dataset.dataId = cu.id;
  searchImage.src = cu.image;
  const searcgh2 = newSearch.querySelector("[data-h2]");
  searcgh2.innerText = cu.name;
  searchCo.appendChild(newSearch);
}

searchCo.addEventListener("click", (e) => {
  const id = e.target.closest("[data-search-c-id]").dataset.dataId;
  window.open("./single.html", "_self");

  localStorage.setItem("pageId", id);
});
