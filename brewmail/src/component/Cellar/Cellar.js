import React, { Component } from "react";

class Cellar extends Component {
  rrender() {
    return (
      <div>
        <h1>Cellar List </h1>
        <div>
          {this.props.userCellar.map((beer, i) => {
            return (
              <li key={i}>
                <span>
                  <img src={beer.beer_label} />
                </span>
                <br />
                <span>Name: {beer.beer_name}</span>
                <br />
                <span>ABV: {beer.beer_abv}</span>
                <br />
                <span>Style: {beer.beer_style}</span>
                <br />
                <span>Brewed by: {beer.brewery_name}</span>
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
