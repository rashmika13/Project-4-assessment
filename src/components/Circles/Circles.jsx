import React from "react";
import "./Circles.css";

const Circle = (props) => (
  <div className="Circles">
    {props.selCir.map((c, idx) => (
      <div
        onClick={() => {
          props.handleCircle(idx);
        }}
        className={c ? "selected" : ""}
      >
        {idx + 1}
      </div>
    ))}
  </div>
);

export default Circle;
