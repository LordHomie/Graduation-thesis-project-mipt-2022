import Button from "../../UI/Button/Button";

import classes from "./CrossroadPattern.module.css";

const CrossroadPattern = (props) => {
  const { leftDriveImgHandler, rightDriveImgHandler } = props;

  return (
    <div className={classes["crossroad__pattern"]}>
      <Button onClick={leftDriveImgHandler}>Left-Hand Traffic</Button>
      <Button onClick={rightDriveImgHandler}>Right-Hand Traffic</Button>
    </div>
  );
};

export default CrossroadPattern;
