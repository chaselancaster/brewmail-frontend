import React, { Component } from "react";
import { Switch, Route, withRouter, BrowserRouter } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./component/Landing/Landing";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";

import * as routes from "./constants/routes";
import console = require("console");

class App extends Component {
  state = {
    currentUser: null,
    logged: false,
    search: "",
    searchResults: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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

  searchBeer = async (e, data) => {
    try {
      e.preventDefault()
      const beerCall = await fetch(`http://localhost:3001/api/${this.state.search}`, {
        method: 'GET',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(beerCall, "<-- beerCall in searchBeer function")
      const response = await beerCall.json()
      console.log(response, "<-- response in searchBeer function")
      this.setState({
        searchResults: response.beers
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            currentUser={this.state.currentUser}
            doLogout={this.doLogout}
            changeHandler={this.changeHandler}
            search={this.state.search}
            searchBeer={this.searchBeer}
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
