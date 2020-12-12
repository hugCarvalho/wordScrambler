import React from "react";
import "./Countdown.scss";

function Countdown({ countdown }) {
  return (
    <div className="Countdown">
      <span role="img" aria-label="countdown" title="countdown">
        ⏳
      </span>{" "}
      <span>{countdown}</span>
    </div>
  );
}

export default Countdown;
//⌛
