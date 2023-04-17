import React from "react";
import ReactDOM from "react-dom/client";
import { Friends } from "./App";
// import {name, profession, sum} from './App'
// import * as App from './App'-----

// JSX: Javasript Expressions: combination of HTML, JS and XML

const name1 = "sanjay";
const name2 = "omi";

const root = ReactDOM.createRoot(document.querySelector("#wrapper"));
root.render(
  <div id="d1">
    <Friends f1={name1} f2={name2}/>
  </div>
);
