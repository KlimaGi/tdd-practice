import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import LessonList from "../components/LessonList";

describe("App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renderes a lesson list", () => {
    const lessonList = appWrapper.find(LessonList);

    expect(lessonList).toHaveLength(1);
  });

  it("has state", () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it("has a lesson property on state", () => {
    const appState = appWrapper.state();

    expect(appState.lesson).toBeDefined();
  });

  it("passes lesson property of state to lessonList as prop", () => {
    const lessonList = appWrapper.find(LessonList);

    expect(lessonList.props().lesson).toEqual(appWrapper.state().lesson);
  });
});
