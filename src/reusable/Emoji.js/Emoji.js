import React from "react";

export function Emoji({ children, ariaLabel, title, className = "", style = {} }) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      title={title}
      className={className}
      style={style}
    >
      {children}
    </span>
  );
}

export default Emoji;
