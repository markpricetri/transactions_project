import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Transactions from "./components/transactions/Transactions";
import BackdropOverlay from "./components/UI/BackdropOverlay";
import ErrorModal from "./components/UI/ErrorModal";

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

      {ReactDOM.createPortal(
        <BackdropOverlay onClick={dismissModal} error={error} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal onClick={dismissModal} error={error} />,
        document.getElementById("overlay-root")
      )}

      <Transactions error={errorHandler} />

    </React.Fragment>
  );
}

export default App;
