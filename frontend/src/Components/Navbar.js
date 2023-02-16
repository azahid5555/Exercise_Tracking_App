import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "../App";

const Navbar = () => {
  const { changeNav } = useContext(Global);

  return (
    <div>
      {changeNav && (
        <nav id="navbar_top" className="navbar navbar-expand-lg shadow">
          <div className="container">
            <Link id="nav_brand_nav" className="navbar-brand" to="/">
              WOXFIT
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span id="nav_tg_icon" className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end nav_offcanvas"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center align-items-lg-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link menu-links"
                      id="navbarLink"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link menu-links navbarLink"
                      aria-current="page"
                      href="/about"
                      id="navbarLink2"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link cst_button filled2" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
