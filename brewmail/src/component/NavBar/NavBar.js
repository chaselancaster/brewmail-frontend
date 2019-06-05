import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const NavBar = ({ currentUser, doLogout }) => (
  <div>
    <NavLink exact to={routes.LANDING}>
      Home
    </NavLink>
    <NavLink>Profile</NavLink>
    {currentUser ? (
      <span>
        <button onClick={doLogout}>Logout</button>
      </span>
    ) : (
      <NavLink exact to={routes.LOGIN}>
        Login
      </NavLink>
    )}
  </div>
);
