import React, { Component } from "react";

class CellarModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h2>Cellar Modal</h2>
        <div>
          <button
            onClick={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default CellarModal;
