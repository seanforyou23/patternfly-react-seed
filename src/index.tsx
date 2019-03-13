import React from "react";
import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import App from '@app/index';
import { Routes } from '@app/Routes';

if (process.env.NODE_ENV !== "production") {
  // tslint:disable-next-line
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

// ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
ReactDOM.render(<Routes />, document.getElementById("root") as HTMLElement);
