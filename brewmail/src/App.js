import React, { Component } from "react";
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./component/Landing/Landing";
import Register from "./component/Register/Register";

import * as routes from "./constants/routes";

class App extends Component {
  state = {
    currentUser: null,
    logged: false
  };

  handleRegister = async data => {
    try {
      const registerCall = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await registerCall.json();
      console.log(response, "<-- response from registerCall");
      if (response.message === "success") {
        this.setState({
          logged: true,
          currentUser: response
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing />} />
            <Route
              exact
              path={routes.REGISTER}
              render={() => <Register handleRegister={this.handleRegister} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
