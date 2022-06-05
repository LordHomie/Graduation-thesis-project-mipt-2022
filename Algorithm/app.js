const test1 = {
  x: [9, 2],
  t: [1, 6],
  v: [0, 15],
  w: [5, 14],
  y: [12, 11],
  z: [13, 6],
};

const test2 = {
  x: [3, 4],
  t: [6, 9],
  v: [6, 13],
  w: [14, 5],
  y: [11, 12],
  z: [10, 5],
};

const test3 = {
  c: [15, 0],
  d: [14, 5],
  b: [2, 9],
  a: [2, 5],
  h: [6, 13],
  g: [6, 9],
  f: [10, 5],
  e: [10, 1],
};

const test4 = {
  c: [15, 0],
  d: [14, 5],
  b: [2, 9],
  a: [2, 5],
  g: [6, 13],
  f: [10, 1],
  e: [11, 12],
};

const test5 = {
  a: [1, 10],
  b: [0, 15],
  f: [5, 14],
  e: [4, 3],
  g: [5, 10],
  d: [8, 3],
  c: [9, 14],
};

const test6 = {
  e: [7, 12],
  a: [6, 1],
  c: [14, 5],
  b: [15, 0],
  d: [3, 4],
  f: [2, 13],
};

const test7 = {
  e: [1, 10],
  a: [12, 7],
  c: [5, 10],
  b: [8, 7],
  x: [0, 15],
  d: [13, 2],
  f: [1, 6],
};

const generateCliques = (lanes) => {
  // Straight intersections sets
  const straightIntersectionSetsX = [
    [0, 11],
    [11, 0],
    [1, 10],
    [10, 1],
    [2, 9],
    [9, 2],
    [3, 8],
    [8, 3],
  ];

  const straightIntersectionSetsY = [
    [15, 4],
    [4, 15],
    [14, 5],
    [5, 14],
    [13, 6],
    [6, 13],
    [12, 7],
    [7, 12],
  ];

  // Turn intersections sets
  const turnLanes = [
    [1, 6],
    [6, 1],
    [2, 13],
    [13, 2],
    [9, 14],
    [14, 9],
    [10, 5],
    [5, 10],
  ];

  const turnIntersectionsGroup1 = [
    [8, 3],
    [3, 8],
    [9, 2],
    [2, 9],
    [5, 14],
    [14, 5],
    [4, 15],
    [15, 4],
    [5, 10],
    [10, 5],
    [2, 13],
    [13, 2],
  ];

  const turnIntersectionsGroup2 = [
    [10, 1],
    [1, 10],
    [11, 0],
    [0, 11],
    [5, 14],
    [14, 5],
    [4, 15],
    [15, 4],
    [14, 9],
    [9, 14],
    [1, 6],
    [6, 1],
  ];

  const turnIntersectionsGroup3 = [
    [10, 1],
    [1, 10],
    [11, 0],
    [0, 11],
    [7, 12],
    [12, 7],
    [6, 13],
    [13, 6],
    [5, 10],
    [10, 5],
    [6, 10],
    [10, 6],
  ];

  const turnIntersectionsGroup4 = [
    [8, 3],
    [3, 8],
    [9, 2],
    [2, 9],
    [7, 12],
    [12, 7],
    [6, 13],
    [13, 6],
    [14, 9],
    [9, 14],
    [13, 9],
    [9, 13],
  ];

  const lanesWithDifferentEndpoints = [];
  const intersections = [];
  const turnIntersections = [];

  // Excluding lanes that have the same endpoint
  for (let i = 0; i < Object.entries(lanes).length; i++) {
    for (let j = 0; j < Object.entries(lanes).length; j++) {
      if (Object.entries(lanes)[i][1][1] !== Object.entries(lanes)[j][1][1]) {
        lanesWithDifferentEndpoints.push([
          Object.entries(lanes)[i][0],
          Object.entries(lanes)[j][0],
        ]);
      }
    }
  }

  // Making all posibilities of straight intersections
  const straightIntersectionsGenerator = (setOne, setTwo) =>
    setOne.flatMap((d) => setTwo.map((v) => [d, v]));

  const intersectionsGroup1 = straightIntersectionsGenerator(
    straightIntersectionSetsX,
    straightIntersectionSetsY
  );

  const intersectionsGroup2 = straightIntersectionsGenerator(
    straightIntersectionSetsY,
    straightIntersectionSetsX
  );

  const appendIntersections = (groupSet, arr) => {
    for (let x of groupSet) {
      arr.push(x);
    }
  };

  appendIntersections(intersectionsGroup1, intersections);
  appendIntersections(intersectionsGroup2, intersections);

  // Making all posibilities of turn intersections
  const turnIntersectionsGenerator = (start, end, turnGroupSet) =>
    turnLanes.slice(start, end).flatMap((d) => turnGroupSet.map((v) => [d, v]));

  const turnGroup1 = turnIntersectionsGenerator(0, 2, turnIntersectionsGroup1);
  const turnGroup2 = turnIntersectionsGenerator(2, 4, turnIntersectionsGroup2);
  const turnGroup3 = turnIntersectionsGenerator(4, 6, turnIntersectionsGroup3);
  const turnGroup4 = turnIntersectionsGenerator(6, 8, turnIntersectionsGroup4);

  appendIntersections(turnGroup1, turnIntersections);
  appendIntersections(turnGroup2, turnIntersections);
  appendIntersections(turnGroup3, turnIntersections);
  appendIntersections(turnGroup4, turnIntersections);

  const reversedTurnIntersections = turnIntersections.map((el) => [
    el[1],
    el[0],
  ]);
  for (let b of reversedTurnIntersections) {
    turnIntersections.push(b);
  }

  const isExistFunc = (arrOne, arrTwo) =>
    JSON.stringify(arrOne).indexOf(JSON.stringify(arrTwo));

  // Getting lanes that intersect
  const intersectedLanes = [];
  for (let i of lanesWithDifferentEndpoints) {
    let s = [lanes[i[0]], lanes[i[1]]];
    if (isExistFunc(intersections, s) !== -1) {
      intersectedLanes.push(i);
    }
    if (isExistFunc(turnIntersections, s) !== -1) {
      intersectedLanes.push(i);
    }
  }

  const flows = [];

  // Lanes of our graph
  const result = Object.keys(lanes).flatMap((v, i) =>
    Object.keys(lanes)
      .slice(i + 1)
      .map((w) => [v, w])
  );

  // Lanes that can move simultaneuosly
  for (let i of result) {
    let flow = isExistFunc(lanesWithDifferentEndpoints, i);
    let intersection = isExistFunc(intersectedLanes, i);
    if (flow !== -1 && intersection === -1) flows.push(i);
  }

  const checkForNoViolation = (arr, node) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let test1 = isExistFunc(intersectedLanes, [arr[i], node]);
      let test2 = isExistFunc(lanesWithDifferentEndpoints, [arr[i], node]);
      if (test1 === -1 && test2 !== -1) {
        count++;
      }
      if (count === arr.length) {
        return true;
      }
    }
  };

  // Generating all the Cliques
  for (let i = 0; i < flows.length; i++) {
    for (let j = i + 1; j < flows.length; j++) {
      if (checkForNoViolation(flows[i], flows[j][1])) {
        flows[i].push(flows[j][1]);
      }
    }
  }

  // Removing sub-Cliques
  const removeSubCliques = () => {
    for (let i = 0; i < flows.length; i++) {
      for (let j = i + 1; j < flows.length; j++) {
        let intersection = flows[i].filter((x) => flows[j].includes(x));
        if (flows[j].length === intersection.length) {
          flows.splice(flows.indexOf(flows[j]), 1);
          j--;
        }
      }
    }
  };

  removeSubCliques();

  // Last Check
  const checkForNoViolation2 = (prevArr, currArr) => {
    let count = 0;
    for (let i = 0; i < prevArr.length; i++) {
      for (let j = 0; j < currArr.length; j++) {
        let test1 = isExistFunc(intersectedLanes, [prevArr[i], currArr[j]]);
        let test2 = isExistFunc(lanesWithDifferentEndpoints, [
          prevArr[i],
          currArr[j],
        ]);
        if (test1 === -1 && test2 !== -1 && !currArr.includes(prevArr[i])) {
          count++;
          if (j === currArr.length - 1 && count === currArr.length) {
            currArr.push(prevArr[i]);
            count = 0;
          } else if (j === currArr.length - 1 && count !== currArr.length) {
            count = 0;
          }
        } else {
          count = 0;
        }
      }
    }
  };

  for (let i = 0; i < flows.length; i++) {
    for (let j = i + 1; j < flows.length; j++) {
      checkForNoViolation2(flows[i], flows[j]);
    }
  }

  flows.sort((a, b) => {
    return b.length - a.length;
  });

  removeSubCliques();

  const allConcurrentLanes = [];
  for (let y = 0; y < flows.length; y++) {
    const res = flows[y].flatMap((v, i) =>
      flows[y].slice(i + 1).map((w) => [v, w])
    );
    allConcurrentLanes.push(res);
  }

  console.log("allConcurrentLanes", allConcurrentLanes);
  console.log("Flows", flows);
};

// generateCliques(test1);
// generateCliques(test2);
// generateCliques(test3);
// generateCliques(test4);
// generateCliques(test5);
// generateCliques(test6);
generateCliques(test7);
