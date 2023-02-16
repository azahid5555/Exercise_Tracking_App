import React from "react";
import coachImg1 from "../imgs/coach1.jpg";
import coachImg2 from "../imgs/coach2.jpg";
import coachImg3 from "../imgs/coach3.jpg";
import coachImg4 from "../imgs/coach4.jpg";

const Coaches = () => {
  return (
    <div className="coaches_sec">
      <div className="divider deg180">
        <svg
          fill="#111111"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path class="" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
      <div className="our_coach_sec">
        <div className="container">
          <div className="row py-5">
            <div className="col-12">
              <h1 className="secTitle">Our Coaches</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel owl-theme coachseCarousel">
                <div className="item">
                  <div className="coach_card_con">
                    <div className="coach_card">
                      <div className="img_con">
                        <img src={coachImg1} alt="" />
                        <div className="coSocial_icon">
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
                      <div className="content text-white mt-4">
                        <div className="name">
                          <h2>Floyd Miles</h2>
                          <div className="coachType">CROSSFIT COACH</div>
                          <div className="desc">
                            Orci et duis ultrices suspendisse nibh lacus, sit.
                            Nulla amet sodales eu non.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="coach_card_con">
                    <div className="coach_card">
                      <div className="img_con">
                        <img src={coachImg2} alt="" />
                        <div className="coSocial_icon">
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
                      <div className="content text-white mt-4">
                        <div className="name">
                          <h2>Jeremon Bell</h2>
                          <div className="coachType">CROSSFIT COACH</div>
                          <div className="desc">
                            Orci et duis ultrices suspendisse nibh lacus, sit.
                            Nulla amet sodales eu non.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="coach_card_con">
                    <div className="coach_card">
                      <div className="img_con">
                        <img src={coachImg3} alt="" />
                        <div className="coSocial_icon">
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
                      <div className="content text-white mt-4">
                        <div className="name">
                          <h2>Nathan Copper</h2>
                          <div className="coachType">CROSSFIT COACH</div>
                          <div className="desc">
                            Orci et duis ultrices suspendisse nibh lacus, sit.
                            Nulla amet sodales eu non.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="coach_card_con">
                    <div className="coach_card">
                      <div className="img_con">
                        <img src={coachImg4} alt="" />
                        <div className="coSocial_icon">
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
                      <div className="content text-white mt-4">
                        <div className="name">
                          <h2>Ronald Richard</h2>
                          <div className="coachType">CROSSFIT COACH</div>
                          <div className="desc">
                            Orci et duis ultrices suspendisse nibh lacus, sit.
                            Nulla amet sodales eu non.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
