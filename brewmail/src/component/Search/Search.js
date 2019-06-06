import React, { Component } from "react";

import CellarModal from "../CellarModal/CellarModal";

class Search extends Component {
  showModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    return this.props.searchResults.map((beer, i) => {
      console.log(this.props.searchResults, "<-- this.props.searchResults");
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
    });
  }
}

export default Search;
