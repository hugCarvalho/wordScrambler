import React from "react";
import "./Instructions.scss";

function Instructions() {
  return (
    <div className="Instructions">
      <div>
        <b>Instructions:</b>{" "}
        <i>guess the scrambled word in the least amount of guesses possible. </i>
        <i>The fastest you are the more points you'll get.</i>
      </div>
    </div>
  );
}

export default Instructions;
