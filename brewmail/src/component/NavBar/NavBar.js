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
        <NavLink exact to={routes.LANDING} className="NavLinkOption">
          Home
        </NavLink>

        <NavLink exact to={routes.CELLAR} className="NavLinkOption">
          Cellar
        </NavLink>
        <NavLink exact to={routes.TRADES} className="NavLinkOption">
          Trades
        </NavLink>
        <NavLink exact to={routes.MATCHES} className="NavLinkOption">
          Matches
        </NavLink>
        <NavLink className="NavLinkOption">Profile</NavLink>
        {currentUser ? (
          <span>
            <button
              onClick={doLogout}
              className="waves-effect waves-light btn black"
            >
              Logout
            </button>
          </span>
        ) : (
          <NavLink exact to={routes.LOGIN} className="NavLinkOption">
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
