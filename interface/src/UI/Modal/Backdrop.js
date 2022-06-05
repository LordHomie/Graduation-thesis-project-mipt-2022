import ReactDOM from "react-dom";
import { Fragment } from "react";

import classes from "./Backdrop.module.css";

const BackDropElement = () => {
  return <div className={classes.backdrop} />;
};

const Backdrop = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDropElement />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Backdrop;
