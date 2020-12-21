import React from "react";

function OpenCloseInstructions({ gameStatus, showInstructions, setShowInstructions }) {
  return (
    <div
      className="OpenCloseInstructions"
      style={!showInstructions ? { height: "100%" } : {}}
    >
      <section>
        <button
          onClick={
            gameStatus !== "playing" ? () => setShowInstructions(state => !state) : ""
          }
          className={`fas fa-angle-double-down ${!showInstructions ? "open" : "close"}`}
        ></button>
        <button
          onClick={() => setShowInstructions(state => !state)}
          className={`fas fa-angle-double-up ${showInstructions ? "open" : "close"}`}
        ></button>
      </section>
    </div>
  );
}

export default OpenCloseInstructions;
