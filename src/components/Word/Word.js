import React from "react";
import "./Word.scss";

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
          </a>
        ) : (
          scrambledWord
        )}
      </span>
    </div>
  );
}

export default Word;
