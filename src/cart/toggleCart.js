import { getElement } from "../utils.js";

const cart = getElement(".cart-overaly");
const cartBtn = getElement(".cart-btn");
const cartCloseBtn = getElement(".sidebar-close");

cartBtn.addEventListener("click", function () {
  cart.classList.add("show-cart-overlay");
});
cartCloseBtn.addEventListener("click", function () {
  cart.classList.remove("show-cart-overlay");
});

export const openCart = () => {
  cart.classList.add("show-cart-overlay");
};
