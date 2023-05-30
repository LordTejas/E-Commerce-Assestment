import "./SearchBar.css";
import Input from "../Input";
import Button from "../Button";

const SearchBar = ({ searchText, handleSearchTextChange, handleSearch}) => {
  return (
    <div className="search-bar">
      <Input placeholder='Search' value={searchText} onChange={handleSearchTextChange} rounded fullWidth />
      <Button label="Search" color="white" bgColor="dodgerBlue" onClick={handleSearch} rounded />
    </div>
  );
};

export default SearchBar;
