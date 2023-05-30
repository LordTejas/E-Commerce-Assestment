import "./SearchBar.css";
import Input from "../Input";
import Button from "../Button";

const SearchBar = ({ searchText, searchResults, handleSearchTextChange, handleSearch }) => {
  return (
    <div className="search-bar">
      <Input
        placeholder="Search"
        value={searchText}
        onChange={handleSearchTextChange}
        rounded
        fullWidth
      />
      <Button
        label="Search"
        color="white"
        bgColor="dodgerBlue"
        onClick={handleSearch}
        rounded
      />
      {
      searchResults.length !== 0
      &&
      <div className="suggestions-modal">
          {searchResults.map((product) => (
            <div key={product.id} className="suggestion-item">
              <img src={'/product-placeholder.png'} alt={product.name} />
              <span>{product.name}</span>
            </div>
          ))}
      </div>
      }

    </div>
  );
};

export default SearchBar;
