import React from 'react'
import { Modal, ModalHeader, ModalActions } from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {props.error && (
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
      )}
    </React.Fragment>
  );
};

export default ErrorModal;