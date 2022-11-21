import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

const Overview = ({
  handleEditEnter,
  tasks,
  handleDelete,
  handleEditButton,
  handleEditInput,
  handleSaveEdit,
}) => {
  return tasks.map((task, index) => {
    if (task.edit === false) {
      return (
        <div className="task" key={task.id}>
          <label>{index + 1}</label>
          <h1 key={task.id}>{task.text}</h1>
          <FontAwesomeIcon
            className="delete-icon"
            icon={faSquareMinus}
            onClick={() => handleDelete(task.id)}
          />
          <button onClick={() => handleEditButton(task.id)}>Edit</button>
        </div>
      );
    }
    if (task.edit === true) {
      return (
        <div className="task" key={task.id}>
          <label>{index + 1}</label>
          <input
            value={task.text}
            onChange={(event) => handleEditInput(event, task)}
            onKeyDown={(event) => handleEditEnter(event, task)}
          />
          <button onClick={() => handleSaveEdit(task)}>Save</button>
        </div>
      );
    }
  });
};

export default Overview;
