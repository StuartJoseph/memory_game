import React, { Component } from "react";
import Tile from "./Tile";
import Score from "./Score";
import Title from "./Title";
import Options from "./Options";
import Rules from "./Rules";
// this is the parent component that holds all of the other components
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myScore: 0, // this state property is linked to it's child's state "<Tile/>" property "points" to keep track of the points
      modalShow: false, // this state property is linked to its child's component "<Rules/>" attribute "show" that displays the modal if the state's property is value is true
    };
  }

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
