import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Register extends Component {
  render() {
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

    return (
      <div>
        <h1>This is the Register page</h1>
        <form>
          <h4>Username</h4>
          <input type="text" name="username" />
          <br />
          <h4>Password</h4>
          <input type="text" name="password" />
          <br />
          <h4>Email</h4>
          <input type="email" name="email" />
          <br />
          <h4>Location</h4>
          <input type="text" name="location" />
        </form>
      </div>
    );
  }
}

export default Register;
