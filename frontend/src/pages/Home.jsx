import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {

    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    }

    const performSearch = () => {
        console.log(searchText);
    };

    return (
        <main>
            <div>
                <SearchBar searchText={searchText} handleSearchTextChange={handleSearchTextChange} handleSearch={performSearch} />
            </div>
            
            <Carousel />


        </main>
    );
}
 
export default Home;