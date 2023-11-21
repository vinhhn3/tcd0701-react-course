import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h2>TCD0701 Github Finder</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
