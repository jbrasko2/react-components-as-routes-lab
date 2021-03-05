import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          color: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
      to="/movies"
      exact
      activeStyle={{
        color: 'darkblue'
      }}
      >Movies</NavLink>
      <NavLink
      to="/directors"
      exact
      activeStyle={{
        color: 'darkblue'
      }}
      >Directors</NavLink>
      <NavLink
      to="/actors"
      exact
      activeStyle={{
        color: 'darkblue'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
