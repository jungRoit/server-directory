import react from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>header</h1>
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
