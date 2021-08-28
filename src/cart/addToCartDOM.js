import { formatPrice, getElement } from "../utils.js";
const cartDOM = getElement(".cart-items");
const addToCartDOM = ({ id, name, price, image, quantity }) => {
  const newElement = document.createElement("article");
  newElement.setAttribute("class", "cart-item");
  newElement.setAttribute("data-id", id);
  newElement.innerHTML = `<img src="${image}" alt="" />
              <div class="cart-item-info">
                <h4 class="item-name">${name}</h4>
                <p class="item-price">${formatPrice(price)}</p>
                <button class="remove-btn" data-id="${id}">remove</button>
              </div>
              <div class="cart-item-quantity">
                <button class="arrow-btn" data-id="${id}">
                  <i class="fas fa-chevron-up"></i>
                </button>
                <h4 class="quantity" data-id="${id}">${quantity}</h4>
                <button class="arrow-btn" data-id="${id}">
                  <i class="fas fa-chevron-down"></i>
                </button>
              </div>`;
  cartDOM.appendChild(newElement);
};

export default addToCartDOM;
