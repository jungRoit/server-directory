import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [directory, setDirectory] = useState("/home");

  const handleSearchChange = (e) => {
    setDirectory(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <div className={"header-left"}>
          <h1>Server Directory</h1>
        </div>
        <div className={"header-center"}>
          <SearchBar value={directory} onChange={handleSearchChange} />
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
          <h1>left</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
