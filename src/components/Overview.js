import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const Overview = ({ tasks }) => {
  return tasks.map((task, index) => {
    return (
      <div className="task" key={task.id}>
        <label>{index + 1}</label>
        <h1 key={task.id}>{task.text}</h1>
        <FontAwesomeIcon className="delete-icon" icon={faSquareMinus} />
      </div>
    );
  });
};

export default Overview;
