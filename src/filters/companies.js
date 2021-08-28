import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((item) => item.company))];
  getElement(".list").innerHTML = companies
    .map((item) => {
      return `<button class="company-btn">${item}</button>`;
    })
    .join("");
  getElement(".list").addEventListener("click", function (e) {
    if (e.target.classList.contains("company-btn")) {
      let newArr = store.filter(
        (item) => item.company === e.target.textContent
      );
      display(
        newArr.length ? newArr : store,
        getElement(".all-products"),
        true
      );
    }
  });
};

export default setupCompanies;
