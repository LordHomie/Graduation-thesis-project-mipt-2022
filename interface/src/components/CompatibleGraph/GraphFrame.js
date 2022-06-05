import CompatibleGraph from "./CompatibleGraph";

import classes from "./GraphFrame.module.css";

const GraphFrame = (props) => {
  return (
    <div className={classes["graph-frame"]}>
      <span className={classes["graph-frame__title"]}>Graph</span>
      {props.isGraphGenerated && <CompatibleGraph />}
    </div>
  );
};

export default GraphFrame;
