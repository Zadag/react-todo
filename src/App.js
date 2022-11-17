import "./App.css";
import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Sample task"],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState({
      tasks: this.state.tasks.push(task),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="submit-tasks">
          <input type="text"></input>
          <button>Submit</button>
          <Overview tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
export default App;
