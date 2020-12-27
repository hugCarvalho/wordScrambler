import React from "react";
import "./BackdropSlidingMenu.scss";

function BackdropSlidingMenu({
  children,
  isMenuOpen,
  closeMenu,
  extraClasses,
  closeIcon,
}) {
  return (
    <div
      className={`BackdropSlidingMenu ${extraClasses}`}
      style={
        isMenuOpen ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }
      }
    >
      <span className="close" onClick={closeMenu}>
        {closeIcon}
      </span>
      {children}
    </div>
  );
}

export default BackdropSlidingMenu;
