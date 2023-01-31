import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="nav-container container">
        <Link to="/">
          <h3 className="logo">Logo</h3>
        </Link>
        <ul>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
