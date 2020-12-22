import React from "react";

function OpenCloseInstructions({ toggleCloseOpen, showInstructions }) {
  return (
    <div
      className="OpenCloseInstructions"
      style={!showInstructions ? { height: "100%" } : {}}
    >
      <section>
        <button
          aria-hidden="false"
          onClick={toggleCloseOpen}
          className={`fas fa-angle-double-down ${!showInstructions ? "open" : "close"}`}
        ></button>
        <button
          aria-hidden="false"
          onClick={toggleCloseOpen}
          className={`fas fa-angle-double-up ${showInstructions ? "open" : "close"}`}
        ></button>
      </section>
    </div>
  );
}

export default OpenCloseInstructions;
