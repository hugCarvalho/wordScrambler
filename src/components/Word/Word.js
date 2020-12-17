import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  const link = `https://en.wikipedia.org/wiki/${scrambledWord}`;
  return (
    <div className="Word">
      {/* <span>word</span> */}
      <span>
        {
          gameStatus === "onLoad" || gameStatus === "scramblingWord" ? (
            "❓"
          ) : gameStatus === "ended" ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {scrambledWord}{" "}
            </a>
          ) : (
            scrambledWord
          )
          //gameStatus === "playing"
          //? scrambledWord
          //: gameStatus === "ended"
          //? correctWord
          //: null
        }
      </span>
    </div>
  );
}

export default Word;
