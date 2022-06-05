import LanesBtns from "../../UI/LanesBtns/LanesBtns";

import classes from "./CrossroadBtns.module.css";

const CrossroadBtns = (props) => {
  const btnFocusClass = classes["crossroad-btns__button"];

  const laneBtnHandler = (event) => {
    if (event.target.innerHTML === "7") {
    }
    props.getLanesHandler(event.target.innerHTML);
  };

  return (
    <div className={`${classes["crossroad-btns"]} ${props.className}`}>
      <section className={classes["crossroad-btns-vertical"]}>
        <div className={classes["crossroad-btns__top-btns"]}>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            8
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            9
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            10
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            11
          </LanesBtns>
        </div>
        <div className={classes["crossroad-btns__bottom-btns"]}>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            3
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            2
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            1
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            0
          </LanesBtns>
        </div>
      </section>
      <section className={classes["crossroad-btns-horizontal"]}>
        <div className={classes["crossroad-btns__left-btns"]}>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            15
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            14
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            13
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            12
          </LanesBtns>
        </div>
        <div className={classes["crossroad-btns__right-btns"]}>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            4
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            5
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            6
          </LanesBtns>
          <LanesBtns
            className={btnFocusClass}
            onClick={laneBtnHandler}
            disabled={true}
          >
            7
          </LanesBtns>
        </div>
      </section>
    </div>
  );
};

export default CrossroadBtns;
