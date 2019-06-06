import React, { Component } from "react";

class CellarModal extends Component {
  render() {
    if (!this.props.modal) {
      return null;
    }
    return <div>Cellar Modal!</div>;
  }
}

export default CellarModal;
