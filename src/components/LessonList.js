import React from "react";

export default (props) => (
  <ul>{props.lesson && props.lesson.length == 1 ? <li></li> : undefined}</ul>
);
