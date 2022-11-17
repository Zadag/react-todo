import React from "react";

const Overview = ({ tasks }) => {
  return tasks.map((task, index) => {
    return (
      <div className="task" key={task.id}>
        <label>{index + 1}</label>
        <h1 key={task.id}>{task.text}</h1>
      </div>
    );
  });
};

export default Overview;
