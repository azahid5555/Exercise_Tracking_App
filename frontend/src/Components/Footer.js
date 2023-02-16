import React, { useContext } from "react";
import { Global } from "../App";

const Footer = () => {
  const { changeNav } = useContext(Global);
  return (
    <div>
      {changeNav && (
        <div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="logo">
                    <a href="#home" className="navbar-brand">
                      Woxfit
                    </a>
                  </div>
                  <div className="aboutftr">
                    Parturient porttitor quam mattis ipsum imperdiet habitasse
                    orci. Risus integer.
                  </div>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#fb">
                          <i class="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#tw">
                          <i class="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ps-3 ps-lg-5 col-lg-4 col-md-6 col-12">
                  <div className="section_heading">
                    <h4>About Company</h4>
                  </div>
                  <div className="pasges_list">
                    <ul>
                      <li>
                        <a href="#home" className="animated_link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#home" className="animated_link">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#home" className="animated_link">
                          Service
                        </a>
                      </li>
                      <li>
                        <a href="#home" className="animated_link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ps-3 ps-lg-5 col-lg-4 col-md-6 col-12">
                  <div className="section_heading">
                    <h4>Support</h4>
                  </div>
                  <div className="pasges_list">
                    <ul>
                      <li>
                        <a href="#home" className="animated_link">
                          +971 123 4567 8901
                        </a>
                      </li>
                      <li>
                        <a href="#home" className="animated_link">
                          +971 123 4567 8901
                        </a>
                      </li>
                      <li>
                        <span className="timing text-white">
                          Mon - Friday : 6Am - 11Pm
                        </span>
                      </li>
                      <li>
                        <a href="#home" className="animated_link">
                          support@woxfit.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="footerbtm">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="copyrigth text-sm-start text-center">
                    <p>&copy; Woxofit</p>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="copyrigth text-sm-end text-center">
                    <p>All Rights Reserved 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
