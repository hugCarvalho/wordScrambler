import React from "react";
import "./Countdown.scss";

function Countdown({ countdown }) {
  return <span className="scrambled-w  hidden">Time: {countdown}</span>;
}

export default Countdown;
