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
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      task: {
        text: this.state.task.text,
        id: uniqid(),
      },
      tasks: [...this.state.tasks, this.state.task],
    });
  }

  handleInput = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
      },
    });
  };

  deleteTask = (id) => {
    const deepCopy = [...this.state.tasks];
    const toBeRemoved = deepCopy.find((task) => task.id === id);
    console.log(deepCopy, toBeRemoved);
    const newArr = deepCopy.filter((task) => task.id !== toBeRemoved.id);
    console.log(newArr);
    this.setState({
      tasks: newArr,
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
          ></input>
          <button onClick={this.handleSubmit}>Submit</button>
          <div className="tasks-container">
            <Overview tasks={tasks} handleDelete={this.deleteTask} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
