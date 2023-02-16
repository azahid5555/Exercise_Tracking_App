import React from "react";
import { Link } from "react-router-dom";

const Dashaside = () => {
  return (
    <>
      <div className="dash_aside_con">
        <aside className="dashboard_aside">
          <div className="logo">
            <h4 className="aside_brand">WOXFIT</h4>
          </div>
          <hr className="horizontal light" />
          <div className="aside_menu">
            <ul>
              <li>
                <Link to="/dashboard" className="animated_link">
                  <i class="bi bi-bounding-box"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/addactivity" className="animated_link">
                  <i class="bi bi-plus-square-dotted"></i> Add Activity
                </Link>
              </li>
              <li>
                <Link to="/stats" className="animated_link">
                  <i class="bi bi-award"></i> Your Status
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Dashaside;
