// global imports
import "./src/toggleOverlay.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";
import { getStorageItem } from "./src/utils.js";

const init = async () => {
  // let store = getStorageItem("store");
  const products = await fetchProducts();
  setupStore(products); //local storage
  const featuredArr = store.filter((item) => item.featured);
  display(featuredArr, getElement(".featured-products"));
};

window.addEventListener("load", init);
