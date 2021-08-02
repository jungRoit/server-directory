import Modal from "react-modal";
import { FaFile } from "react-icons/fa";

import "./style.css";

const customStyles = {
  content: {
    top: "40%",
    left: "auto",
    right: "0%",
    marginLeft: "-20%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
    padding: 0,
    minWidth: 300,
    minHeight: 500,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const FileDetailsModal = (props) => {
  const { open, directory, onModalClose } = props;

  return (
    <Modal isOpen={open} onRequestClose={onModalClose} style={customStyles}>
      <div className={"modal-wrapper"}>
        <div className="modal-header">
          <h1 className="">File Details</h1>
        </div>
        <div className="modal-image">
          <FaFile size={64} color={"#c1cad2"} />
        </div>
        <div className="modal-body">
          <div className="modal-body-item">
            <p className={"modal-body-item-title"}>Name:</p>
            <p className={"modal-body-item-content"}>
              {directory ? directory.name : ""}
            </p>
          </div>
          <div className="modal-body-item">
            <p className={"modal-body-item-title"}>Path:</p>
            <p className={"modal-body-item-content"}>
              {directory ? directory.path : ""}
            </p>
          </div>
          <div className="modal-body-item">
            <p className={"modal-body-item-title"}>Size:</p>
            <p className={"modal-body-item-content"}>
              {directory ? directory.size+" Bytes" : ""}
            </p>
          </div>
          <div className="modal-body-item">
            <p className={"modal-body-item-title"}>Last Accessed:</p>
            <p className={"modal-body-item-content"}>
              {directory ? Date(directory.lastAccessed) : ""}
            </p>
          </div>
          <div className="modal-body-item">
            <p className={"modal-body-item-title"}>Last Modified:</p>
            <p className={"modal-body-item-content"}>
              {directory ? Date(directory.lastModified) : ""}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FileDetailsModal;
