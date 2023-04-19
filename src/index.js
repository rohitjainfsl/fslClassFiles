import React from "react";
import ReactDOM from "react-dom/client";
// import { Counter } from "./Counter";
// import './counter.css'

import Todo from "./Todo";

// import {name, profession, sum} from './App'
// import * as App from './App'-----

// JSX: Javasript Expressions: combination of HTML, JS and XML



const root = ReactDOM.createRoot(document.querySelector("#wrapper"));
root.render(
  <div id="d1">
    {/* <Counter /> */}
    <Todo />
  </div>
);
