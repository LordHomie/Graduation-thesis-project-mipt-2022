import Backdrop from "./Backdrop";
import Button from "../Button/Button";
import Card from "../Card/Card";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Card>
      <div className={classes.modal}>
        <p>
          Cross browser responsive design hasn't been implemented yet. Please
          run the interface at width 1536px and height 722px for better
          experience :)
        </p>
        <Button onClick={props.showModalHandler}>Understood!</Button>
      </div>
      <Backdrop className={classes["backdrop-class"]} />
    </Card>
  );
};

export default Modal;
