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
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <NavLink exact to={routes.LANDING} className="navLinkOption">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.CELLAR} className="navLinkOption">
            Cellar
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.TRADES} className="navLinkOption">
            Trades
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.MATCHES} className="navLinkOption">
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink exact to={routes.PROFILE} className="navLinkOption">
            Profile
          </NavLink>
        </li>
        {currentUser ? (
          <li>
            <span>
              <button
                onClick={doLogout}
                className="waves-effect waves-light btn black navLinkOption"
              >
                Logout
              </button>
            </span>
          </li>
        ) : (
          <li>
            <NavLink exact to={routes.LOGIN} className="navLinkOption">
              <button className="waves-effect waves-light btn black">
                Login
              </button>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </nav>
);

export default NavBar;
