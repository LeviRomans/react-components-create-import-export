import React from "react";
import ReactDOM from "react-dom";
// "./" denotes the path relative to this current file
import Heading from "./Heading";
import List from "./List";

ReactDOM.render(
  <>
    <Heading />
    <List />
  </>,
  document.getElementById("root")
);
