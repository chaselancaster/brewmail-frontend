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

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    });
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
