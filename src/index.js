import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import User from "./User";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/250/300";
const myName = "Dharmik";

let currDate = new Date().getHours();
let greeting = "";
if (currDate >= 1 && currDate <= 12) {
  greeting = "Good Morning";
} else if (currDate >= 12 && currDate <= 19) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

root.render(
  <React.StrictMode>
    <h1>
      Hello,{greeting}!! my name is {myName}; and This is Images:
    </h1>
    <div className="images">
      <img src={img1} alt="random images" />
      <img src={img2} alt="random images" />
      <a href="https://picsum.photos/">
        <img src={img3} alt="random images" className="img3" />
      </a>
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
