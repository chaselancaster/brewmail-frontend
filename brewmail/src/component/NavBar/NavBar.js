import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const NavBar = ({
  currentUser,
  doLogout,
  search,
  changeHandler,
  searchBeer
}) => (
  <div>
    <NavLink exact to={routes.LANDING}>
      Home
    </NavLink>
    <form onSubmit={searchBeer}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={changeHandler}
        placeholder="Search for a beer or brewery"
      />
    </form>
    <NavLink exact to={routes.CELLAR}>
      Cellar
    </NavLink>
    <NavLink exact to={routes.MATCHES}>
      Matches
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

export default NavBar;
