import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl);
  const data = await response.json();
  return data;
};

export default fetchProducts;
