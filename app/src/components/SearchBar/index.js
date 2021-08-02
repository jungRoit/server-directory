import './index.css';

const SearchBar = (props) => (
  <input
    type="text"
    className="search-bar"
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
);

export default SearchBar;