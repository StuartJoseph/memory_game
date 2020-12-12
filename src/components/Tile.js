import React, { Component } from "react";
import Background from "./img/background.png";
import Pizza from "./img/pizza.jpg";
import Hamburger from "./img/burger.jpg";
import Chocolate from "./img/chocolate.png";
import Fries from "./img/fries.png";
import Hotdog from "./img/hotdog.jpg";
import Milkshake from "./img/milkshake.png";
import Blank from "./img/blank.png";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = { points: 0 }; // your score is 0 when you begin game
    this.prevTile = []; // your first choice or tile is stored here
    this.matches = []; // all tiles that were a match are stored here
    // array of objects that has all the tile information
    this.tileArray = [
      { id: 0, img: Pizza },
      { id: 1, img: Pizza },
      { id: 2, img: Hamburger },
      { id: 3, img: Hamburger },
      { id: 4, img: Chocolate },
      { id: 5, img: Chocolate },
      { id: 6, img: Fries },
      { id: 7, img: Fries },
      { id: 8, img: Hotdog },
      { id: 9, img: Hotdog },
      { id: 10, img: Milkshake },
      { id: 11, img: Milkshake },
    ];
    this.tileArray.sort(() => 0.5 - Math.random()); // here I mix up the order of the array
  }
  /*this function checks for matches only when you have already chosen
a tile before and if the tile is not the same as your first choice */
  checkForMatch = (event) => {
    if (this.prevTile[0].src === event.target.src) {
      // check if both your choices contain the same image
      // if both your choices contain the same image then make their img blank
      this.prevTile[0].src = Blank;
      event.target.src = Blank;
      // store both your choices into the matches array
      this.matches.push(this.prevTile[0]);
      this.matches.push(event.target);
      // increase score by 1
      this.setState({ points: this.state.points + 1 });
      // pass value of state to parent via props
      this.props.myScore(this.state.points);
      //empty array
      this.prevTile = [];
      return;
    } else {
      // if both choices dont have the same image then change their image to background
      this.prevTile[0].src = Background;
      event.target.src = Background;
      // empty array
      this.prevTile = [];
    }
  };
  // click event that starts the whole verification process of checking the tiles
  handleClick = (event) => {
    if (this.matches.includes(event.target)) {
      // checks if the tile you are clicking is already a match
      return;
    } else {
      this.flipTile(event); // if the tile you clicked is not a match yet then run this function
    }
  };

  flipTile = (event) => {
    if (this.prevTile.length === 0) {
      // checks if this is your first choice
      this.prevTile.push(event.target); // store first choice into array
      event.target.src = this.tileArray[event.target.id].img; // shows the image liked to tile
    } else {
      if (this.prevTile[0].id === event.target.id) {
        // checks if your second choice is the same tile
        event.target.src = Background; // change tile image to background
        this.prevTile = []; // empty array
      } else {
        event.target.src = this.tileArray[event.target.id].img; // show image of second choice
        setTimeout(() => this.checkForMatch(event), 400); // then run this function after 400ms so user can see image before it checks for match
      }
    }
  };

  render() {
    // map through array to produce a tile for each object in the array
    return this.tileArray.map((tile) => {
      return (
        <div key={tile.id}>
          <img
            onClick={this.handleClick}
            id={tile.id}
            src={Background}
            alt=""
          />
        </div>
      );
    });
  }
}
export default Tile;
