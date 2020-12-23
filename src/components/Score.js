import React from "react";
// this component displays the score that it recieves from its parent, it has a condition that will tell the player that they have won if their score is 6
function Score(props) {
  return (
    <React.Fragment>
      <h2 className="score">Score: {props.myScore}</h2>
      <h2 className="score">
        {!props.letsStart
          ? null
          : props.myScore === 6 && props.movesLeft >= 0
          ? "Well done, you matched every cute little tile!"
          : props.myScore < 6 && props.movesLeft <= 0
          ? "Sorry, you don't have any moves left. Play again?"
          : null}
      </h2>
    </React.Fragment>
  );
}

export default Score;
