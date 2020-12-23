import React from "react";
import PropTypes from "prop-types";

function RadioButton({ children, active, value, onChange, disabled = false }) {
  return (
    <div className={`RadioButton`}>
      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={active === value}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

RadioButton.propTypes = {
  active: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default RadioButton;
