import React from "react";
import PropTypes from "prop-types";

function Button({
  type,
  children,
  onClick,
  className,
  autoFocus = false,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      autoFocus={autoFocus}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
