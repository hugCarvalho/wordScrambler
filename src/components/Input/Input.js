import React from "react";
import "./Input.scss";

function Input({ onSubmitHandler, gameStatus }) {
  return (
    <form onSubmit={e => onSubmitHandler(e)}>
      <input
        className=""
        type="text"
        id="input-text"
        autoFocus={gameStatus === "playing"}
        disabled={gameStatus !== "playing"}
        autoComplete="off"
        //value={word}
        //onChange={e => setWord(e.target.value)}
      />
      <button type="submit">
        {gameStatus === "idle" ? "Start" : gameStatus === "playing" ? "Guess" : "Restart"}
      </button>
    </form>
  );
}

export default Input;
