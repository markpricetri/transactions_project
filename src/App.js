import React from 'react'
import Transactions from "./components/transactions/Transactions";
import { Modal, Backdrop, ModalHeader, ModalActions } from './components/UI/ErrorModal'
import Button from './components/UI/Button'

function App() {
  return (
    <React.Fragment>
      {/* Error Modal */}
      <Backdrop>
        <Modal>
          <ModalHeader>
            <h2>Error</h2>
          </ModalHeader>
          <div class="content">
            Fields cannot be empty
            <ModalActions>
              <Button>Got it!</Button>
            </ModalActions>
          </div>
        </Modal>
      </Backdrop>

      {/* Transactions Section */}
      <Transactions />
    </React.Fragment>
  );
}

export default App;
