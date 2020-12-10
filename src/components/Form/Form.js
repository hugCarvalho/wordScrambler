import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";

function Form({ onSubmitHandler, gameStatus }) {
  const [userText, setUserText] = useState("");
  //console.log("On submit handler: gameStatusWas:", gameStatus);
  //console.log("USER TEXT", userText);
  //const checkValidity =() =>
  // const userInput = useRef();
  return (
    <form onSubmit={e => onSubmitHandler(e, userText)} className="Input">
      <input
        className=""
        type="text"
        id="input-text"
        // disabled={gameStatus === "onFirstLoad" || gameStatus === "ended"}
        autoComplete="off"
        value={userText}
        onChange={e => setUserText(e.target.value)}
        // ref={userInput}
      />
      {/* {gameStatus === "playing" && userInput.focus()} */}
      <Button gameStatus={gameStatus} type="submit">
        {gameStatus === "onFirstLoad"
          ? "Start"
          : gameStatus === "playing" || gameStatus === "setup"
          ? "Guess"
          : "Restart"}
      </Button>
    </form>
  );
}

export default Form;
