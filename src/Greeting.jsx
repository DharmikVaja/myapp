import React from "react";
import ReactDOM from "react-dom";

let currDate = new Date().getHours();
let greeting = "";
if (currDate >= 1 && currDate <= 12) {
  greeting = "Good Morning";
} else if (currDate >= 12 && currDate <= 16) {
  greeting = "Good Afternoon";
} else if (currDate >= 16 && currDate <= 20) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}
function Greeting() {
  return;
}

export default Greeting;
