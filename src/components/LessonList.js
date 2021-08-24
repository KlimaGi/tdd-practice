import React from "react";

export default ({ lesson = [] }) => (
  <ul>
    {lesson.map((lesson, i) => (
      <li key={i}>
        {lesson.title} | {lesson.note}
      </li>
    ))}
  </ul>
);
