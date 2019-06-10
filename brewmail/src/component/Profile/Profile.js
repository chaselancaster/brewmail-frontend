import React, { Component } from "react";

import { Redirect } from "react-router-dom";

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
      <div>
        <h1>Profile</h1>
        <h2>Hello {this.props.currentUser.username}</h2>
        <div>
          <h3>Beers you are searching for</h3>
          {this.props.currentUser.isoBeer.map((beer, i) => {
            return (
              <li key={i}>
                <span>
                  <img src={beer.label} />
                </span>
                <br />
                <span>Name: {beer.beerName}</span>
                <br />
                <span>ABV: {beer.beerABV}%</span>
                <br />
                <span>Style: {beer.beerStyle}</span>
                <br />
                <span>Brewed by: {beer.breweryName}</span>
              </li>
            );
          })}
        </div>
        <div>
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
              <button type="submit">Update Account</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
