import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CrossroadPattern from "../CrossroadPattern.js/CrossroadPattern";
import CrossroadBtns from "../CrossroadBtns/CrossroadBtns";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import LanesList from "../LanesList.js/LanesList";
import Cliques from "../Cliques.js/Cliques";
import GraphFrame from "../CompatibleGraph/GraphFrame";
import Arrows from "../Arrows/Arrows";

import generateLanesObject from "./generateLanesObjectFunc";
import generateCliques from "./generateCliques";

import crossroadLeftDrive from "../../assets/crossroad_left-drive.jpg";
import crossroadRightDrive from "../../assets/crossroad_right-drive.jpg";

import classes from "./Crossroad.module.css";

const Crossroad = () => {
  const dispatch = useDispatch();

  const [crossroadImg, setCrossroadImg] = useState(crossroadRightDrive);
  const [lanesArr, setLanesArr] = useState([]);
  const [cliques, setCliques] = useState([]);
  const [isGraphGenerated, setIsGraphGenerated] = useState(false);

  const rightDriveImgHandler = () => {
    setCrossroadImg(crossroadRightDrive);
    dispatch({ type: "SET_RIGHT_ALLOWED_LANES" });
    dispatch({ type: "SET_NON_STARTING_LANES_RIGHT" });
    reset();
  };

  const leftDriveImgHandler = () => {
    setCrossroadImg(crossroadLeftDrive);
    dispatch({ type: "SET_LEFT_ALLOWED_LANES" });
    dispatch({ type: "SET_NON_STARTING_LANES_LEFT" });
    reset();
  };

  useEffect(() => {
    if (lanesArr.length === 9) {
      dispatch({ type: "SET_LIMIT_REACHED", isLimitReached: true });
    }
  }, [lanesArr, dispatch]);

  let lanePair = [];
  const AllLanePairs = [];
  const getLanesHandler = (laneNum) => {
    lanePair.push(laneNum);
    dispatch({ type: "SET_CURRENT_BUTTON", currBtn: laneNum });
    if (lanePair.length === 2) {
      AllLanePairs.push([+lanePair[0], +lanePair[1]]);
      setLanesArr((prevArr) => [...prevArr, ...AllLanePairs]);
      lanePair = [];
      dispatch({ type: "SET_CURRENT_BUTTON", currBtn: null });
    }
  };

  const generateCliquesHandler = () => {
    const lanesArrtoObj = generateLanesObject(lanesArr);
    const generatedCliques = generateCliques(lanesArrtoObj);
    setCliques(generatedCliques[0]);
    dispatch({ type: "SET_ALL_PAIRS", allPairs: generatedCliques[1] });
  };

  const generateGraphHandler = () => {
    setIsGraphGenerated(true);
  };

  const reset = () => {
    setLanesArr([]);
    setCliques([]);
    setIsGraphGenerated(false);
    dispatch({ type: "SET_CURRENT_BUTTON", currBtn: null });
    dispatch({ type: "SET_LIMIT_REACHED", isLimitReached: false });
  };

  return (
    <main className={classes.crossroad}>
      <Card className={classes["crossroad__left"]}>
        <CrossroadPattern
          rightDriveImgHandler={rightDriveImgHandler}
          leftDriveImgHandler={leftDriveImgHandler}
        />
        <CrossroadBtns getLanesHandler={getLanesHandler} />
        <Arrows arrowsArr={lanesArr} />
        <img src={crossroadImg} alt="crossroad pattern" />
      </Card>
      <Card className={classes["crossroad__right"]}>
        <div className={classes["crossroad__right-btns"]}>
          <Button disabled={!lanesArr.length > 0} onClick={reset}>
            Reset
          </Button>
          <Button
            disabled={!lanesArr.length > 0}
            onClick={generateCliquesHandler}
          >
            Generate Cliques
          </Button>
          <Button disabled={!cliques.length > 0} onClick={generateGraphHandler}>
            Generate Compatible Graph
          </Button>
        </div>
        <LanesList lanesArr={lanesArr} />
        <Cliques cliques={cliques} />
        <GraphFrame isGraphGenerated={isGraphGenerated} />
      </Card>
    </main>
  );
};

export default Crossroad;
