import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
