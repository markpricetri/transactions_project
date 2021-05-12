import React, { useRef } from 'react'
import { Modal, ModalHeader, ModalActions } from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const AlertModal = (props) => {
  const usernameInputRef = useRef(" ");
  const passwordInputRef = useRef(" ");

  const login = (e) => {
    e.preventDefault();
    let enteredName = usernameInputRef.current.value ? usernameInputRef.current.value.trim() : false
    let enteredUserPassword = passwordInputRef.current.value ? passwordInputRef.current.value.trim() : false

    if (!enteredName && !enteredUserPassword) {
      console.log(enteredName);
      props.errorMessage(["username", "password"]);
    } else if (!enteredName || enteredName.length === 0) {
      console.log(enteredName);
      props.errorMessage(["username"]);
    } else if (!enteredUserPassword || enteredUserPassword.length === 0) {
      console.log(enteredName);
      props.errorMessage(["password"]);
    } else {
      console.log(enteredName);
      props.onClick(e);
    };
  }

  return (
    <React.Fragment>
      {(props.error && (
        <Modal>
          <ModalHeader>
            <h2>Not so fast!</h2>
          </ModalHeader>
          <div className="modal-content">
            {props.error.map((item) => {
              return (
                <h4 key={props.error.indexOf(item) + 1}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ marginRight: "20px" }}
                  />
                  {item.replace(/^\w/, (c) => c.toUpperCase())} cannot be blank
                </h4>
              );
            })}
            <ModalActions>
              <Button onClick={props.onClick}>Got it!</Button>
            </ModalActions>
          </div>
        </Modal>
      )) ||
        (props.loggedOut && (
          <Modal>
            <ModalHeader>
              <h2>Please Sign In</h2>
            </ModalHeader>
            <div className="modal-content">
              <p id={"demo-text"}>
                <em>* Demo purposes only - insert any characters</em>
              </p>
              <form onSubmit={login}>
                <div className="form-control">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    ref={usernameInputRef}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    ref={passwordInputRef}
                  />
                </div>
                <ModalActions>
                  <Button type="sumbit">Login</Button>
                </ModalActions>
              </form>
            </div>
          </Modal>
        ))}
    </React.Fragment>
  );
};

export default AlertModal;