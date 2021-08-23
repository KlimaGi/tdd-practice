import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import LessonList from "./LessonList";

describe("App", () => {
  it("renders App without crashing", () => {
    const appWrapper = shallow(<App />);
  });

  it("renderes a lesson list", () => {
    const appWrapper = shallow(<App />);
    const lessonList = appWrapper.find(LessonList);

    expect(lessonList).toHaveLength(1);
  });

  it("", () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();
  });
});
