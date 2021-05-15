import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Transactions from "./components/transactions/Transactions";
import BackdropOverlay from "./components/UI/BackdropOverlay";
import AlertModal from "./components/UI/AlertModal";
import NavBar from "./components/UI/NavBar";

function App() {
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loginInformation = localStorage.getItem("isLoggedIn");

    if (loginInformation === "LOGGED_IN") {
      setIsLoggedOut(false);
    } else {
      setIsLoggedOut(true);
    }
  }, []);

  const logOut = () => {
    setIsLoggedOut(true);
  };

  const errorHandler = (invalidFields) => {
    setError(invalidFields);
  };

  const dismissModal = (e) => {
    e.preventDefault();
    if (error) {
      if (error.includes("username") || error.includes("password")) {
        // Allow user to input new credentials by setting error to false
        setError(false);
      } else {
        localStorage.setItem("isLoggedIn", "LOGGED_IN");
        setError(false);
      }
    } else {
      localStorage.setItem("isLoggedIn", "LOGGED_IN");
      setIsLoggedOut(false);
      setError(false);
    }
  };

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

      <NavBar logOut={logOut}></NavBar>
      <Transactions error={errorHandler} />
    </React.Fragment>
  );
}

export default App;
