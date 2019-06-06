import React, { Component } from "react";

import CellarModal from "../CellarModal/CellarModal";

class Search extends Component {
  state = {
    modal: false
  };

  showModal = () => {
    this.setState({
      modal: true
    });
  };

  render() {
    return (
      <div>
        <CellarModal show={this.state.modal} />
        <div>
          {this.props.searchResults.map((beer, i) => {
            return (
              <li key={i}>
                <span>
                  <img src={beer.beer.beer_label} />
                </span>
                <br />
                <span>Name: {beer.beer.beer_name}</span>
                <br />
                <span>ABV: {beer.beer.beer_abv}</span>
                <br />
                <span>Style: {beer.beer.beer_style}</span>
                <br />
                <span>Brewed by: {beer.brewery.brewery_name}</span>
                <br />
                <button onClick={this.showModal}>+ Cellar</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
