import React, { Component } from "react";
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./component/Landing/Landing";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";

import * as routes from "./constants/routes";

class App extends Component {
  state = {
    currentUser: null,
    logged: false,
    search: ""
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user,
      logged: true
    });
  };

  doLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.clear();
    this.props.history.push(routes.LOGIN);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            currentUser={this.state.currentUser}
            doLogout={this.doLogout}
          />
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing />} />
            <Route
              exact
              path={routes.REGISTER}
              render={() => (
                <Register doSetCurrentUser={this.doSetCurrentUser} />
              )}
            />
            <Route
              exact
              path={routes.LOGIN}
              render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
