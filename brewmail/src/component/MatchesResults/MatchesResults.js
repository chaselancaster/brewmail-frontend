import React, { Component } from "react";
import TradeModal from "../TradeModal/TradeModal";

class MatchesResults extends Component {
  state = {
    user1Beer: [],
    user2Beer: [],
    user1Address: "",
    user2Address: "",
    createdBy: {},
    tradingPartner: {},
    isComplete: false,
    message: "",
    tradeModal: false
  };

  initiateTrade = partner => {
    console.log(partner, "<-- initial trade partner");
    this.toggleTradeModal();
    let currentUser = this.props.currentUser;
    console.log(currentUser, "<-- currentUser from props");
    this.setState({
      createdBy: currentUser,
      tradingPartner: partner
    });
  };

  toggleTradeModal = () => {
    this.setState({
      tradeModal: !this.state.tradeModal
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

  // Adds the user beers that they are offering to trade in the user1Beer array
  onCheckCurrentUser = beer => {
    console.log(beer, "<-- selected beer in Trade Modal");
  };

  onCheckTradingPartner = beer => {
    console.log(beer, "<-- selected trading partner beer in Trade Modal");
  };

  render() {
    return (
      <div>
        <div>
          <TradeModal
            createdByBeer={this.state.createdBy.cellarBeer}
            tradingPartnerBeer={this.state.tradingPartner.cellarBeer}
            show={this.state.tradeModal}
            onCheckCurrentUser={this.onCheckCurrentUser}
            onCheckTradingPartner={this.onCheckTradingPartner}
          />
        </div>
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
                  {/* <span># of Beer For Trade: {user.ftBeer.length}</span> */}
                  <br />
                  <span># of Beer ISO: {user.isoBeer.length}</span>
                  <br />
                  <button onClick={() => this.initiateTrade(user)}>
                    Initiate Trade
                  </button>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MatchesResults;
