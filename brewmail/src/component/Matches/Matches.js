import React, { Component } from "react";

class Matches extends Component {
  state = {
    search: "",
    users: []
  };

  // Find users trading call
  findUsersTradingBeer = async (e, data) => {
    try {
      e.preventDefault();
      const matchCall = await fetch(
        `http://localhost:3001/beer/matches/${this.state.currentUser._id}`,
        {
          method: "GET",
          // credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(matchCall, "<-- matchCall in findMatches function");
      const response = await matchCall.json();
      console.log(response.data, "<-- response in findMatches function");
      this.setState({
        users: response.allUsers
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.props.userISO, "<-- this.props.userISO");
    console.log(this.props.usersTradingBeer, "<-- this.props.usersTradingBeer");
    return (
      <div>
        <h1>This is the matches page</h1>
        <form>
          <input
            type="text"
            name="search"
            vale={this.state.search}
            placeholder="Search for a beer you want!"
          />
        </form>
      </div>
    );
  }
}

export default Matches;
