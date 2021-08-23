import React from "react";
import LessonList from "./LessonList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LessonList />
      </div>
    );
  }
}

export default App;
