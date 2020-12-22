import React from "react";

function RadioButton({ children, active, value, onChange, disabled }) {
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

export default RadioButton;
