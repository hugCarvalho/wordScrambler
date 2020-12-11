import React from "react";
import ReactTooltip from "react-tooltip";

function WarningHandling({ warning }) {
  return (
    <p data-tip="hello world">
      adasdasdasd
      <ReactTooltip>
        <p>Start ...</p>
      </ReactTooltip>
    </p>
  );
}

export default WarningHandling;
