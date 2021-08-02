import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { FaTh, FaThList } from "react-icons/fa";

import SearchBar from "../../components/SearchBar";

import { GET_DIRECTORY } from "../../constants/endpoints";
import * as httpService from "../../services/httpService";
import GridItem from "../../components/GridItem";
import ListItem from "../../components/ListItem";
import DirectoryViewer from "../../components/DIrectoryViewer";

const Home = () => {
  const [searchText, setSearchText] = useState("/home");
  const [directories, setDirectories] = useState([]);
  const [viewType, setViewType] = useState(0);

  useEffect(() => {
    async function getDirectory() {
      try {
        const { data } = await httpService.get(
          `${process.env.REACT_APP_API_BASE_URL}${GET_DIRECTORY}?directory=${searchText}`
        );
        setDirectories(data.data);
      } catch (error) {
        setDirectories([]);
      }
    }

    getDirectory();
  }, []);

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
          <button
            onClick={() => {
              setViewType(0);
            }}
            className={"link select-view-icon"}
          >
            <FaTh color={viewType === 0 ? "#309bed" : "#fff"} size={22} />
          </button>
          <button className={"link select-view-icon"}>
            <FaThList
              onClick={() => {
                setViewType(1);
              }}
              color={viewType === 1 ? "#309bed" : "#fff"}
              size={22}
            />
          </button>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <h1>filters</h1>
        </div>
        <div className="main">
          <DirectoryViewer handleDirectoryClick={handleDirectoryClick} directories={directories} viewType={viewType} />
        </div>
      </div>
    </div>
  );
};

export default Home;
