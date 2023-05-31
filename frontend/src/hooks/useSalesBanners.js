import { useState, useEffect } from "react";
import { fetchSalesBanners } from "../utils/salesBanners";

const useSalesBanners = () => {
  const [salesBanners, setSalesBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSalesBanners();
        setSalesBanners(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    console.log(salesBanners)
  }, []);

  return { salesBanners, isLoading, error };
};

export default useSalesBanners;
