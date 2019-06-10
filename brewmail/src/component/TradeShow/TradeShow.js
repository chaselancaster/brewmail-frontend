import React, { Component } from "react";

class TradeShow extends Component {
  render() {
    return (
      <div>
        <h1>This is the trade show page</h1>
        <div>
          {this.props.selectedTrade.map((trade, i) => {
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

export default TradeShow;
