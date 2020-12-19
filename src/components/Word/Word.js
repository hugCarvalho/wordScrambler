import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  const link = `https://en.wikipedia.org/wiki/${scrambledWord}`;
  const [makeColorPink, setmakeColorPink] = React.useState(false);

  return (
    <div className="Word">
      {/* <span>word</span> */}
      <span className="word">
        {gameStatus === "onLoad" || gameStatus === "scramblingWord" ? (
          "❓"
        ) : gameStatus === "ended" ? (
          <a
            style={makeColorPink ? { color: "pink", transform: "scale(1.1)" } : null}
            onMouseOver={() => setmakeColorPink(true)}
            onMouseLeave={() => setmakeColorPink(false)}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scrambledWord}{" "}
          </a>
        ) : (
          scrambledWord
        )}
      </span>
    </div>
  );
}

export default Word;
