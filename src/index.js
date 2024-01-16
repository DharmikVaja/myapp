import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Users from "./Users";
import reportWebVitals from "./reportWebVitals";

// yarn is alternative of npm, created by facebook
// package.json has detail about app,
// and package.lock.json has detail about pkg.json and all node modules (their tree structure).
// manifest.json/ meta-files used for (advanced)web creation

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
