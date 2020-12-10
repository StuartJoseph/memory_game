import React from "react";

function Options(props) {
  return (
    <div className="options">
      <div>
        <button className="option-btn" onClick={props.showRules}>
          rules
        </button>
      </div>
      <div>
        <button className="option-btn" onClick={props.restart}>
          restart
        </button>
      </div>
    </div>
  );
}

export default Options;
