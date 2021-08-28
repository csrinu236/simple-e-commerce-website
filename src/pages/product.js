// global imports
import "../toggleOverlay.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections

const centerDOM = getElement(".single-page-product");

let productID;
window.addEventListener("load", async () => {
  //   const url = `id=?hefhs`;
  const url = window.location.search;
  try {
    const response = await fetch(`${singleProductUrl}${url}`);
    if (response.status <= 299 && response.status >= 200) {
      const data = await response.json();
      const {
        id,
        fields: { colors, company, description: desc, name, price, image: img },
      } = data;
      productID = id;
      const { url: image } = img[0];
      centerDOM.innerHTML = `<img src="${image}" />
        <div class="single-page-product-info">
          <h2>${name}</h2>
          <p class="text-slanted">By ${company}</p>
          <h3 class="single-product-price">${formatPrice(price)}</h3>
          <div class="color-box">
            ${colors
              .map((color) => {
                return `<div class="color" style="background:${color}"></div>`;
              })
              .join("")}
          </div>
          <p class="product-desc">
            ${desc}
          </p>
          <button class="btn addToCartBtn">add to cart</button>
        </div>`;
      getElement(".single-product-heading").innerHTML = `Home / ${name}`;
      getElement(".addToCartBtn").addEventListener("click", function () {
        addToCart(productID);
      });
    } else {
      centerDOM.innerHTML = `<div><h3>no such product found</h3>
        <a href="products.html" class="btn">go back</a></div>`;
    }
  } catch (error) {
    console.log(error);
  }
});
// cart product
// let productID;

// show product when page loads
