import React from "react";
import { shallow } from "enzyme";
import LessonList from "../components/LessonList";

describe("LessonList", () => {
  it("renders a ul element", () => {
    const lessonListWrapper = shallow(<LessonList />);
    const lessonListUls = lessonListWrapper.find("ul");

    expect(lessonListUls).toHaveLength(1);
  });

  it("renders no li elements when no lesson exist", () => {
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

  it("renders one li element for each person that exists", () => {
    const lesson = [
      { title: "topic name", note: "important notes", url: "" },
      { title: "topic other name", note: "just notes", url: "" },
    ];
    const lessonListWrapper = shallow(<LessonList lesson={lesson} />);
    const lessonListItems = lessonListWrapper.find("li");

    expect(lessonListItems).toHaveLength(2);
  });

  it("renders the title and note of a lesson", () => {
    const lesson = [{ title: "topic name", note: "important notes", url: "" }];
    const lessonListWrapper = shallow(<LessonList lesson={lesson} />);
    const lessonListItems = lessonListWrapper.find("li");

    expect(lessonListWrapper.find("li").text()).toContain(lesson[0].title);
    expect(lessonListWrapper.find("li").text()).toContain(lesson[0].note);
  });
});
