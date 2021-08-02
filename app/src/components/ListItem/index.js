import { FaFile, FaFolder } from "react-icons/fa";
import "./style.css";

const ListItem = ({directory, onClick}) => (
  <button onClick={onClick} className="list-item link">
    <div className="list-item-icon-wrapper">
      {directory.isDirectory ? (
        <FaFolder size={16} />
      ) : (
        <FaFile color={"#c1cad2"} size={16} />
      )}
    </div>
    <div className="list-item-name-wrapper">{directory.name}</div>
    <div className="list-item-path-wrapper">{directory.path}</div>
    <div className="list-item-modified-wrapper">
      Last Modified: {directory.lastModified}
    </div>
    <div className="list-item-size-wrapper">Size: {directory.size} Bytes</div>
  </button>
);

export default ListItem;
