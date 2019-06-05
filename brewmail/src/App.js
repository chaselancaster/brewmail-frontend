import React, { Component } from "react";
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./component/Landing/Landing";

import * as routes from "./constants/routes";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.LANDING} render={() => <Landing />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
