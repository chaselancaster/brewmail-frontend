import React, { Component } from "react";

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
                <span>ABV: {beer.beerABV}%</span>
                <br />
                <span>Style: {beer.beerStyle}</span>
                <br />
                <span>Brewed by: {beer.breweryName}</span>
                <br />
                <button onClick={() => this.deleteBeer(i)}>Remove Beer</button>
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
