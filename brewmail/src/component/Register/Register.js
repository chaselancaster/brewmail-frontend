import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Register.css";
class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    location: "",
    logged: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerSubmit = e => {
    e.preventDefault();
    this.props.handleRegister(this.state);
  };

  handleRegister = async e => {
    try {
      e.preventDefault();
      console.log("handleRegister function hit");
      const registerCall = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(this.state),
        // credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("before response");
      const response = await registerCall.json();
      console.log(response, "<-- response from registerCall");
      if (response.user) {
        localStorage.setItem("current", JSON.stringify(response.user));
        this.props.doSetCurrentUser(response.user);
        this.setState({
          logged: true
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { username, password, email, location } = this.state;
    return (
      <div>
        {this.state.logged ? (
          <Redirect to={"/"} />
        ) : (
          <div className="registerContainer">
            <h1 className="registerH1">
              You're one step closer to cracking a cold one.
            </h1>
            <form onSubmit={e => this.handleRegister(e)}>
              <h4>Username</h4>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.changeHandler}
              />
              <br />
              <h4>Password</h4>
              <input
                type="text"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
              <br />
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
              <br />
              <h4>Location</h4>
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.changeHandler}
              />
              <br />
              <div className="btnContainer">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Register;
