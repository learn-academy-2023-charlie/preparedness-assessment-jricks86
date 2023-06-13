import React from "react";
import "../Modal.css"

function ModalComponent({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{message}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalComponent;