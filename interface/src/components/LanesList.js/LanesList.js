import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../../UI/Card/Card";
import generateColorsFunc from "../Crossroad/generateColorsFunc";
import generateLanesObject from "../Crossroad/generateLanesObjectFunc";

import classes from "./LanesList.module.css";

const LanesList = (props) => {
  const dispatch = useDispatch();

  const lanesArr = Object.entries(generateLanesObject(props.lanesArr));
  const coloredLanes = generateColorsFunc(lanesArr);

  useEffect(() => {
    dispatch({ type: "SET_ARRAY", coloredLanes: coloredLanes });
  }, [coloredLanes, dispatch]);

  return (
    <ul className={classes["lanes-list"]}>
      {coloredLanes.map((lane) => (
        <Card
          style={{ backgroundColor: lane[2] }}
          key={lane[0]}
          className={classes["lanes-list__card"]}
        >
          <li>{`${lane[0]} -> (${lane[1][0]} , ${lane[1][1]})`}</li>
        </Card>
      ))}
    </ul>
  );
};

export default LanesList;
