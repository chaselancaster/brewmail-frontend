import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

import "./NavBar.css";

const NavBar = ({
  currentUser,
  doLogout,
  search,
  changeHandler,
  searchBeer
}) => (
  <nav>
    <div className="nav-wrapper yellow darken-2">
      <a href="#" class="brand-logo">
        BrewMail
      </a>
      <div id="nav-mobile" class="right hide-on-med-and-down">
        <NavLink exact to={routes.LANDING} className="navLinkOption">
          Home
        </NavLink>

        <NavLink exact to={routes.CELLAR} className="navLinkOption">
          Cellar
        </NavLink>
        <NavLink exact to={routes.TRADES} className="navLinkOption">
          Trades
        </NavLink>
        <NavLink exact to={routes.MATCHES} className="navLinkOption">
          Matches
        </NavLink>
        <NavLink className="navLinkOption">Profile</NavLink>
        {currentUser ? (
          <span>
            <button
              onClick={doLogout}
              className="waves-effect waves-light btn black navLinkOption"
            >
              Logout
            </button>
          </span>
        ) : (
          <NavLink exact to={routes.LOGIN} className="navLinkOption">
            <button className="waves-effect waves-light btn black">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  </nav>
);

export default NavBar;
