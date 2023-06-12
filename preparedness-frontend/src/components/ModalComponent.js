import React from "react"

const ModalComponent = ({ message, onClose }) => {
  // const modalMessage = `Hey, ${message}`;
  
  return (
  <>

    <div className="modal">
      <div className="modal-content">
          <h1>{message}</h1>
          <body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus.
          </body>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  </>
  )
}

export default ModalComponent
