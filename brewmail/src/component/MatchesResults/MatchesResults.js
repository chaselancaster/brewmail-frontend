import React, { Component } from "react";
import TradeModal from "../TradeModal/TradeModal";

import "./MatchesResults.css";

class MatchesResults extends Component {
  state = {
    creatorBeer: [],
    partnerBeer: [],
    creatorAddress: "",
    partnerAddress: "",
    createdBy: {},
    tradingPartner: {},
    isComplete: false,
    message: "",
    id: "",
    tradeModal: false
  };

  // Create Trade
  // I will need to pass this state down to the backend
  // I will also need to pass the currentUser._id and the tradingPartner._id
  // I will need to find these users in the backend and push the trade into the proper array
  // I will then need to send a message back here to let the user know that the trade was created
  createTrade = async e => {
    try {
      e.preventDefault();
      const trade = await fetch(
        `http://localhost:3001/trade/create/${this.state.createdBy._id}/${
          this.state.tradingPartner._id
        }`,
        {
          method: "POST",
          // credentials: "include",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const parsedResponse = await trade.json();
      console.log(parsedResponse, "<-- parsedResponse in addBeer function");
      if (parsedResponse.success) {
        // calling function that is going to set user again with updated beer
        this.props.doSetCurrentUser(parsedResponse.currentUser);
        this.setState({
          message: parsedResponse.message,
          id: parsedResponse.id
        });
      }
    } catch (err) {
      console.log(err);
    }
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
      tradeModal: !this.state.tradeModal,
      creatorBeer: [],
      partnerBeer: [],
      createdBy: {},
      tradingPartner: {}
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

  // Adds the user beers that they are offering to trade in the creatorBeer array
  onCheckCurrentUser = beer => {
    console.log(beer, "<-- selected beer in Trade Modal");
    let creatorBeer = this.state.creatorBeer;
    creatorBeer.push(beer);
    console.log(
      this.state.creatorBeer,
      "<-- this.state.creatorBeer after beer has been pushed"
    );
    this.setState({
      creatorBeer: creatorBeer
    });
  };

  onCheckTradingPartner = beer => {
    console.log(beer, "<-- selected trading partner beer in Trade Modal");
    let partnerBeer = this.state.partnerBeer;
    partnerBeer.push(beer);
    console.log(
      this.state.partnerBeer,
      "<-- this.state.partnerBeer after beer has been pushed"
    );
    this.setState({
      partnerBeer: partnerBeer
    });
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
            closeTradeModal={this.toggleTradeModal}
            createTrade={this.createTrade}
            message={this.state.message}
          />
        </div>
        <div>
          <div className="matchesResultsContainer">
            {this.props.users.map((user, i) => {
              return (
                <li key={i} className="card blue-grey darken-1 small cardSize">
                  <div className="matchInfo">
                    <span className="card-content white-text">
                      User: {user.username}
                    </span>
                    <br />
                    <span className="card-content white-text">
                      Cellar Count: {user.cellarBeer.length}
                    </span>
                    <br />
                    {/* <span># of Beer For Trade: {user.ftBeer.length}</span> */}

                    <span className="card-content white-text">
                      # of Beer ISO: {user.isoBeer.length}
                    </span>
                    <br />
                  </div>
                  <div className="btnContainer">
                    <button
                      className="waves-effect waves-light btn yellow darken-2"
                      onClick={() => this.initiateTrade(user)}
                    >
                      Initiate Trade
                    </button>
                  </div>
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
