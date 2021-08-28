import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const searchForm = getElement(".search-form");
  const searchInput = getElement(".search-form input");
  searchForm.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();
    if (value) {
      const arr = store.filter((item) => {
        return item.name.startsWith(value);
      });
      if (arr.length == 0)
        getElement(
          ".all-products"
        ).innerHTML = `<h3>no such products exist</h3>`;
      else display(arr, getElement(".all-products"), true);
    } else {
      display(store, getElement(".all-products"), true);
    }
  });
};

export default setupSearch;
