import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

import SearchBar from "../../components/SearchBar";

import { GET_DIRECTORY } from "../../constants/endpoints";
import * as httpService from "../../services/httpService";
import GridItem from "../../components/GridItem";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [directories, setDirectories] = useState([]);

  const fetchDirectory = useCallback(
    debounce(async (value) => {
      try {
        const { data } = await httpService.get(
          `${process.env.REACT_APP_API_BASE_URL}${GET_DIRECTORY}?directory=${value}`
        );
        setDirectories(data.data);
      } catch (error) {
        setDirectories([]);
      }
    }, 1000),
    []
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    fetchDirectory(e.target.value);
  };

  const handleDirectoryClick = (directory) => {
    if (directory.isDirectory) {
      const path = `${searchText}/${directory.name}`;
      setSearchText(path);
      fetchDirectory(path);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className={"header-left"}>
          <h1>Server Directory</h1>
        </div>
        <div className={"header-center"}>
          <SearchBar
            placeholder={"Search Directory:"}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <div className={"header-right"}>
          <h1>header right</h1>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <h1>right</h1>
        </div>
        <div className="main">
          {directories.map((directory) => (
            <GridItem
              directory={directory}
              onClick={() => {
                handleDirectoryClick(directory);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
