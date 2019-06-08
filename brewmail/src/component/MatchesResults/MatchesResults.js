import React, { Component } from "react";

class MatchesResults extends Component {
  state = {
    user1Beer: [],
    user2Beer: [],
    user1Address: "",
    user2Address: "",
    createdBy: {},
    tradingPartner: {},
    isComplete: false
  };
  render() {
    return (
      <div>
        <h1>This is the matches results component</h1>
        <div>
          {this.props.users.map((user, i) => {
            return (
              <li key={i}>
                <br />
                <span>User: {user.username}</span>
                <br />
                <span>Cellar Count: {user.cellarBeer.length}</span>
                <br />
                <span># of Beer For Trade: {user.ftBeer.length}</span>
                <br />
                <span># of Beer ISO: {user.isoBeer.length}</span>
                <br />
                <button>Trade</button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MatchesResults;
