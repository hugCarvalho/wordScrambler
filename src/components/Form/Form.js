import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import ReactTooltip from "react-tooltip";

function Form({ onSubmitHandler, gameStatus }) {
  const [userText, setUserText] = useState("");
  const userInput = useRef();

  useEffect(() => {
    if (gameStatus === "setup") {
      setUserText("");
    }
    if (gameStatus === "playing") {
      userInput.current.focus();
    }
  }, [gameStatus]);

  return (
    <form onSubmit={e => onSubmitHandler(e, userText)} className="Input">
      <input
        // data-type="warning"
        // data-place="left"
        // data-effect="solid"
        className=""
        type="text"
        id="input-text"
        disabled={gameStatus === "onFirstLoad" || gameStatus === "ended"}
        autoComplete="off"
        value={userText}
        onChange={e => setUserText(e.target.value)}
        //placeholder="press start to begin a game"
        ref={userInput}
      />
      {}
      <Button gameStatus={gameStatus} type="submit">
        {gameStatus === "onFirstLoad"
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
