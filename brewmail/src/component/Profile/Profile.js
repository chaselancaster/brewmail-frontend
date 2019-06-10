import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import "./Profile.css";

class Profile extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateUser = async e => {
    try {
      e.preventDefault();
      const userCall = await fetch(
        `http://localhost:3001/users/update/${this.props.currentUser._id}`,
        {
          method: "PUT",
          // credentials: "include",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(userCall, "<-- userCall in updateUser function");
      const response = await userCall.json();
      console.log(response, "<-- response in updateUser function");
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="profileContainer">
        <div className="profileHeader">
          <h1 className="profileH1">Profile</h1>
          <h4 className="profileH4">Hello {this.props.currentUser.username}</h4>
        </div>

        <div className="isoBeerContainer">
          <h3>Beers you are searching for</h3>
          {this.props.currentUser.isoBeer.map((beer, i) => {
            return (
              <li className="card  blue-grey darken-1 medium cardSize" key={i}>
                <div className="beerLabel">
                  <img src={beer.label} />
                </div>
                <br />
                <div className="beerInfo">
                  <span className="card-content white-text">
                    Name: {beer.beerName}
                  </span>
                  <br />
                  <span className="card-content white-text">
                    ABV: {beer.beerABV}%
                  </span>
                  <br />
                  <span className="card-content white-text">
                    Style: {beer.beerStyle}
                  </span>
                  <br />
                  <span className="card-content white-text">
                    Brewed by: {beer.breweryName}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
        <div className="editAccountContainer">
          <h3>Edit Account</h3>
          <div>
            <form onSubmit={this.updateUser}>
              <h3>Username: </h3>
              <input
                type="text"
                name="username"
                onChange={this.changeHandler}
                // value={this.props.currentUser.username}
              />
              <h3>Password: </h3>
              <input
                type="password"
                name="password"
                onChange={this.changeHandler}
                // value={this.props.currentUser.password}
              />
              <br />
              <h3>Email: </h3>
              <input
                type="text"
                name="email"
                onChange={this.changeHandler}
                // value={this.props.currentUser.email}
              />
              <br />
              <div className="btnContainer">
                <button
                  className="waves-effect waves-light btn yellow darken-2"
                  type="submit"
                >
                  Update Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
