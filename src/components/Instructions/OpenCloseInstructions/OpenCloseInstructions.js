import React from "react";

function OpenCloseInstructions({ toggleCloseOpen, gameStatus, showInstructions }) {
  return (
    <div
      className="OpenCloseInstructions"
      style={!showInstructions ? { height: "100%" } : {}}
    >
      <section>
        <button
          onClick={gameStatus !== "playing" ? toggleCloseOpen : null}
          className={`fas fa-angle-double-down ${!showInstructions ? "open" : "close"}`}
        ></button>
        <button
          onClick={toggleCloseOpen}
          className={`fas fa-angle-double-up ${showInstructions ? "open" : "close"}`}
        ></button>
      </section>
    </div>
  );
}

export default OpenCloseInstructions;
