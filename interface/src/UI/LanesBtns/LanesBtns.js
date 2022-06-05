import { useSelector } from "react-redux";
import classes from "./LanesBtns.module.css";

const LanesBtns = (props) => {
  const btnColors = useSelector((state) => state.btnColors);
  const allowedLanes = useSelector((state) => state.allowedLanes);
  const currBtn = useSelector((state) => state.currBtn);
  const nonStartingLanes = useSelector((state) => state.nonStartingLanes);
  const isLimitReached = useSelector((state) => state.isLimitReached);

  const res = btnColors.map((track) => track[1]);
  const tracks = [];

  for (let i of res) {
    tracks.push(...i);
  }

  const btnColor = {
    backgroundColor: tracks.includes(+props.children) ? "red" : "",
    boxShadow: tracks.includes(+props.children)
      ? "0 2px 8px rgba(0, 0, 0, 1)"
      : "",
  };

  let disabled = false;
  if (!currBtn) {
    disabled = nonStartingLanes.includes(+props.children) ? props.disabled : "";
  } else {
    disabled = !allowedLanes[currBtn].includes(+props.children)
      ? props.disabled
      : "";
  }

  const btnClasses = `${classes["lanes-btns"]} ${props.className}`;

  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={btnClasses}
      style={btnColor}
      disabled={disabled || isLimitReached}
    >
      {props.children}
    </button>
  );
};

export default LanesBtns;
