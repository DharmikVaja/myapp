// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM  from "react-dom";
import Header from "./Header.js";
import List from "./List.jsx";
import User from "./User.js";
import Images from "./Images";
import Greeting from "./Greeting.jsx";

function App() {
  ReactDOM.render(<App />, document.getElementById("app"));
}
const loadedStates = ["complete", "loaded", "interactive"];
if (loadedStates.includes(document.readyState) && document.body) {
  App();
} else {
  window.addEventListener("DOMContentLoaded", App, false);
}

export default App;
