import React, { Component } from "react";

class Matches extends Component {
  render() {
    console.log(this.props.userISO, "<-- this.props.userISO");
    console.log(this.props.usersTradingBeer, "<-- this.props.usersTradingBeer");
    return (
      <div>
        <h1>This is the matches page</h1>
      </div>
    );
  }
}

export default Matches;
