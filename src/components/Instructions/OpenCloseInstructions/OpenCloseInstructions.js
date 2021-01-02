import React from "react";
import "./OpenCloseInstructions.scss";
import PropTypes from "prop-types";

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
          className={`fas fa-angle-double-down ${showInstructions ? "close" : "open"}`}
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

OpenCloseInstructions.propTypes = {
  toggleCloseOpen: PropTypes.func.isRequired,
  showInstructions: PropTypes.bool.isRequired,
};

export default OpenCloseInstructions;
