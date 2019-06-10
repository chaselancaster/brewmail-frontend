import React, { Component } from "react";

import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <h1 className="landingH1">Welcome To BrewMail</h1>
        <h3 className="landingH3">Search below for a beer or brewery!</h3>
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
        <h4 className="landingH4">
          We help you find cool beer and the people trading it! Join today!
        </h4>
        <div className="btnContainer">
          {this.props.logged ? (
            <p>Welcome back </p>
          ) : (
            <a href="/register">
              <button className="waves-effect waves-light btn black registerBtn">
                Register
              </button>
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Landing;
