import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const linkStyle = {
    margin: '1rem',
    textDeocoration: 'none',
    color: ' rgb(151, 31, 31);',
  };
  return (
    <>
      <ul className="header">
        <li>
          <NavLink style={linkStyle} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <h2 className="title">Books Store</h2>
    </>
  );
};

export default Navbar;
