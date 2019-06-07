import React, { Component } from "react";

class Cellar extends Component {
  render() {
    return (
      <div>
        <h1>Cellar List </h1>
        <div>
          {this.props.userCellar.map((beer, i) => {
            return (
              <li key={i}>
                <span>
                  <img src={beer.label} />
                </span>
                <br />
                <span>Name: {beer.beerName}</span>
                <br />
                <span>ABV: {beer.beerABV}</span>
                <br />
                <span>Style: {beer.beerStyle}</span>
                <br />
                <span>Brewed by: {beer.breweryName}</span>
                <br />
                <button>Remove Beer</button>
                <button>Edit Beer</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cellar;
