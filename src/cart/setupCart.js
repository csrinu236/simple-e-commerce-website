// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItmesDOM = getElement(".cart-items");
const cartItmesCount = getElement(".cart-value");
const cartItemsTotal = getElement(".cart-footer h2");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  const item = cart.find((cartItem) => cartItem.id == id);
  if (item) {
    const DOMitems = [...cartItmesDOM.querySelectorAll(".quantity")];
    let found = DOMitems.find((item) => item.dataset.id === id);
    found.textContent = parseInt(found.textContent) + 1;
    cart = cart.map((item) => {
      if (item.id === id) {
        item = { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  } else {
    let product = findProduct(id);
    product = { ...product, quantity: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  }
  setStorageItem("cart", cart);
  cartItemsTotal.innerHTML = `total : ${formatPrice(displayTotalPrice())}`;
  cartItmesCount.innerHTML = displayCartItemsCount();
  openCart();
};

function cartFunctionality() {
  cartItmesDOM.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const id = e.target.parentElement.parentElement.dataset.id;
      cart = cart.filter((item) => item.id !== id);
      e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains("fa-chevron-up")) {
      const id = e.target.parentElement.dataset.id;
      const currentItem = e.target.parentElement.nextElementSibling;
      let currentItemQuantity = parseInt(currentItem.textContent);
      currentItemQuantity += 1;
      currentItem.textContent = currentItemQuantity;
      cart = cart.map((item) => {
        if (item.id === id) {
          item = { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else if (e.target.classList.contains("fa-chevron-down")) {
      const id = e.target.parentElement.dataset.id;
      const currentItem = e.target.parentElement.previousElementSibling;
      let currentItemQuantity = parseInt(currentItem.textContent);
      currentItemQuantity -= 1;
      if (currentItemQuantity == 0) {
        currentItem.parentElement.parentElement.remove();
        cart = cart.filter((item) => {
          if (item.id !== id) return item;
        });
        e.target.parentElement.parentElement.remove();
      } else {
        currentItem.textContent = currentItemQuantity;
        cart = cart.map((item) => {
          if (item.id === id) {
            item = { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    }
    setStorageItem("cart", cart);
    cartItemsTotal.innerHTML = `total : ${formatPrice(displayTotalPrice())}`;
    cartItmesCount.innerHTML = displayCartItemsCount();
  });
}

function displayCartItemsCount() {
  return cart.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);
}
function displayTotalPrice() {
  return cart.reduce((total, item) => {
    total += item.quantity * item.price;
    return total;
  }, 0);
}

function init() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
  cartItemsTotal.innerHTML = `total : ${formatPrice(displayTotalPrice())}`;
  cartItmesCount.innerHTML = displayCartItemsCount();
  cartFunctionality();
}

init();
