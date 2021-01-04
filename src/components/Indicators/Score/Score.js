import React from "react";
import "./Score.scss";
import Emoji from "../../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";
import changeBgColorOnWin from "./fns";

function Score({ score, gameWon }) {
  return (
    <div style={changeBgColorOnWin(gameWon)} className="Score">
      <Emoji aria-label="score" title="score" style={{ color: "white" }}>
        🎉
      </Emoji>
      <span className="score" style={{ backgroundColor: "#282c34" }}>
        {" "}
        {score}
      </span>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  gameWon: PropTypes.string,
};

export default Score;
