export const DOMReady = (fn) => {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

/**
 * Generate element node with content and class
 * -
 * @param {string} node Tag name
 * @param {string} content Inner html of element
 * @param {string} elClass Class added to element
 * @returns
 */
export const generateElement = (node, content = "", elClass = "") => {
  const el = document.createElement(node);

  if (elClass) {
    el.classList.add(elClass);
  }

  el.innerHTML = content;

  return el;
};