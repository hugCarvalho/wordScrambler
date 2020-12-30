import React from "react";
import "./MobileSlidingMenu.scss";
import PropTypes from "prop-types";

//TODO: extend closeIcon prop

function MobileSlidingMenu({
  closeMenuIcon,
  isMenuOpen,
  onClick,
  extraClasses,
  children,
}) {
  return (
    <div
      className={`MobileSlidingMenu ${extraClasses}`}
      style={
        isMenuOpen ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }
      }
    >
      <button className="close" onClick={onClick}>
        {closeMenuIcon}
      </button>
      {children}
    </div>
  );
}

MobileSlidingMenu.propTypes = {
  closeMenuIcon: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  extraClasses: PropTypes.string,
};

export default MobileSlidingMenu;
