import React from "react";

function Score(props) {
  return (
    <React.Fragment>
      <h2 className="score">Score: {props.myScore}</h2>
      <h2 className="score">
        {props.myScore === 6
          ? "Well done, you matched every cute little tile!"
          : null}
      </h2>
    </React.Fragment>
  );
}

export default Score;
