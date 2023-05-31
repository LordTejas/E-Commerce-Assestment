import config from "../ipConfig.json";
import axios from "axios";

const fetchSalesBanners = async (limit = 10) => {
  let salesBannersUrl = `${config.endpoint}/sales-banner?limit=${limit}`
  const data = await axios.get(salesBannersUrl);

  if (data.status === 200) {
    // console.log(data.data.banners);
    return data.data.banners;
  }

  return [];
};

export { fetchSalesBanners };
