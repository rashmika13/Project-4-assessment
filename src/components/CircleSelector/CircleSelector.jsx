import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
  <div className="CircleSelector">
    {props.selCir.map((c, idx) => (
      <button
        onClick={() => {
          props.handleCircle(idx);
        }}
        className={c ? "selected" : ""}
      >
        {c
          ? "circle" + " " + (idx + 1) + " " + "selected"
          : "select" + " " + "color" + " " + (idx + 1)}
      </button>
    ))}
  </div>
);

export default CircleSelector;
