const modal = document.querySelector(".modal");
const modalTitle = modal.querySelector(".modal__title");
const modalContent = modal.querySelector(".modal__content");

export const populateModal = ({ title, text }) => {
  modalTitle.innerHTML = title;
  modalContent.innerHTML = text;

  document.body.classList.add('noscroll');
  modal.classList.add("visible");
}

export const closeModal = () => {
  document.body.classList.remove('noscroll');
  modal.classList.remove("visible");
}