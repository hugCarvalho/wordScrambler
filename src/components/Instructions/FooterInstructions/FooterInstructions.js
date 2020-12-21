import React from "react";

function FooterInstructions({ activePage, setActivePage }) {
  return (
    <footer className="FooterInstructions">
      <button
        className="turn-page"
        onClick={() => setActivePage(state => state - 1)}
        style={activePage < 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
      >
        👈
      </button>
      <span>{activePage}</span>
      <button
        className="turn-page"
        onClick={() => setActivePage(state => state + 1)}
        style={activePage > 2 ? { visibility: "hidden", pointerEvents: "none" } : {}}
      >
        👉
      </button>
    </footer>
  );
}

export default FooterInstructions;
