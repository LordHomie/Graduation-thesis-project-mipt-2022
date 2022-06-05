import { useSelector } from "react-redux";
import { Graph } from "react-d3-graph";

const CompatibleGraph = () => {
  const coloredLanes = useSelector((state) => state.coloredLanes);
  const allPairs = useSelector((state) => state.allPairs);

  const nodes = [];
  for (let i of coloredLanes) {
    nodes.push({ key: i[0], id: i[0], color: i[2] });
  }

  const linksObjects = [];
  for (let i of allPairs) {
    for (let j of i) {
      linksObjects.push({ source: j[0], target: j[1] });
    }
  }

  const links = linksObjects.filter(
    (v, i, a) =>
      a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
  );

  const data = {
    nodes: nodes,
    links: links,
  };

  const myConfig = {
    nodeHighlightBehavior: true,
    width: 473,
    height: 300,
    node: {
      color: "#00b4d8",
      size: 300,
      fontSize: 14,
      highlightStrokeColor: "black",
      highlightFontWeight: "bold",
      highlightFontSize: 15,
    },
    link: {
      highlightColor: "black",
    },
    d3: {
      gravity: -190,
    },
  };

  // const onClickNode = function (nodeId) {
  //   window.alert(`Clicked node ${nodeId}`);
  // };

  // const onClickLink = function (source, target) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

  return (
    <Graph
      id="graph-id"
      data={data}
      config={myConfig}
      // onClickNode={onClickNode}
      // onClickLink={onClickLink}
    />
  );
};

export default CompatibleGraph;
