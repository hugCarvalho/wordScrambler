import React from "react";
import "./Emoji.scss";
import PropTypes from "prop-types";

export function Emoji({ children, ariaLabel, title, className = "", style = {} }) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      title={title}
      className={`Emoji ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

Emoji.propTypes = {
  children: PropTypes.any,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Emoji;
