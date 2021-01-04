import React from "react";
import Emoji from "../../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";
import "./Countdown.scss";
import changeCountdownColor from "./fns";

function Countdown({ countdown }) {
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
