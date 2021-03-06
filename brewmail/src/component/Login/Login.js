import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Login.css";
class Login extends Component {
  state = {
    username: "",
    password: "",
    logged: false,
    message: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Login
  handleLogin = async e => {
    try {
      e.preventDefault();
      const loginCall = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        // credentials: "include",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await loginCall.json();
      console.log(response, "<-- response in handleLogin");
      if (response.user) {
        localStorage.setItem("user", response.user);
        this.props.doSetCurrentUser(response.user);
        this.setState({
          logged: true
        });
      } else {
        this.setState({
          message: response.message
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {this.state.logged ? (
          <Redirect to={"/"} />
        ) : (
          <div className="loginContainer">
            <h1 className="loginH1">Welcome Back</h1>
            <form onSubmit={e => this.handleLogin(e)}>
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
              <div className="btnContainer">
                <button
                  type="submit"
                  className="waves-effect waves-light btn black"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
