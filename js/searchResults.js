import { populateModal } from "./modal.js";
import { getPageByTitle } from "./serverQuery.js";
import { generateElement } from "./utils.js";

// Create item wrapper for result data
export const createItemWrapper = ({ title, description, thumbnail, excerpt }) => {
  // Wrapper
  const elWrapper = generateElement("div", "", "item");

  // Title
  const elTitle = generateElement("h2", title, "item__title");
  elTitle.addEventListener("click", async () => {
    const itemData = await getPageByTitle(title);

    populateModal({
      title: itemData.title,
      text: itemData.text['*']
    })
  });
  elWrapper.appendChild(elTitle);

  // Description
  const elDescription = generateElement("h3", description, "item__desc");
  elWrapper.appendChild(elDescription);

  // Excerpt
  const elExcerpt = generateElement("p", excerpt, "item__exc");
  elWrapper.appendChild(elExcerpt);

  // Image
  if (thumbnail !== null && thumbnail !== undefined) {
    const elImg = generateElement("img", "", "item__image");
    elImg.src = thumbnail.url;
    elImg.width = thumbnail.width;
    elImg.height = thumbnail.height;
    elWrapper.appendChild(elImg);
  }

  return elWrapper;
};

// Append created item to search results list
export const appendItemToResults = (item) => {
  const searchResultsList = document.querySelector(".search-results__list");
  searchResultsList.appendChild(item);
};

export const clearResultsList = () => {
  const searchResultsList = document.querySelector(".search-results__list");
  searchResultsList.innerHTML = "";
}


