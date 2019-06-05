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

  render() {
    const { username, password, email, location } = this.state;
    return (
      <div>
        <h1>This is the Register page</h1>
        <form>
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
