import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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

  handleRegister = async (e, data) => {
    try {
      console.log("handleRegister function hit");
      const registerCall = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(data),
        // credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("before response");
      const response = await registerCall.json();
      console.log(response, "<-- response from registerCall");
      if (response.message === "success") {
        this.setState({
          logged: true,
          currentUser: response.user
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
        <h1>This is the Register page</h1>
        <form onSubmit={this.registerSubmit}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
