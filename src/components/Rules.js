import React from "react";
import { Modal, Button } from "react-bootstrap";
/* so this component uses a modal to display the rules of the game only when the player clicks the rules button
that belongs to another component that will trigger a function in the parent component which will change the state 
of a property and in return change the display of the game that allows the player to see the rules. The modal also has a button that
hides the modal, which is a onclick function from that parent that changes a state's property that chnages the display so that the modal is hidden */

function Rules(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h2>How to play</h2>
        <p>
          Click on the tiles to reveal its picture underneath, then see if you
          can click on another tile that has the same picture underneath for a
          match. Match all the tiles and win!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Rules;
