import React, { Component } from "react";

class Trades extends Component {
  render() {
    return (
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
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Trades;
