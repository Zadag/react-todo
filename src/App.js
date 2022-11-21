import "./App.css";
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: {
        text: "",
        id: uniqid(),
        edit: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      task: {
        text: this.state.task.text,
        id: uniqid(),
        edit: false,
      },
      tasks: [...this.state.tasks, this.state.task],
    });
  }

  handleSubmitEnter = (event) => {
    if (event.key === "Enter") this.handleSubmit();
  };

  handleInput = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        edit: false,
      },
    });
  };

  deleteTask = (id) => {
    const deepCopy = [...this.state.tasks];
    const toBeRemoved = deepCopy.find((task) => task.id === id);
    const newArr = deepCopy.filter((task) => task.id !== toBeRemoved.id);
    this.setState({
      tasks: newArr,
    });
  };

  handleEditButton = (id) => {
    const deepCopy = [...this.state.tasks];
    // const toEdit = deepCopy.find((task) => task.id === id);
    deepCopy.forEach((task) => {
      if (task.id === id) {
        task.edit = true;
      }
    });
    this.setState({
      tasks: deepCopy,
    });
  };

  handleEditInput = (event, task) => {
    const deepCopy = [...this.state.tasks];
    const newTask = deepCopy.find((newTask) => newTask === task);
    newTask.text = event.target.value;
    this.setState({
      tasks: deepCopy,
    });
  };

  handleEditEnter = (event, task) => {
    if (event.key === "Enter") this.handleSaveEdit(task);
  };

  handleSaveEdit = (task) => {
    const deepCopy = [...this.state.tasks];
    const newTask = deepCopy.find((newTask) => newTask === task);
    newTask.edit = false;
    this.setState({
      tasks: deepCopy,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="App">
        <div className="submit-tasks">
          <input
            type="text"
            value={task.text}
            onChange={this.handleInput}
            onKeyDown={this.handleSubmitEnter}
          ></input>
          <button onClick={this.handleSubmit}>Submit</button>
          <div className="tasks-container">
            <Overview
              tasks={tasks}
              handleDelete={this.deleteTask}
              handleEditButton={this.handleEditButton}
              handleEditInput={this.handleEditInput}
              handleSaveEdit={this.handleSaveEdit}
              handleEditEnter={this.handleEditEnter}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
