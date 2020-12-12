import React from "react";
import "./Button.scss";

//onClick={() => userInput.current.focus()

function Button({ type, children }) {
  return (
    <button className="Button" type={type}>
      {children}
    </button>
  );
}

export default Button;
