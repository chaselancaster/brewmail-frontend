import React, { Component } from "react";

import MatchesResults from "../MatchesResults/MatchesResults";

import "./Matches.css";
class Matches extends Component {
  state = {
    search: "",
    users: []
  };

  // Find users trading call
  findUsersTradingBeer = async (e, data) => {
    try {
      e.preventDefault();
      const beerCall = await fetch(
        `http://localhost:3001/beer/matches/${this.state.search}`,
        {
          method: "GET",
          // credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(beerCall, "<-- beerCall in searchBeer function");
      const response = await beerCall.json();
      console.log(response.data, "<-- response in searchBeer function");
      this.setState({
        users: response.allUsers,
        search: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props.userISO, "<-- this.props.userISO");
    console.log(this.props.usersTradingBeer, "<-- this.props.usersTradingBeer");
    return (
      <div className="matchesContainer">
        <h1 className="matchesH1">
          Search for a beer you want, we will find who has it!
        </h1>
        <form onSubmit={this.findUsersTradingBeer}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.changeHandler}
            placeholder="Search for a beer you want!"
          />
        </form>
        <MatchesResults
          users={this.state.users}
          currentUser={this.props.currentUser}
          doSetCurrentUser={this.props.doSetCurrentUser}
        />
      </div>
    );
  }
}

export default Matches;
