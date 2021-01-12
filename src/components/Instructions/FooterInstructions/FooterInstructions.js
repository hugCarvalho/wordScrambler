import React from "react";
import Emoji from "../../../reusable/Emoji/Emoji";
import PropTypes from "prop-types";

function FooterInstructions({ activePage, setActivePage }) {
  return (
    <footer className="FooterInstructions">
      <button
        className="turn-page"
        onClick={() => setActivePage(state => state - 1)}
        style={activePage < 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
      >
        <Emoji title="page back" ariaLabel="page back" style={{ color: "white" }}>
          👈
        </Emoji>
      </button>
      <span data-testid="active-page">{activePage}</span>
      <button
        className="turn-page"
        onClick={() => setActivePage(state => state + 1)}
        style={activePage > 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
      >
        <Emoji title="page forward" ariaLabel="page forward" style={{ color: "white" }}>
          👉
        </Emoji>
      </button>
    </footer>
  );
}

FooterInstructions.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default FooterInstructions;
