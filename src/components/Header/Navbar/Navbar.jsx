import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-slate-700 py-2 px-5' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-slate-700 py-2 px-5' : ''
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-slate-700 py-2 px-5' : ''
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
