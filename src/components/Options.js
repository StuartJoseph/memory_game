import React, { Component } from "react";
/*this component displays the buttons that will allow us to see the rules of the game and to restart the game.
 It uses onclick functions passed down from the parent component*/
class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="options">
        <div>
          <button className="option-btn" onClick={this.props.showRules}>
            rules
          </button>
        </div>
        <div className="level-container ">
          <p>
            You have <span>{this.props.myMoves}</span> moves left
          </p>
        </div>
        <div>
          <button className="option-btn" onClick={this.props.restart}>
            restart
          </button>
        </div>
      </div>
    );
  }
}

export default Options;

/*this component displays the buttons that will allow us to see the rules of the game and to restart the game.
 It uses onclick functions passed down from the parent component*/
