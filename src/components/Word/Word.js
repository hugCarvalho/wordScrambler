import React from "react";
import "./Word.scss";

function Word({ gameStatus, scrambledWord, correctWord }) {
  return (
    <div className="Word">
      {/* <span>word</span> */}
      <span>
        {
          gameStatus === "onLoad" || gameStatus === "scramblingWord"
            ? "❓"
            : scrambledWord
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
