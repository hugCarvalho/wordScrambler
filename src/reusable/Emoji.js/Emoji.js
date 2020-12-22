import React from "react";
import "./Emoji.scss";

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

export default Emoji;
