import {FaFile, FaFolder} from 'react-icons/fa';
import './style.css';

const GridItem = ({directory,onClick}) => (
  <button onClick={onClick} className={"grid-item link"}>
    <div className="grid-item-icon-wrapper">
      {directory.isDirectory ? (
        <FaFolder size={48} />
      ) : (
        <FaFile color={"#c1cad2"} size={48} />
      )}
    </div>
    <p className="grid-item-text">{directory.name}</p>
  </button>
);

export default GridItem;
