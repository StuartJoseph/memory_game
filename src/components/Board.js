import React, { Component } from "react";
import Tile from "./Tile";
import Score from "./Score";
import Title from "./Title";
import Options from "./Options";
import Rules from "./Rules";
import Level from "./Level";
/* this is the parent component that holds all of the other components, it also holds the functions that displays our modal, reloads app and tracks the score  */
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: 0, // this state property is linked to it's child's state "<Tile/>" property "points" to keep track of the points
      modalShow: false, // this state property is linked to its child's component "<Rules/>" attribute "show" that displays the modal if the state's property is value is true
      clickCount: 0, // this state property is linked to it's child's state "<Tile/>" property "clicks" to keep track of the clicks
      moveCount: 0, // this state shows how many moves you have left
      modalLevel: true,
      startGame: false,
    };
  }

  beginGame = (start) => {
    this.setState({ startGame: start });
  };

  levelModal = (hide) => {
    this.setState({ modalLevel: hide });
  };

  showModal = () => {
    this.setState({ modalShow: true }); // function that shows the modal
  };

  hideModal = () => {
    this.setState({ modalShow: false }); // function that hides the modal
  };

  getScore = (score) => {
    this.setState({ myScore: score }); // update the state with the value recieved from it child
  };

  playAgain = () => {
    window.location.reload(); // this function just refeshes/reloads the page
  };

  getClicks = (clicks) => {
    this.setState({ clickCount: clicks }); // update the state with the value recieved from it child
  };

  setMoveCount = (level) => {
    this.setState({ moveCount: level }); // when you select the level then the value of that level gets set as the value of this state
    console.log(this.state.moveCount);
  };

  updateMoveCount = (click) => {
    this.setState({ moveCount: this.state.moveCount - click });
  };

  //click event attached to each tile

  render() {
    return (
      <React.Fragment>
        <Title />
        <Level
          hideLevel={this.levelModal}
          hideLevels={this.state.modalLevel}
          setMoves={this.setMoveCount}
          setGame={this.beginGame}
        />
        <Options
          restart={this.playAgain}
          showRules={this.showModal}
          myMoves={this.state.moveCount}
        />
        <Rules show={this.state.modalShow} onHide={this.hideModal} />
        <Score
          letsStart={this.state.startGame}
          myScore={this.state.myScore}
          movesLeft={this.state.moveCount}
        />
        {!this.state.startGame ? null : this.state.myScore === 6 &&
          this.state.moveCount >= 0 ? (
          <button onClick={this.playAgain}>Play again</button>
        ) : this.state.myScore < 6 && this.state.moveCount <= 0 ? (
          <button onClick={this.playAgain}>Play again</button>
        ) : (
          ""
        )}
        <div id="theContainer" className="container">
          <Tile
            theScore={this.state.myScore}
            startGame={this.state.startGame}
            myScore={this.getScore}
            myClicks={this.getClicks}
            updateMyMoves={this.updateMoveCount}
            myMoves={this.state.moveCount}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Board;
