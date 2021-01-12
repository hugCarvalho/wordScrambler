import React from "react";
import PropTypes from "prop-types";

function ShowInstructionsOnLoad({ customOptions, toggleShowInstructionsOnLoad }) {
  return (
    <div className="ShowInstructionsOnLoad">
      <label htmlFor="show-instructions-on-load">default show instructions</label>
      <input
        id="show-instructions-on-load"
        type="checkbox"
        checked={customOptions.showInstructionsOnLoad}
        onChange={toggleShowInstructionsOnLoad}
      />
    </div>
  );
}

ShowInstructionsOnLoad.propTypes = {
  customOptions: PropTypes.object.isRequired,
  toggleShowInstructionsOnLoad: PropTypes.func.isRequired,
};

export default ShowInstructionsOnLoad;
