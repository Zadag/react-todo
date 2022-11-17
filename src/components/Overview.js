import React from "react";

const Overview = ({ tasks }) => {
  return tasks.map((task) => <h1>{task}</h1>);
};

export default Overview;
