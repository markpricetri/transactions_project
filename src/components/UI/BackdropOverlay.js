import React from 'react';
import { Backdrop } from "./Modal";

const BackdropOverlay = (props) => {
  return (
    <React.Fragment>
      {props.error && <Backdrop onClick={props.OnClick}></Backdrop>};
    </React.Fragment>
  );
};

export default BackdropOverlay;
