import React from "react";

function Select({
  data,
  id,
  name = id,
  defaultOptionText = "",
  handleOnChange,
  children,
  ...other
}) {
  const [updatedSelect, setUpdatedSelect] = React.useState("default");

  // const handleOnChange = e => {
  //   e.preventDefault();
  //   setUpdatedSelect(e.target.value);
  // };

  const renderOptions = data.map((option, i) => (
    <option value={option} key={i}>
      {option}
    </option>
  ));

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select name={name} id={id} onChange={handleOnChange} {...other}>
        {defaultOptionText && <option value="default">{defaultOptionText}</option>}
        {renderOptions}
      </select>
    </div>
  );
}

export default Select;