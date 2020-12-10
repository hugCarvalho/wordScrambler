import React from "react";
import "./Button.scss";

//onClick={() => userInput.current.focus()

function Button({ type, children }) {
  return <button type={type}>{children}</button>;
}

export default Button;
