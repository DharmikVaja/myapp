import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import User from "./User";
import Header from "./Header";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/250/300";

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

root.render(
  <React.StrictMode>
    <h1>Hello,{greeting}!! and This is Images:</h1>
    <div className="images">
      <img src={img1} alt="random images" />
      <img src={img2} alt="random images" />
      <a href="https://picsum.photos/">
        <img src={img3} alt="random images" className="img3" />
      </a>
    </div>
    <ul>
      <li>This</li>
      <li>is</li>
      <li>a</li>
      <li>List</li>
    </ul>

    <App />
    <User />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
