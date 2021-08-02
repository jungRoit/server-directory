import "./style.css";

const SideBar = ({ fileType, setFileType }) => (
  <div className="sidebar">
    <h1>filters</h1>
    <div className="filter-directory-type">
      <label className="filter-directory-type-label">Directory Type:</label>
      <div className="filter-wrapper">
        <div className="filter-item">
          <label>All</label>
          <input
            type="radio"
            name="file-type"
            className="filter-radio"
            checked={fileType === 0}
            onChange={() => {
              setFileType(0);
            }}
          />
        </div>
        <div className="filter-item">
          <label>Files</label>
          <input
            type="radio"
            name="file-type"
            className="filter-radio"
            checked={fileType === 1}
            onChange={() => {
              setFileType(1);
            }}
          />
        </div>
        <div className="filter-item">
          <label>Folders</label>
          <input
            type="radio"
            name="file-type"
            className="filter-radio"
            checked={fileType === 2}
            onChange={() => {
              setFileType(2);
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
