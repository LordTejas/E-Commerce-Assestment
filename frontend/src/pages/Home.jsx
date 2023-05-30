import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar/SearchBar";
import { fetchProducts } from "../utils/search";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  /**
   * Debounce Search
   */
  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    if (searchText.trim() !== "") {
      const timeout = setTimeout(() => {
        performSearch();
      }, 500);
    
      setDebounceTimeout(timeout);
    } else {
      setSearchResults([]);
    }
    
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchText]);

  const performSearch = async (searchText) => {
    setIsSearching(true);

    try {
      const products = await fetchProducts(searchText);
      setSearchResults(products);
    } catch (err) {
      console.log(err.message);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main>
      <div style={{padding: '1rem'}}>
        <SearchBar
          searchText={searchText}
          searchResults={searchResults}
          handleSearchTextChange={handleSearchTextChange}
          handleSearch={performSearch}
        />
      </div>

      <Carousel />
    </main>
  );
};

export default Home;
