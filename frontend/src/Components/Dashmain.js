import React from "react";
import { Link } from "react-router-dom";
import favimg from "../imgs/coach3.jpg";
import Img from "../imgs/coach3.jpg";
import Dashtopbar from "./Dashtopbar";

const Dashmain = () => {
  return (
    <div className="dash_content_con mb-5 pb-5">
      <Dashtopbar />
      <h1 className="title mx-3">DASJBOARD</h1>
      <div className="stats_con row mx-3 mb-5">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="icon_box">
                <div className="content">
                  <div className="title text-primary">Total Excersices</div>
                  <div className="value">4</div>
                </div>
                <div className="icon">
                  <i class="bi bi-universal-access"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="icon_box three">
                <div className="content">
                  <div className="title text-info">
                    Calories Burned <small>/day</small>
                  </div>
                  <div className="value">
                    300 Cal <small>AVG</small>
                  </div>
                </div>
                <div className="icon">
                  <i class="bi bi-fire"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="icon_box two">
                <div className="content">
                  <div className="title text-success">Your Activities</div>
                  <div className="value">12</div>
                </div>
                <div className="icon">
                  <i class="bi bi-graph-up-arrow"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="icon_box four">
                <div className="content">
                  <div className="title text-warning">Avg Status</div>
                  <div className="value">80 / 100</div>
                </div>
                <div className="icon">
                  <i class="bi bi-percent"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add_activity_con mx-3 mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Add Activity
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img className="img-fluid mb-4 " src={Img} alt="..." />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  iure pariatur ab hic architecto perspiciatis similique minus
                  corrupti eveniet beatae illo quia sint
                </p>
                <Link rel="nofollow" to="/addactivity">
                  Add Activity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashmain;
