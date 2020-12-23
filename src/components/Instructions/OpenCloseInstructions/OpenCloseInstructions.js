import React from "react";
import "./OpenCloseInstructions.scss";

function OpenCloseInstructions({ toggleCloseOpen, showInstructions }) {
  return (
    <div
      className="OpenCloseInstructions"
      style={!showInstructions ? { height: "100%" } : {}}
    >
      <section>
        <button
          aria-hidden="false"
          title="slide down"
          onClick={toggleCloseOpen}
          className={`fas fa-angle-double-down ${showInstructions ? "close" : "open"}`}
        ></button>
        <button
          aria-hidden="false"
          title="slide up"
          onClick={toggleCloseOpen}
          className={`fas fa-angle-double-up ${showInstructions ? "open" : "close"}`}
        ></button>
      </section>
    </div>
  );
}

export default OpenCloseInstructions;
