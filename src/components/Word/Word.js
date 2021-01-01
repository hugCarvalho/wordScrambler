import React from "react";
import "./Word.scss";
import PropTypes from "prop-types";

function Word({ gameStatus, scrambledWord }) {
  //Active on gameStatus "ended" only
  const [changeWordColor, setChangeWordColor] = React.useState(false);
  const link = `https://en.wikipedia.org/wiki/${scrambledWord}`;

  return (
    <div className="Word">
      <span>
        {gameStatus === "onLoad" || gameStatus === "scramblingWord" ? (
          "❓"
        ) : gameStatus === "ended" ? (
          <a
            style={changeWordColor ? { color: "pink" } : {}}
            onMouseOver={() => setChangeWordColor(true)}
            onMouseLeave={() => setChangeWordColor(false)}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scrambledWord}
            <span className="info fas fa-info-circle" />
          </a>
        ) : (
          <>{scrambledWord}</>
        )}
      </span>
    </div>
  );
}

Word.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  scrambledWord: PropTypes.string.isRequired,
};

//ℹ️❔
//<i class="fas fa-info-circle"></i>
//<i class="fas fa-question-circle"></i>
//<i class="far fa-question-circle"></i>
export default Word;
