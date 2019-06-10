import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h2>Hello {this.props.currentUser.username}</h2>
        <div>
          <h3>Beers you are searching for</h3>
          {this.props.currentUser.isoBeer.map((beer, i) => {
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
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
