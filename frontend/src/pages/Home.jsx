import './Home.css';
import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import useProducts from "../hooks/useProducts";
import useSalesBanners from '../hooks/useSalesBanners';
import { fetchProducts } from '../utils/products';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Can be useful in future for shallow rendering
  const [searchResults, setSearchResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const {products, loading, error} = useProducts();
  const {salesBanners} = useSalesBanners();

  
  useEffect(() => {
    if (searchText.trim().length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
 
    debounceSearch();

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [searchText]);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const performSearch = async (search) => {
    if (search.length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    try {
      const products = await fetchProducts(search);
      setSearchResults(products);
    } catch (e) {
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const debounceSearch = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      performSearch(searchText);
    }, 500);

    setDebounceTimeout(timeout);
  };

  return (
    <main>
      <div style={{ padding: "1rem" }}>
        <SearchBar
          searchText={searchText}
          searchResults={searchResults}
          handleSearchTextChange={handleSearchTextChange}
          handleSearch={performSearch}
        />
      </div>

      <div style={{ padding: "1rem", height: '40vh' }}>
        <Carousel slideShow={2}>
          {salesBanners && salesBanners.length > 0 && salesBanners.map((banner, index) => {
            return (
              <div key={index} className='carousel-item' style={{height: '100%', width: '100%'}}>
                <img src={banner.image} alt={banner.title} className='carousel-image' style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'top'}} />
              </div>
            );
          })}
        </Carousel>
      </div>

      <section className="products-list-grid">
        {products && products.length > 0 && products.map(ProductCard)}
      </section>
    </main>
  );
};

export default Home;