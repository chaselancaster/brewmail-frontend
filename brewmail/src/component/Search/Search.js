import React, { Component } from "react";

import CellarModal from "../CellarModal/CellarModal";
import ForTradeModal from "../ForTradeModal/ForTradeModal";
import ISOModal from "../ISOModal/ISOModal";

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
  // Toggle for closing when Cellar Modal is open
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleForTradeModal = () => {
    this.setState({
      modal: !this.state.modal,
      isForTrade: !this.state.isForTrade
    });
  };

  toggleISOModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  // Modal to add beer to cellar
  showModal = beer => {
    console.log(beer);
    this.toggleModal();
    this.setState({
      beerName: beer.beer.beer_name,
      beerABV: beer.beer.beer_abv,
      beerStyle: beer.beer.beer_style,
      breweryName: beer.brewery.brewery_name,
      label: beer.beer.beer_label
    });
  };

  // Modal to add beer to FT
  showForTradeModal = beer => {
    console.log(beer);
    this.toggleForTradeModal();
    this.setState({
      beerName: beer.beer.beer_name,
      beerABV: beer.beer.beer_abv,
      beerStyle: beer.beer.beer_style,
      breweryName: beer.brewery.brewery_name,
      label: beer.beer.beer_label,
      isForTrade: true
    });
  };

  showISOModal = beer => {
    console.log(beer);
    this.toggleISOModal();
    this.setState({
      beerName: beer.beer.beer_name,
      beerABV: beer.beer.beer_abv,
      beerStyle: beer.beer.beer_style,
      breweryName: beer.brewery.brewery_name,
      label: beer.beer.beer_label
    });
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

  // Adding beer into user's cellar
  addBeerToCellar = async e => {
    try {
      e.preventDefault();
      this.state.currentUser = this.props.currentUser;
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
        // calling function that is going to set user again with updated beer
        this.props.doSetCurrentUser(parsedResponse.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Adding beer into user's for trade
  addBeerForTrade = async e => {
    try {
      e.preventDefault();
      this.state.currentUser = this.props.currentUser;
      const beer = await fetch("http://localhost:3001/beer/add/fortrade", {
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
    } catch (err) {
      console.log(err);
    }
  };

  // Adding beers into users ISO list
  addBeerISO = async e => {
    try {
      e.preventDefault();
      this.state.currentUser = this.props.currentUser;
      const beer = await fetch("http://localhost:3001/beer/add/iso", {
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
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <CellarModal
          show={this.state.modal}
          onClose={this.toggleModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerToCellar}
        />
        <ForTradeModal
          show={this.state.modal}
          onClose={this.toggleForTradeModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerForTrade}
        />
        <ISOModal
          show={this.state.modal}
          onClose={this.toggleISOModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerISO}
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
                <button onClick={() => this.showForTradeModal(beer)}>
                  + FT
                </button>
                <button onClick={() => this.showISOModal(beer)}>+ ISO</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
