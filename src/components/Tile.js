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
    this.state = { points: 0 };
    this.prevTile = [];
    this.matches = [];
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
    this.tileArray.sort(() => 0.5 - Math.random());
  }

  checkForMatch = (event) => {
    if (this.prevTile[0].src === event.target.src) {
      this.prevTile[0].src = Blank;

      event.target.src = Blank;
      this.matches.push(this.prevTile[0]);
      this.matches.push(event.target);

      this.setState({ points: this.state.points + 1 });
      this.props.myScore(this.state.points);
      this.prevTile = [];
      return;
    } else {
      this.prevTile[0].src = Background;

      event.target.src = Background;
      this.prevTile = [];
    }
  };

  handleClick = (event) => {
    if (this.matches.includes(event.target)) {
      return;
    } else {
      this.flipTile(event);
    }
  };

  flipTile = (event) => {
    if (this.prevTile.length === 0) {
      this.prevTile.push(event.target);
      event.target.src = this.tileArray[event.target.id].img;
    } else {
      if (this.prevTile[0].id === event.target.id) {
        event.target.src = Background;
        this.prevTile = [];
      } else {
        event.target.src = this.tileArray[event.target.id].img;
        setTimeout(() => this.checkForMatch(event), 400);
      }
    }
  };

  render() {
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
