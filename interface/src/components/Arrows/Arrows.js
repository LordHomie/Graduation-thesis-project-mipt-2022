import { Fragment } from "react";
import Arrow from "./Arrow";

import arrowStraghtLeft from "../../assets/arrows/arrow-straight-left.png";
import arrowStraghtRight from "../../assets/arrows/arrow-straight-right.png";
import arrowStraghtUp from "../../assets/arrows/arrow-straight-up.png";
import arrowStraghtDown from "../../assets/arrows/arrow-straight-down.png";

import arrowTurnRightBottom from "../../assets/arrows/arrow-turn-right-bottom.png";
import arrowTurnRightUp from "../../assets/arrows/arrow-turn-right-up.png";
import arrowTurnRightCenterUp from "../../assets/arrows/arrow-turn-right-center-up.png";
import arrowTurnRightCenterDown from "../../assets/arrows/arrow-turn-right-center-down.png";

import arrowTurnLeftBottom from "../../assets/arrows/arrow-turn-left-bottom.png";
import arrowTurnLeftUp from "../../assets/arrows/arrow-turn-left-up.png";
import arrowTurnLeftCenterUp from "../../assets/arrows/arrow-turn-left-center-up.png";
import arrowTurnLeftCenterDown from "../../assets/arrows/arrow-turn-left-center-down.png";

import arrowTurnLeftIntersectUp from "../../assets/arrows/intersections/arrow1.png";
import arrowTurnLeftIntersectDown from "../../assets/arrows/intersections/arrow2.png";
import arrowTurnLeftIntersectCenterUp from "../../assets/arrows/intersections/arrow3.png";
import arrowTurnLeftIntersectCenterDown from "../../assets/arrows/intersections/arrow4.png";

import arrowTurnRightIntersectUp from "../../assets/arrows/intersections/arrow5.png";
import arrowTurnRightIntersectDown from "../../assets/arrows/intersections/arrow6.png";
import arrowTurnRightIntersectCenterUp from "../../assets/arrows/intersections/arrow7.png";
import arrowTurnRightIntersectCenterDown from "../../assets/arrows/intersections/arrow8.png";

import arrowTurnRightIntersectStraightDown from "../../assets/arrows/intersections2/arrow1.png";
import arrowTurnRightIntersectStraightUp from "../../assets/arrows/intersections2/arrow2.png";
import arrowTurnRightIntersectCenterStraightUp from "../../assets/arrows/intersections2/arrow3.png";
import arrowTurnRightIntersectCenterStraightDown from "../../assets/arrows/intersections2/arrow4.png";

import arrowTurnLeftIntersectStraightDown from "../../assets/arrows/intersections2/arrow5.png";
import arrowTurnLeftIntersectStraightUp from "../../assets/arrows/intersections2/arrow6.png";
import arrowTurnLeftIntersectCenterStraightUp from "../../assets/arrows/intersections2/arrow7.png";
import arrowTurnLeftIntersectCenterStraightDown from "../../assets/arrows/intersections2/arrow8.png";

import classes from "./Arrows.module.css";

const Arrows = (props) => {
  const isExistFunc = (lane) =>
    JSON.stringify(props.arrowsArr).indexOf(JSON.stringify(lane));

  return (
    <Fragment>
      {/* Horizontal Left */}
      <Arrow
        src={arrowStraghtLeft}
        className={`${classes["arrow-straight"]} ${classes.horizontal1}`}
        show={isExistFunc([12, 7]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtLeft}
        className={`${classes["arrow-straight"]} ${classes.horizontal2}`}
        show={isExistFunc([13, 6]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtLeft}
        className={`${classes["arrow-straight"]} ${classes.horizontal3}`}
        show={isExistFunc([14, 5]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtLeft}
        className={`${classes["arrow-straight"]} ${classes.horizontal4}`}
        show={isExistFunc([15, 4]) !== -1 ? true : false}
      />

      {/* Horizontal Right */}
      <Arrow
        src={arrowStraghtRight}
        className={`${classes["arrow-straight"]} ${classes.horizontal1}`}
        show={isExistFunc([7, 12]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtRight}
        className={`${classes["arrow-straight"]} ${classes.horizontal2}`}
        show={isExistFunc([6, 13]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtRight}
        className={`${classes["arrow-straight"]} ${classes.horizontal3}`}
        show={isExistFunc([5, 14]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtRight}
        className={`${classes["arrow-straight"]} ${classes.horizontal4}`}
        show={isExistFunc([4, 15]) !== -1 ? true : false}
      />

      {/* Vertical Up */}
      <Arrow
        src={arrowStraghtUp}
        className={`${classes["arrow-straight"]} ${classes.vertical1}`}
        show={isExistFunc([0, 11]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtUp}
        className={`${classes["arrow-straight"]} ${classes.vertical2}`}
        show={isExistFunc([1, 10]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtUp}
        className={`${classes["arrow-straight"]} ${classes.vertical3}`}
        show={isExistFunc([2, 9]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtUp}
        className={`${classes["arrow-straight"]} ${classes.vertical4}`}
        show={isExistFunc([3, 8]) !== -1 ? true : false}
      />

      {/* Vertical Down */}
      <Arrow
        src={arrowStraghtDown}
        className={`${classes["arrow-straight"]} ${classes.vertical1}`}
        show={isExistFunc([11, 0]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtDown}
        className={`${classes["arrow-straight"]} ${classes.vertical2}`}
        show={isExistFunc([10, 1]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtDown}
        className={`${classes["arrow-straight"]} ${classes.vertical3}`}
        show={isExistFunc([9, 2]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowStraghtDown}
        className={`${classes["arrow-straight"]} ${classes.vertical4}`}
        show={isExistFunc([8, 3]) !== -1 ? true : false}
      />

      {/* Turn Right Arrows */}
      <Arrow
        src={arrowTurnRightBottom}
        className={`${classes["arrow-turn"]} ${classes["turn-right1"]}`}
        show={isExistFunc([0, 15]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right2"]}`}
        show={isExistFunc([8, 7]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightCenterUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right3"]}`}
        show={isExistFunc([4, 3]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightCenterDown}
        className={`${classes["arrow-turn"]} ${classes["turn-right4"]}`}
        show={isExistFunc([12, 11]) !== -1 ? true : false}
      />

      {/* Turn Left Arrows */}
      <Arrow
        src={arrowTurnLeftBottom}
        className={`${classes["arrow-turn"]} ${classes["turn-left1"]}`}
        show={isExistFunc([3, 4]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftCenterUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left2"]}`}
        show={isExistFunc([7, 8]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left3"]}`}
        show={isExistFunc([11, 12]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftCenterDown}
        className={`${classes["arrow-turn"]} ${classes["turn-left4"]}`}
        show={isExistFunc([15, 0]) !== -1 ? true : false}
      />

      {/* Turn Left Intersection Arrows */}
      <Arrow
        src={arrowTurnLeftIntersectUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection1"]}`}
        show={isExistFunc([9, 14]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectDown}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection2"]}`}
        show={isExistFunc([1, 6]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectCenterUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection3"]}`}
        show={isExistFunc([13, 2]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectCenterDown}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection4"]}`}
        show={isExistFunc([5, 10]) !== -1 ? true : false}
      />

      <Arrow
        src={arrowTurnLeftIntersectStraightDown}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection-straight1"]}`}
        show={isExistFunc([2, 5]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectStraightUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection-straight2"]}`}
        show={isExistFunc([10, 13]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectCenterStraightDown}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection-center-straight1"]}`}
        show={isExistFunc([6, 9]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnLeftIntersectCenterStraightUp}
        className={`${classes["arrow-turn"]} ${classes["turn-left-intersection-center-straight2"]}`}
        show={isExistFunc([14, 1]) !== -1 ? true : false}
      />

      {/* Turn Right Intersection Arrows */}
      <Arrow
        src={arrowTurnRightIntersectUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection1"]}`}
        show={isExistFunc([10, 5]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectDown}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection2"]}`}
        show={isExistFunc([2, 13]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectCenterUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection3"]}`}
        show={isExistFunc([14, 9]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectCenterDown}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection4"]}`}
        show={isExistFunc([6, 1]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectStraightDown}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection-straight1"]}`}
        show={isExistFunc([1, 14]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectStraightUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection-straight2"]}`}
        show={isExistFunc([9, 6]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectCenterStraightDown}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection-center-straight1"]}`}
        show={isExistFunc([5, 2]) !== -1 ? true : false}
      />
      <Arrow
        src={arrowTurnRightIntersectCenterStraightUp}
        className={`${classes["arrow-turn"]} ${classes["turn-right-intersection-center-straight2"]}`}
        show={isExistFunc([13, 10]) !== -1 ? true : false}
      />
    </Fragment>
  );
};

export default Arrows;
