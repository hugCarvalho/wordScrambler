import React from "react";

function RadioButton({ children, active, value, classes = "", onChange }) {
  return (
    <div>
      <input
        className={`RadioButton ${classes}`}
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={active === value}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

export default RadioButton;
