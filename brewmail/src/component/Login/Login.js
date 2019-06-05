import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    logged: false,
    message: ""
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {this.state.logged ? (
          <Redirect to={"/"} />
        ) : (
          <div>
            <h1>This is the Login page</h1>
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
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
