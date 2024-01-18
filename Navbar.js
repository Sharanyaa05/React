import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/card" className="navLink">Card</NavLink>
        <NavLink to="/superover" className="navLink">Superover</NavLink>
        <NavLink to="/socialbutton" className="navLink">Social</NavLink>
        <NavLink to="/notification" className="navLink">Notification</NavLink>
        <NavLink to="/login" className="navLink">Login</NavLink>
        <NavLink to="/tech" className="navLink">Tech Card</NavLink>
        <NavLink to="/project" className="navLink">Product</NavLink>
        <NavLink to="/feedback" className="navLink">Feedback</NavLink>
    </nav>

  );
};

export default Navbar;