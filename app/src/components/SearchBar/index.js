import './index.css';

const SearchBar = (props) => (
  <input
    type="text"
    className="search-bar"
    value={props.value}
    onChange={props.onChange}
  />
);

export default SearchBar;