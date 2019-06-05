import React, { Component } from "react";

class Search extends Component {
  render() {
    // <h1>This is the search results</h1>;
    return this.props.searchResults.map((beer, i) => {
      console.log(this.props.searchResults, "<-- this.props.searchResults");
      return (
        <li key={i}>
          <span>{beer.beer.beer_name}</span>
          <br />
          <span>
            <img src={beer.beer.beer_label} />
          </span>
          <br />
        </li>
      );
    });
  }
}

export default Search;
