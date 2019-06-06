import React, { Component } from "react";

class CellarModal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h2>Cellar Modal</h2>
        <div>
          <button>Close</button>
        </div>
      </div>
    );
  }
}

export default CellarModal;
