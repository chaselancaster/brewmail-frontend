import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

import * as routes from "./constants/routes";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.LANDING} render={() => <Landing />} />
        </Switch>
      </div>
    );
  }
}

export default App;
