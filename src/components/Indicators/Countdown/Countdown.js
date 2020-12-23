import React from "react";
import Emoji from "../../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";
import "./Countdown.scss";

function Countdown({ countdown }) {
  const changeCountdownColor = countdown => {
    if (countdown <= 5) return { color: "#ff3434" };
    else if (countdown <= 15) return { color: "#ffd700" };
    else return;
  };

  return (
    <div className="Countdown">
      <Emoji aria-label="countdown" title="countdown" style={{ color: "white" }}>
        {/* ⌛ */}⏳
      </Emoji>
      <span style={changeCountdownColor(countdown)}>{countdown}</span>
    </div>
  );
}

Countdown.propTypes = {
  countdown: PropTypes.number.isRequired,
};

export default Countdown;
