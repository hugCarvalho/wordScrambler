import React, { useEffect, useRef, useState } from "react";
import Emoji from "../../reusable/Emoji.js/Emoji";
import Button from "../Button/Button";
import "./UserInput.scss";
// import ReactTooltip from "react-tooltip";

function Form({ onSubmitHandler, gameStatus, gameWon, guessesLeft }) {
  const [userText, setUserText] = useState("");
  const [showWrongGuessIndicator, setShowWrongGuessIndicator] = useState(false);
  const userInput = useRef();

  useEffect(() => {
    if (gameStatus === "setup") {
      setUserText("");
    }
    if (gameStatus === "playing") {
      userInput.current.focus();
    }
  }, [gameStatus]);

  //Removes wrong guess indicator after user types(or deletes) text again
  useEffect(() => {
    if (showWrongGuessIndicator) {
      setShowWrongGuessIndicator(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userText]);

  //Triggers showing of wrong guess indicator
  useEffect(() => {
    if (guessesLeft < 3) {
      setShowWrongGuessIndicator(true);
    }
    console.log(guessesLeft);
  }, [guessesLeft]);

  return (
    <form onSubmit={e => onSubmitHandler(e, userText)} className="UserInput">
      <div className="input-container">
        <input
          type="text"
          id="input-text"
          disabled={gameStatus === "onLoad" || gameStatus === "ended"}
          autoComplete="off"
          value={userText}
          onChange={e => setUserText(e.target.value.toLowerCase())}
          //placeholder="press start to begin a game"
          ref={userInput}
        />
        <Emoji
          className="guess-result"
          style={showWrongGuessIndicator ? { display: "inline" } : { display: "none" }}
          ariaLabel="wrong guess"
          title="wrong guess"
        >
          🔴
        </Emoji>
        <Emoji
          className="guess-result"
          style={gameWon === "yes" ? { display: "inline" } : { display: "none" }}
          ariaLabel="guess correct"
          title="guess correct"
        >
          ✅
        </Emoji>
      </div>
      {}
      <Button
        focus={() => userInput.current.focus()}
        gameStatus={gameStatus}
        type="submit"
      >
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
