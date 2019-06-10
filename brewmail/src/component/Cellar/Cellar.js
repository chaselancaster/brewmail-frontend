import React, { Component } from "react";

import "./Cellar.css";
class Cellar extends Component {
  deleteBeer = async i => {
    console.log("deleteBeer function hit");
    const deletedBeer = await fetch(
      `http://localhost:3001/beer/delete/${i}/${this.props.currentUser._id}`,
      {
        method: "DELETE"
      }
    );
    const parsedResponse = await deletedBeer.json();
    console.log(parsedResponse, "parsedResponse in deleteGame");
    this.props.doSetCurrentUser(parsedResponse.user);
  };

  render() {
    if (!this.props.currentUser) {
      return <h1>Please Login to see Cellar!</h1>;
    }
    return (
      <div className="cellarContainer">
        <h1 className="cellarH1">Cellar List </h1>
        <div>
          {this.props.userCellar.map((beer, i) => {
            return (
              <li key={i} className="card blue-grey darken-1 large cardSize">
                <div className="beerLabel">
                  <img src={beer.label} />
                </div>
                <br />
                <div className="beerInfo">
                  <span className="card-content white-text">
                    Name: {beer.beerName}
                  </span>
                  <br />
                  <span className="card-content white-text">
                    ABV: {beer.beerABV}%
                  </span>
                  <br />
                  <span className="card-content white-text">
                    Style: {beer.beerStyle}
                  </span>
                  <br />
                  <span className="card-content white-text">
                    Brewed by: {beer.breweryName}
                  </span>
                </div>
                <br />
                <div className="btnContainer">
                  <button
                    className="waves-effect waves-light btn yellow darken-2"
                    onClick={() => this.deleteBeer(i)}
                  >
                    Remove Beer
                  </button>
                  {/* <button>Edit Beer</button> */}
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cellar;
