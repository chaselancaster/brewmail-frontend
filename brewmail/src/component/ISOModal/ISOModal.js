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

class ISOModal extends Component {
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
            <form onSubmit={this.props.addBeer}>
              Quantity:{" "}
              <input
                type="number"
                name="quantity"
                onChange={this.props.handleInputChange}
              />
              <br />
              <button type="submit">Add To ISO</button>
            </form>
            <button
              onClick={e => {
                this.onClose(e);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ISOModal;
