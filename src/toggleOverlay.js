import { getElement } from "./utils.js";

const toggleBtn = getElement(".toggle-btn");
const navCloseBtn = getElement(".navbar-close");
const overlayContainer = getElement(".navbar-overlay");

toggleBtn.addEventListener("click", function () {
  overlayContainer.classList.add("show-overlay");
});
navCloseBtn.addEventListener("click", function () {
  overlayContainer.classList.remove("show-overlay");
});
