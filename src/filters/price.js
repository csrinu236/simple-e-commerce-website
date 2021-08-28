import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const sliderInput = getElement(".slider-form input");
  //   let maxValue = 0;
  const maxPrice = store.reduce((maxValue, item) => {
    return Math.max(item.price, maxValue);
  }, 0);
  sliderInput.max = Math.ceil(maxPrice / 100);
  sliderInput.value = Math.ceil(maxPrice / 100);
  sliderInput.min = 0;
  getElement(".range-value").innerHTML = `Price : $0 - $${sliderInput.value}`;
  sliderInput.addEventListener("input", function () {
    getElement(".range-value").innerHTML = `Price : $0 - $${sliderInput.value}`;
    const value = parseInt(sliderInput.value);
    const newArr = store.filter((item) => {
      return Math.ceil(item.price / 100) <= value;
    });
    if (newArr.length == 0)
      getElement(".all-products").innerHTML = `<h3>no such products found<h3>`;
    else display(newArr, getElement(".all-products"), true);
  });
};

export default setupPrice;
