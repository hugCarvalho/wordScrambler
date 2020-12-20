import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";
// import ReactTooltip from "react-tooltip";

function Form({ onSubmitHandler, gameStatus, gameWon, guessesLeft }) {
  const [userText, setUserText] = useState("");
  const [displayWrongGuessCross, setDisplayWrongGuessCross] = useState(false);
  const userInput = useRef();

  useEffect(() => {
    if (gameStatus === "setup") {
      setUserText("");
    }
    if (gameStatus === "playing") {
      userInput.current.focus();
    }
  }, [gameStatus]);

  useEffect(() => {
    console.log(displayWrongGuessCross);
    if (displayWrongGuessCross) {
      setDisplayWrongGuessCross(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userText]);

  useEffect(() => {
    if (guessesLeft < 3) {
      setDisplayWrongGuessCross(true);
    }
  }, [guessesLeft]);
  return (
    <form onSubmit={e => onSubmitHandler(e, userText)} className="Form">
      <div className="input">
        <input
          // data-type="warning"
          // data-place="left"
          // data-effect="solid"
          className=""
          type="text"
          id="input-text"
          disabled={gameStatus === "onLoad" || gameStatus === "ended"}
          autoComplete="off"
          value={userText}
          onChange={e => setUserText(e.target.value)}
          //placeholder="press start to begin a game"
          ref={userInput}
        />
        {/* <div className="guess-result"> */}
        <span
          style={displayWrongGuessCross ? { display: "inline" } : { display: "none" }}
          className="guess-result right-guess"
        >
          🔴
        </span>
        <span
          style={gameWon === "yes" ? { display: "inline" } : { display: "none" }}
          className="guess-result wrong-guess"
        >
          ✅
        </span>
        {/* </div> */}
      </div>
      {}
      <Button gameStatus={gameStatus} type="submit">
        {gameStatus === "onLoad"
          ? "Start"
          : gameStatus === "playing" || gameStatus === "setup"
          ? "Guess"
          : "Play again"}
      </Button>
      {/* <ReactTooltip delayHide={1000} disable={false}>
        <p>Start typing...</p>
      </ReactTooltip> */}
    </form>
  );
}

export default Form;
