import React, { Component } from "react";

import { Modal } from "react-bootstrap";

class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEasy = (event) => {
    this.props.setMoves(event.target.value);
    this.props.hideLevel(false);
    this.props.setGame(true);
  };
  handleMedium = (event) => {
    this.props.setMoves(event.target.value);
    this.props.hideLevel(false);
    this.props.setGame(true);
  };
  handleHard = (event) => {
    this.props.setMoves(event.target.value);
    this.props.hideLevel(false);
    this.props.setGame(true);
  };

  render() {
    return (
      <Modal
        show={this.props.hideLevels}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Choose your difficulty</h2>
          <div className="levels">
            <div>
              <button
                id="easy"
                onClick={this.handleEasy}
                className="option-btn"
                value="20"
              >
                easy
              </button>
            </div>
            <div>
              <button
                id="medium"
                onClick={this.handleMedium}
                className="option-btn"
                value="18"
              >
                medium
              </button>
            </div>
            <div>
              <button
                id="hard"
                onClick={this.handleHard}
                className="option-btn"
                value="16"
              >
                hard
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default Level;
