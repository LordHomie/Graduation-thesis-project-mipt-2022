import { createStore } from "redux";

const rightHandAllowedLanes = {
  0: [15, 11],
  1: [14, 10, 6],
  4: [3, 15],
  5: [2, 14, 10],
  8: [7, 3],
  9: [6, 2, 14],
  12: [11, 7],
  13: [10, 6, 2],
};

const leftHandAllowedLanes = {
  2: [5, 9, 13],
  3: [4, 8],
  6: [9, 13, 1],
  7: [8, 12],
  10: [5, 1, 13],
  11: [12, 0],
  14: [1, 5, 9],
  15: [0, 4],
};

const nonStartingLanesRight = [2, 3, 6, 7, 10, 11, 14, 15];
const nonStartingLanesLeft = [0, 1, 4, 5, 8, 9, 12, 13];

const allStates = {
  coloredLanes: [],
  allPairs: [],
  btnColors: [],
  allowedLanes: rightHandAllowedLanes,
  currBtn: null,
  nonStartingLanes: nonStartingLanesRight,
  isLimitReached: false,
};

const appReducer = (state = allStates, action) => {
  if (action.type === "SET_ARRAY") {
    return {
      coloredLanes: action.coloredLanes,
      allPairs: state.allPairs,
      btnColors: state.btnColors,
      allowedLanes: state.allowedLanes,
      currBtn: state.currBtn,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_ALL_PAIRS") {
    return {
      allPairs: action.allPairs,
      coloredLanes: state.coloredLanes,
      btnColors: state.btnColors,
      allowedLanes: state.allowedLanes,
      currBtn: state.currBtn,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_BUTTON_COLORS") {
    return {
      btnColors: action.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      allowedLanes: state.allowedLanes,
      currBtn: state.currBtn,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_RIGHT_ALLOWED_LANES") {
    return {
      allowedLanes: rightHandAllowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      currBtn: state.currBtn,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_LEFT_ALLOWED_LANES") {
    return {
      allowedLanes: leftHandAllowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      currBtn: state.currBtn,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_CURRENT_BUTTON") {
    return {
      currBtn: action.currBtn,
      allowedLanes: state.allowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      nonStartingLanes: state.nonStartingLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_NON_STARTING_LANES_RIGHT") {
    return {
      nonStartingLanes: nonStartingLanesRight,
      currBtn: state.currBtn,
      allowedLanes: state.allowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_NON_STARTING_LANES_LEFT") {
    return {
      nonStartingLanes: nonStartingLanesLeft,
      currBtn: state.currBtn,
      allowedLanes: state.allowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
      isLimitReached: state.isLimitReached,
    };
  }
  if (action.type === "SET_LIMIT_REACHED") {
    return {
      isLimitReached: action.isLimitReached,
      nonStartingLanes: state.nonStartingLanes,
      currBtn: state.currBtn,
      allowedLanes: state.allowedLanes,
      btnColors: state.btnColors,
      allPairs: state.allPairs,
      coloredLanes: state.coloredLanes,
    };
  }
  return state;
};

const store = createStore(appReducer);

export default store;
