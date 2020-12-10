import React from "react";
import { Modal, Button } from "react-bootstrap";
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
