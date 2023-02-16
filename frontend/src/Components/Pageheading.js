import React from "react";
import { Link } from "react-router-dom";

const Pageheading = (props) => {
  return (
    <>
      <div className="page_heading">
        <div className="row">
          <div className="col-12">
            <h1 className="title">{props.heading}</h1>
          </div>
          <div className="col-12 breadcrumb_con">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/" href="#">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.heading}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pageheading;
