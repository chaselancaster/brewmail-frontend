import React, { Component } from "react";

import { Redirect } from "react-router-dom";

class Trades extends Component {
  state = {
    selectedTrade: {},
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/trade/show" />;
    }
  };

  viewTrade = trade => {
    console.log(trade, "<-- selected trade");
    this.props.setSelectedTrade(trade);
    // this.setRedirect();
    // this.renderRedirect();
  };

  render() {
    return this.state.redirect ? (
      <Redirect to={"/trade/show"} />
    ) : (
      <div>
        <h1>Here are your trades</h1>
        <div>
          {this.props.userTrades.map((trade, i) => {
            return (
              <li key={i}>
                {trade.createdBy._id === this.props.currentUserId ? (
                  <span>Trade with: {trade.tradingPartner.username}</span>
                ) : (
                  <span>Trade with: {trade.createdBy.username}</span>
                )}
                <button onClick={() => this.viewTrade(trade)}>
                  View Trade
                </button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Trades;
