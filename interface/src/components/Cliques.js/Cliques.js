import { useSelector, useDispatch } from "react-redux";
import Card from "../../UI/Card/Card";

import classes from "./Cliques.module.css";

const Cliques = (props) => {
  const dispatch = useDispatch();
  const coloredLanes = useSelector((state) => state.coloredLanes);

  const cliquesObj = { ...props.cliques };
  const cliquesArr = Object.entries(cliquesObj);

  const cliqueHandlerOn = (clique) => {
    const btnColors = [];
    for (let i = 0; i < clique.length; i++) {
      btnColors.push(...coloredLanes.filter((el) => el.includes(clique[i])));
    }
    dispatch({ type: "SET_BUTTON_COLORS", btnColors: btnColors });
  };

  const cliqueHandlerOff = () => {
    dispatch({ type: "SET_BUTTON_COLORS", btnColors: [] });
  };

  return (
    <ul className={classes["cliques-list"]}>
      {cliquesArr.map((clique) => (
        <Card
          onMouseOver={() => cliqueHandlerOn(clique[1])}
          onMouseLeave={cliqueHandlerOff}
          key={clique[0]}
          className={classes["cliques-list__card"]}
        >
          <li>{clique[1]}</li>
        </Card>
      ))}
    </ul>
  );
};

export default Cliques;
