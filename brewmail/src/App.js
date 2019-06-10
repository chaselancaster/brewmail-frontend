import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

// Components
import Landing from "./component/Landing/Landing";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import NavBar from "./component/NavBar/NavBar";
import Search from "./component/Search/Search";
import Cellar from "./component/Cellar/Cellar";
import Matches from "./component/Matches/Matches";
import Trades from "./component/Trades/Trades";
import TradeShow from "./component/TradeShow/TradeShow";
import Profile from "./component/Profile/Profile";
import EditUser from "./component/EditUser/EditUser";

import * as routes from "./constants/routes";

class App extends Component {
  state = {
    currentUser: null,
    logged: false,
    search: "",
    searchResults: [],
    userCellar: [],
    userISO: [],
    usersTradingBeer: [],
    matches: [],
    userTrades: [],
    selectedTrade: {}
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setSelectedTrade = trade => {
    this.setState({
      selectedTrade: trade
    });
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user,
      logged: true,
      userCellar: user.cellarBeer,
      userISO: user.isoBeer,
      userTrades: user.trades
    });
  };

  doLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.clear();
    this.props.history.push(routes.LOGIN);
  };

  // Search for a beer or brewery
  searchBeer = async (e, data) => {
    try {
      e.preventDefault();
      const beerCall = await fetch(
        `http://localhost:3001/api/${this.state.search}`,
        {
          method: "GET",
          // credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(beerCall, "<-- beerCall in searchBeer function");
      const response = await beerCall.json();
      console.log(response.data, "<-- response in searchBeer function");
      this.setState(
        {
          searchResults: response.data.response.beers.items,
          search: ""
        },
        () => {
          this.props.history.push("/search");
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <NavBar
          currentUser={this.state.currentUser}
          doLogout={this.doLogout}
          changeHandler={this.changeHandler}
          search={this.state.search}
          searchBeer={this.searchBeer}
        />
        <Switch>
          <Route
            exact
            path={routes.LANDING}
            render={() => (
              <Landing
                changeHandler={this.changeHandler}
                search={this.state.search}
                searchBeer={this.searchBeer}
              />
            )}
          />
          <Route
            exact
            path={routes.REGISTER}
            render={() => <Register doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route
            exact
            path={routes.LOGIN}
            render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route
            exact
            path={routes.SEARCH}
            render={() => (
              <Search
                searchResults={this.state.searchResults}
                doSetCurrentUser={this.doSetCurrentUser}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path={routes.CELLAR}
            render={() => (
              <Cellar
                userCellar={this.state.userCellar}
                currentUser={this.state.currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />
          <Route
            exact
            path={routes.MATCHES}
            render={() => (
              <Matches
                userISO={this.state.userISO}
                usersTradingBeer={this.state.usersTradingBeer}
                currentUser={this.state.currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />
          <Route
            exact
            path={routes.TRADES}
            render={() => (
              <Trades
                userTrades={this.state.userTrades}
                currentUserId={this.state.currentUser._id}
                setSelectedTrade={this.setSelectedTrade}
              />
            )}
          />
          <Route
            exact
            path={routes.TRADESHOW}
            render={() => (
              <TradeShow
                selectedTrade={this.state.selectedTrade}
                currentUserId={this.state.currentUser._id}
              />
            )}
          />
          <Route
            exact
            path={routes.PROFILE}
            render={() => <Profile currentUser={this.state.currentUser} />}
          />
          <Route
            exact
            path={routes.EDITUSER}
            render={() => <EditUser currentUser={this.state.currentUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
