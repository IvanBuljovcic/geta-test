import { DOMReady } from "./utils.js";
import { appendItemToResults, clearResultsList, createItemWrapper } from "./searchResults.js";
import { closeModal } from "./modal.js";
import { getSearchList } from "./serverQuery.js";

const handleFormSubmit = async (event, element) => {
  event.preventDefault();
  const { value } = element;
  const data = await getSearchList(value);

  // Clear list before appending new data
  clearResultsList();

  // Create "card" for each search result
  data.forEach((p) => {
    const wrapper = createItemWrapper(p);

    appendItemToResults(wrapper);
  });

  const pageTitle = document.querySelector(".page__main .title");
  const searchResults = document.querySelector(".search-results");
  if (data) {
    pageTitle.classList.remove("visible");
    searchResults.classList.add("visible");
  } else {
    pageTitle.classList.add("visible");
    searchResults.classList.remove("visible");
  }
};

DOMReady(() => {  
  const form = document.getElementById("search_form");
  const searchInput = form.querySelector("input");

  form.addEventListener("submit", (event) => handleFormSubmit(event, searchInput));

  const modalClose = document.querySelector(".modal__close");
  modalClose.addEventListener("click", () => closeModal());
});
