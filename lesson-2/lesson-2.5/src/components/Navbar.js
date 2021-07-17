import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Navbar = (props) => {
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav nav-tabs">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
