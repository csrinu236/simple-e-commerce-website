// global imports
import "../toggleOverlay.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

window.addEventListener("load", function () {
  display(store, getElement(".all-products"), false);
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
});
