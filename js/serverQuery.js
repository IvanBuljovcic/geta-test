import * as C from "./constants.js";

export const getSearchList = async (searchTerm, limit = 10) => {
  if (searchTerm && searchTerm !== "") {
    return await fetch(`${C.SERVER_URL}?limit=${limit}&q=${searchTerm}`)
      .then((data) => data.json())
      .then((res) => res.pages)
      .catch((err) => console.error("Error: ", err));
  }

  throw "Search term is required!";
};

export const getPageByTitle = async (title) => {
  if (title) {
    return await fetch(`${C.PAGE_BY_TITLE_URL}?origin=*&action=parse&prop=text&format=json&page=${title}`)
      .then(data => data.json())
      .then(res => res.parse)
      .catch(err => console.error(err))
  }

  throw "Title is required!";
};