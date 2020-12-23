import React from "react";
/* this component displays the title/name of the app/game. Each letter of the title is in a class of either "first-letter" or "second-letter".
 These classes have animation styles added to them allowing them to animate continuously*/
function Title() {
  return (
    <h1 className="title">
      <span className="first-letter">C</span>
      <span className="second-letter">a</span>
      <span className="first-letter">n</span>{" "}
      <span className="second-letter">y</span>
      <span className="first-letter">o</span>
      <span className="second-letter">u</span>{" "}
      <span className="first-letter">m</span>
      <span className="second-letter">a</span>
      <span className="first-letter">t</span>
      <span className="second-letter">c</span>
      <span className="first-letter">h</span>{" "}
      <span className="second-letter">t</span>
      <span className="first-letter">h</span>
      <span className="second-letter">e</span>{" "}
      <span className="first-letter">t</span>
      <span className="second-letter">i</span>
      <span className="first-letter">l</span>
      <span className="second-letter">e</span>
      <span className="first-letter">s</span>
      <span className="second-letter">?</span>
    </h1>
  );
}

export default Title;
