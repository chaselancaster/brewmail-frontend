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
                <span>Trade with: {trade.tradingPartner.username}</span>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Trades;
