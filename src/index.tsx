
// const foo = require('dotenv').config();
// import { config, load } from 'dotenv';
// import dotenv from 'dotenv';
// const foo = dotenv.config();
// console.log(foo);
// import path from 'path';
// console.log(path.resolve(process.cwd(), '.env'));

import React from "react";
import ReactDOM from "react-dom";
import { App } from '@app/index';

if (process.env.NODE_ENV !== "production") {
  const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: false
      }
    ]
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000, config);
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
