const nodes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
const generateLanesObject = (lanesArr) => {
  const lanesObj = { ...lanesArr };
  const laneObjKeys = Object.keys(lanesObj);
  for (let i = 0; i < lanesArr.length; i++) {
    lanesObj[nodes[i]] = lanesObj[laneObjKeys[i]];
    delete lanesObj[laneObjKeys[i]];
  }
  return lanesObj;
};

export default generateLanesObject;
