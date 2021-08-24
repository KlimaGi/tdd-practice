import React from "react";
import LessonList from "./components/LessonList";
import "./App.css";

class App extends React.Component {
  state = { lesson: [] };
  render() {
    return (
      <div className="App">
        <LessonList lesson={this.state.lesson} />
      </div>
    );
  }
}

export default App;
