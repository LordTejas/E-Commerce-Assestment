import config from "../ipConfig.json";
import axios from "axios";

const fetchSalesBanners = async () => {
  let salesBannersUrl = `${config.endpoint}/sales-banner`
  const data = await axios.get(salesBannersUrl);

  if (data.status === 200) {
    // console.log(data.data.banners);
    return data.data;
  }

  return [];
};

export { fetchSalesBanners };
