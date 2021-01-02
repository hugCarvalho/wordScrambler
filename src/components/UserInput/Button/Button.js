import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

function Button({ type, children, onClick: focus }) {
  return (
    <button onClick={focus} className="Button" type={type} name="main-button">
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
