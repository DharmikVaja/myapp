import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/250/300";

let greeting = "";
function Images() {
  return (
    <>
      <h1>Hello,{greeting}!! and This is Images:</h1>
      <div className="images">
        <img src={img1} alt="random images" />
        <img src={img2} alt="random images" />
        <a href="https://picsum.photos/">
          <img src={img3} alt="random images" className="img3" />
        </a>
      </div>
      Greeting;
    </>
  );
}

export default Images;
