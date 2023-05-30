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
      <div className="suggestions-modal">
        <h1>Bottom</h1>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <img src={'/product-placeholder.png'} alt={product.name} />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
