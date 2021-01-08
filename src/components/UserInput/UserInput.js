import React, { useEffect, useRef, useState } from "react";
import Emoji from "../../reusable/Emoji/Emoji";
import Button from "../../reusable/Button";
import "./UserInput.scss";
import "./MainButton/MainButton.scss";
import PropTypes from "prop-types";
import GiveUpBtn from "./GiveUpBtn/GiveUpBtn";

// import ReactTooltip from "react-tooltip";

function Form({
  onSubmitHandler,
  gameStatus,
  gameWon,
  guessesLeft,
  countdown,
  options,
  setGuessesLeft,
}) {
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

    if (userText === "" && gameStatus === "playing") {
      setShowWrongGuessIndicator(false);
    }
  }, [userText, gameStatus]);

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
    // console.log(guessesLeft);
  }, [guessesLeft]);

  return (
    <form onSubmit={e => onSubmitHandler(e, userText)} className="UserInput">
      <div className="input-container">
        <input
          aria-label="user guess"
          type="text"
          id="input-text"
          disabled={gameStatus === "onLoad" || gameStatus === "ended"}
          autoComplete="off"
          value={userText}
          onChange={e => setUserText(e.target.value.toLowerCase())}
          ref={userInput}
        />
        <label htmlFor="input-text"></label>
        <Emoji
          className="guess-result"
          id="wrong-guess"
          style={showWrongGuessIndicator ? { display: "inline" } : { display: "none" }}
          ariaLabel="wrong guess"
          title="wrong guess"
        >
          🔴
        </Emoji>
        <Emoji
          className="guess-result"
          style={gameWon === "yes" ? { display: "inline" } : { display: "none" }}
          ariaLabel="correct guess"
          title="guess correct"
        >
          ✅
        </Emoji>
      </div>
      {}
      <div className="btns">
        <GiveUpBtn
          countdown={countdown}
          options={options}
          gameStatus={gameStatus}
          setGuessesLeft={setGuessesLeft}
        />
        <Button
          className="MainBtn"
          onClick={() => userInput.current.focus()}
          type="submit"
        >
          {gameStatus === "onLoad"
            ? "Start"
            : gameStatus === "ended"
            ? "Play again"
            : "Guess"}
        </Button>
      </div>
      {/* <ReactTooltip delayHide={1000} disable={false}>
        <p>Start typing...</p>
      </ReactTooltip> */}
    </form>
  );
}

Form.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  gameWon: PropTypes.string,
  guessesLeft: PropTypes.number.isRequired,
};

export default Form;
