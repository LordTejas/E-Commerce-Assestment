import config from "../ipConfig.json";
import axios from "axios";

const fetchProducts = async (search, limit = 10) => {
  let productsUrl =
    search.length === 0
      ? `${config.endpoint}/products?limit=${limit}`
      : `${config.endpoint}/products?search=${search}&limit=${limit}`;

  const data = await axios.get(productsUrl);

  if (data.status === 200) {
    // console.log(data.data.products);
    return data.data.products;
  }

  return [];
};

export { fetchProducts };
