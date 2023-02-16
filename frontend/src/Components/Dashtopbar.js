import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Global } from "../App";
import favimg from "../imgs/coach3.jpg";

const Dashtopbar = () => {
  const { setChangeNAv } = useContext(Global);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    setChangeNAv(true);
  };
  return (
    <div className="dash_nav d-flex justify-content-between align-items-center">
      <aside className="navbar bg-body-tertiary navbar-expand-lg d-block d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#dashOffcanvas"
            aria-controls="dashOffcanvas"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start dashOffcanvas"
            tabIndex={-1}
            id="dashOffcanvas"
            aria-labelledby="dashOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="#Link">
                WOXFIT
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/dashboard"
                  >
                    <i class="bi bi-bounding-box"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addactivity">
                    <i class="bi bi-plus-square-dotted"></i> Add Activity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stats">
                    <i class="bi bi-award"></i> Your Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div className="dash_nav_inner ms-auto">
        <div className="name">
          <p>Ali Zahid</p>
        </div>
        <div class="dropdown">
          <a
            href="#img"
            class="menu_img"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={favimg} alt="" />
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#link" onClick={logout}>
                Logout
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#link">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashtopbar;
