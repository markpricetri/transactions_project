import React, { useState } from 'react'
import Transactions from "./components/transactions/Transactions";
import { Modal, Backdrop, ModalHeader, ModalActions } from './components/UI/ErrorModal'
import Button from './components/UI/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [error, setError] = useState(false);
  
  const errorHandler = (invalidFields) => {
    setError(invalidFields);
  };

  const dismissModal = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      {/* Error Modal */}
      {error && <Backdrop onClick={dismissModal}>
        <Modal>
          <ModalHeader>
            <h2>Not so fast!</h2>
          </ModalHeader>
          <div class="content">
            {error && error.map((item) => {
              return (
                <h4>
                  <FontAwesomeIcon icon={faTimes} style={{marginRight: "20px"}}/>
                  {item.replace(/^\w/, (c) => c.toUpperCase())} cannot be blank
                </h4>
              );
            })}
            <ModalActions>
              <Button onClick={dismissModal}>Got it!</Button>
            </ModalActions>
          </div>
        </Modal>
      </Backdrop>}

      {/* Transactions Section */}
      <Transactions error={errorHandler}/>
    </React.Fragment>
  );
}

export default App;
