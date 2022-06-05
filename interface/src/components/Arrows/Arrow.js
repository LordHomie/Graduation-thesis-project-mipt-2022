import classes from "./Arrow.module.css";

const Arrow = (props) => {
  return (
    <img
      src={props.src}
      alt="arrow"
      className={`${props.className} ${!props.show ? classes.hide : ""}`}
    />
  );
};

export default Arrow;
