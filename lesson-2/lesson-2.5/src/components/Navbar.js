import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Auth from "../auth";
const Navbar = (props) => {
  const authHanfler = () => {
    if (Auth.isAuthenticated()) {
      Auth.logout(() => {
        props.history.push(["/"]);
      });
    } else {
      Auth.login(() => {
        props.history.push("/about");
      });
    }
  };
  const authText = Auth.isAuthenticated() ? "logout" : "login";
  const authClass = Auth.isAuthenticated() ? "danger" : "success";

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
          <ul className="nav nav-tabs mr-auto">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <button className={`btn btn-${authClass} navbar-btn`} onClick={authHanfler}>
          {authText}
        </button>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
