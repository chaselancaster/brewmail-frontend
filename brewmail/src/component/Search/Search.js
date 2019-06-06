import React, { Component } from "react";

import CellarModal from "../CellarModal/CellarModal";

class Search extends Component {
  state = {
    modal: false,
    beerName: "",
    beerABV: "",
    beerStyle: "",
    breweryName: "",
    label: "",
    quantity: 0,
    year: 0,
    size: "",
    isForTrade: false
  };

  showModal = beer => {
    console.log(beer);
    this.setState({
      ...this.state,
      modal: !this.state.modal,
      beerName: beer.beer.beer_name,
      beerABV: beer.beer.beer_abv,
      beerStyle: beer.beer.beer_style,
      breweryName: beer.brewery.brewery_name,
      label: beer.beer.beer_label
    });

    // this.state.modal
    //   ? this.setState({
    //       beerName: beer.beer.beer_name,
    //       beerABV: beer.beer.beer_abv,
    //       beerStyle: beer.beer.beer_style,
    //       breweryName: beer.brewery.brewery_name,
    //       label: beer.beer.beer_label
    //     })
    //   : this.setState({
    //       beerName: "",
    //       beerABV: "",
    //       beerStyle: "",
    //       breweryName: "",
    //       label: ""
    //     });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addBeer = async e => {
    e.preventDefault();
    const beer = await fetch("http://localhost:3001/beer/add", {
      method: "POST",
      // credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parsedResponse = await beer.json();
    console.log(parsedResponse, "<-- parsedResponse in addBeer function");
    if (parsedResponse.success) {
      this.props.doSetCurrentUser(parsedResponse.user);
    }
  };

  render() {
    return (
      <div>
        <CellarModal
          show={this.state.modal}
          onClose={this.showModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeer}
        />
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
                <button onClick={() => this.showModal(beer)}>+ Cellar</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
