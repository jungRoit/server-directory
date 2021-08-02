import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { FaTh, FaThList } from "react-icons/fa";

import SearchBar from "../../components/SearchBar";

import { GET_DIRECTORY } from "../../constants/endpoints";
import * as httpService from "../../services/httpService";

import DirectoryViewer from "../../components/DIrectoryViewer";
import FileDetailsModal from "../../components/FileDetailsModal";
import SideBar from "../../components/SideBar";

const Home = () => {
  const [searchText, setSearchText] = useState("/home");
  const [directories, setDirectories] = useState([]);
  const [viewType, setViewType] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(0);

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
    } else {
      setSelectedFile(directory);
      setModalOpen(true);
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
        <SideBar fileType={fileType} setFileType={setFileType} />
        <div className="main">
          <DirectoryViewer
            handleDirectoryClick={handleDirectoryClick}
            directories={directories}
            viewType={viewType}
            fileType={fileType}
          />
        </div>
      </div>
      <FileDetailsModal
        open={modalOpen}
        onModalClose={() => {
          setModalOpen(false);
        }}
        directory={selectedFile}
      />
    </div>
  );
};

export default Home;
