import React from "react";
import { shallow } from "enzyme";
import LessonList from "../components/LessonList";

describe("LessonList", () => {
  it("renders a ul element", () => {
    const lessonListWrapper = shallow(<LessonList />);
    const lessonListUls = lessonListWrapper.find("ul");

    expect(lessonListUls).toHaveLength(1);
  });

  it("renders no li elements when no people exist", () => {
    const lesson = [];
    const lessonListWrapper = shallow(<LessonList lesson={lesson} />);
    const lessonListItems = lessonListWrapper.find("li");

    expect(lessonListItems).toHaveLength(0);
  });

  it("renders one li element when one lesson exists", () => {
    const lesson = [{ title: "topic name", note: "important notes", url: "" }];
    const lessonListWrapper = shallow(<LessonList lesson={lesson} />);
    const lessonListItems = lessonListWrapper.find("li");

    expect(lessonListItems).toHaveLength(1);
  });
});
