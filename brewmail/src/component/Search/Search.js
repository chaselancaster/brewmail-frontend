import React, { Component } from "react";

import CellarModal from "../CellarModal/CellarModal";
import ForTradeModal from "../ForTradeModal/ForTradeModal";
import ISOModal from "../ISOModal/ISOModal";

import "./Search.css";

class Search extends Component {
  state = {
    cellarModal: false,
    forTradeModal: false,
    isoModal: false,
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
  toggleCellarModal = () => {
    this.setState({
      cellarModal: !this.state.cellarModal
    });
  };

  toggleForTradeModal = () => {
    this.setState({
      forTradeModal: !this.state.forTradeModal,
      isForTrade: !this.state.isForTrade
    });
  };

  toggleISOModal = () => {
    this.setState({
      isoModal: !this.state.isoModal
    });
  };

  // Modal to add beer to cellar
  showCellarModal = beer => {
    console.log(beer);
    this.toggleCellarModal();
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
          show={this.state.cellarModal}
          onClose={this.toggleCellarModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerToCellar}
        />
        <ForTradeModal
          show={this.state.forTradeModal}
          onClose={this.toggleForTradeModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerForTrade}
        />
        <ISOModal
          show={this.state.isoModal}
          onClose={this.toggleISOModal}
          changeHandler={this.changeHandler}
          handleInputChange={this.handleInputChange}
          addBeer={this.addBeerISO}
        />
        <div className="searchContainer">
          <h1 className="searchH1">Search Results</h1>
          {this.props.searchResults.map((beer, i) => {
            return (
              <div className="cardContainer">
                <li className="card  blue-grey darken-1 large cardSize" key={i}>
                  <div className="beerLabel">
                    <img src={beer.beer.beer_label} />
                  </div>
                  <br />
                  <div className="beerInfo">
                    <span className="card-content white-text">
                      Name: {beer.beer.beer_name}
                    </span>
                    <br />
                    <span className="card-content white-text">
                      ABV: {beer.beer.beer_abv}%
                    </span>
                    <br />
                    <span className="card-content white-text">
                      Style: {beer.beer.beer_style}
                    </span>
                    <br />
                    <span className="card-content white-text">
                      Brewed by: {beer.brewery.brewery_name}
                    </span>
                  </div>

                  <br />
                  <div className="beerBtns">
                    {" "}
                    <button
                      className="waves-effect waves-light btn yellow darken-2"
                      onClick={() => this.showCellarModal(beer)}
                    >
                      + Cellar
                    </button>
                    <button
                      className="waves-effect waves-light btn yellow darken-2"
                      onClick={() => this.showForTradeModal(beer)}
                    >
                      + FT
                    </button>
                    <button
                      className="waves-effect waves-light btn yellow darken-2"
                      onClick={() => this.showISOModal(beer)}
                    >
                      + ISO
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
