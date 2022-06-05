import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      style={props.style}
      className={`${classes.card} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
