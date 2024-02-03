import React from "react";
import "./App.css";

const images = [
  "/line 1.svg",
  "/line 2.svg",
  "/line 3.svg",
  "/line 4.svg",
  "/line 5.svg",
  "/line 6.svg",
  "/line 7.svg",
  "/line 8.svg",
];

function App() {
  return (
    <div className="myContainer">
      <div className="svg-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`line${index + 1} svg-image ${
              index % 2 === 0 ? "l1" : "l2"
            }`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <img src={image} alt="images" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
