import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (arr, element, isFilters) => {
  element.innerHTML = arr
    .map((item) => {
      const { name, image, price, id } = item;
      return `<article class="featured-product">
          <div class="featured-product-container">
            <img src="${image}"  />
            <div class="featured-btn-container">
              <a href="product.html?id=${id}" class="featured-btn">
                <i class="fas fa-search"></i>
              </a>
              <button class="featured-btn" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div class="featured-product-info">
            <h4>${name}</h4>
            <p>${formatPrice(price)}</p>
          </div>
        </article>`;
    })
    .join("");
  if (isFilters) return;
  element.addEventListener("click", function (e) {
    const btn = e.target;
    if (btn.classList.contains("fa-shopping-cart")) {
      const id = btn.parentElement.dataset.id;
      addToCart(id);
    }
  });
};

export default display;
