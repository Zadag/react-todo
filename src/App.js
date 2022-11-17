import "./App.css";
import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Sample task", "Sample task 2"],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    const task = document.querySelector("input").value;

    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="submit-tasks">
          <input type="text"></input>
          <button onClick={this.addTask}>Submit</button>
          <Overview tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
export default App;
