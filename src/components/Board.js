import React, { Component } from "react";
import Tile from "./Tile";
import Score from "./Score";
import Title from "./Title";
import Options from "./Options";
import Rules from "./Rules";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: 0,
      modalShow: false,
    };
  }

  showModal = () => {
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ modalShow: false });
  };

  getScore = (score) => {
    this.setState({ myScore: score });
  };

  playAgain = () => {
    window.location.reload();
  };

  //click event attached to each tile

  render() {
    return (
      <React.Fragment>
        <Title />
        <Options restart={this.playAgain} showRules={this.showModal} />
        <Rules show={this.state.modalShow} onHide={this.hideModal} />
        <Score myScore={this.state.myScore} />
        {this.state.myScore === 6 ? (
          <button onClick={this.playAgain}>Play again</button>
        ) : null}
        <div className="container">
          <Tile myScore={this.getScore} />
        </div>
      </React.Fragment>
    );
  }
}
export default Board;
