import React, { Component } from "react";

class Search extends Component {
  render() {
    // <h1>This is the search results</h1>;
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
          <button>+ Cellar</button>
        </li>
      );
    });
  }
}

export default Search;
