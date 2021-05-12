import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Transactions from "./components/transactions/Transactions";
import BackdropOverlay from "./components/UI/BackdropOverlay";
import AlertModal from "./components/UI/ErrorModal";

function App() {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [error, setError] = useState(false);
  
  const errorHandler = (invalidFields) => {
    setError(invalidFields);
  };

  const dismissModal = (e) => {
    e.preventDefault();
    if (error) {
      if (error.includes("username") || error.includes("password")) {
        setError(false);
      } else {
        setIsLoggedOut(false);
        setError(false);
        console.log("no errors");
      }
    } else {
      setIsLoggedOut(false);
      setError(false);
    };
  };
    // setError(false);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackdropOverlay
          onClick={dismissModal}
          error={error}
          loggedOut={isLoggedOut}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AlertModal
          onClick={dismissModal}
          error={error}
          loggedOut={isLoggedOut}
          errorMessage={errorHandler}
        />,
        document.getElementById("overlay-root")
      )}

      <Transactions error={errorHandler} />
    </React.Fragment>
  );
}

export default App;
