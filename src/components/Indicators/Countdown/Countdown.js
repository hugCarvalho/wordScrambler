import React from "react";
import "./Countdown.scss";

function Countdown({ countdown }) {
  const changeTimeColor = countdown => {
    if (countdown <= 5) return { color: "#ff3434" };
    else if (countdown <= 15) return { color: "#ffd700" };
    else return;
  };
  return (
    <div className="Countdown">
      <span role="img" aria-label="countdown" title="countdown">
        ⏳
      </span>{" "}
      <span style={changeTimeColor(countdown)}>{countdown}</span>
    </div>
  );
}

export default Countdown;
//⌛
