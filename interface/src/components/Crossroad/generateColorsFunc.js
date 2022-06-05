const colors = [
  "lightsalmon",
  "slategray",
  "turquoise",
  "maroon",
  "deeppink",
  "red",
  "blue",
  "green",
  "purple",
  "brown",
  "gold",
  "olive",
];

const generateColorsFunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].push(colors[i]);
  }
  return arr;
};

export default generateColorsFunc;
