import React from "react";
import "./MobileSlidingMenu.scss";

function MobileSlidingMenu({ children, isMenuOpen, closeMenu, extraClasses, closeIcon }) {
  return (
    <div
      className={`MobileSlidingMenu ${extraClasses}`}
      style={
        isMenuOpen ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }
      }
    >
      <button className="close" onClick={closeMenu}>
        {closeIcon}
      </button>
      {children}
    </div>
  );
}

export default MobileSlidingMenu;
