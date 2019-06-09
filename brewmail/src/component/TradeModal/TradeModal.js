import React, { Component } from "react";

// grey background
const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: 50
};

const modalStyle = {
  backgroundColor: "white",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

class TradeModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <div style={footerStyle}>
            <div>
              <h2>Select beers from your list to trade!</h2>
              {this.props.createdByBeer.map((beer, i) => {
                return (
                  <li key={i}>
                    <form>
                      <span>Beer Name: {beer.beerName}</span>
                      <input
                        type="checkbox"
                        onChange={() => this.props.onCheckCurrentUser(beer)}
                      />
                    </form>
                  </li>
                );
              })}
              <h2>Select you trade partner's beer that you want!</h2>
              {this.props.tradingPartnerBeer.map((beer, i) => {
                return (
                  <li key={i}>
                    <form>
                      <span>Beer Name: {beer.beerName}</span>
                      <input type="checkbox" />
                    </form>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TradeModal;
