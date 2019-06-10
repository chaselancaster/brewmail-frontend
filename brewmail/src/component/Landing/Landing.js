import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Brewmail</h1>
        <form onSubmit={this.props.searchBeer}>
          <div className="input-field">
            {" "}
            <input
              type="text"
              name="search"
              value={this.props.search}
              onChange={this.props.changeHandler}
              placeholder="Search for a beer or brewery"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Landing;
