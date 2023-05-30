import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar/SearchBar";
import { fetchProducts } from "../utils/search";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Can be useful in future for shallow rendering
  const [searchResults, setSearchResults] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

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

      <Carousel />
    </main>
  );
};

export default Home;
