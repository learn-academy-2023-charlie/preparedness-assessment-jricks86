import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"
import "./Modal.css"


const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => { 
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const resetInput = () => {
    setInputValue("");
  }

  const modalMessage = `Hello, ${inputValue}`;

  return (
    <>
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
            <Label for="name">Enter your name</Label>
            <Input id="name" type="text" value={inputValue} onChange={handleInputChange} />
          </div>
          <div className="buttons">
            <Button onClick={handleClick}>Click Me</Button> 
            <Button onClick={resetInput}>Reset</Button>
          </div>
          {showModal && (
            <ModalComponent message={modalMessage} onClose={closeModal} />
          )}
        </div>
      </div>

    </>
  )
}

export default App