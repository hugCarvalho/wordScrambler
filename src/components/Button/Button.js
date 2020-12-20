import React from "react";
import "./Button.scss";

//onClick={() => userInput.current.focus()

function Button({ type, children, focus }) {
  return (
    <button onClick={focus} className="Button" type={type}>
      {children}
    </button>
  );
}

export default Button;
