import React from "react";
import imgRun from "../imgs/running.jpg";
import imgSwim from "../imgs/swimming.jpg";
import imgHike from "../imgs/hike.jpg";
import imgCycle from "../imgs/cycling.jpg";

const Excercises = () => {
  return (
    <div className="exc_con">
      <div className="row g-0">
        <div className="col-lg-6 col-12">
          <div className="row g-0">
            <div className=" col-md-6 col-12 p-0">
              <div className="text_con">
                <div className="subtitle">Body shap</div>
                <div className="title">
                  <h3>
                    <a href="#run">Running</a>
                  </h3>
                </div>
                <div className="desc">
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus maecenas
                </div>
                <div className="link mt-2">
                  <a href="#link" className="animated_link">
                    start now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-12 p-0">
              <div className="bg_img">
                <img src={imgRun} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="row g-0">
            <div className="col-md-6 col-12 p-0">
              <div className="text_con bgyellowish">
                <div className="subtitle">RELAX PROGRAM</div>
                <div className="title">
                  <h3>
                    <a href="#run">Swiming</a>
                  </h3>
                </div>
                <div className="desc">
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus maecenas
                </div>
                <div className="link mt-2">
                  <a href="#link" className="animated_link">
                    start now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-0">
              <div className="bg_img">
                <img src={imgSwim} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6 col-12">
          <div className="row g-0 flex-column-reverse flex-md-row">
            <div className="col-md-6 col-12 p-0">
              <div className="bg_img">
                <img src={imgHike} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 p-0">
              <div className="text_con bgyellowish">
                <div className="subtitle">CARDIO WORKFLOW</div>
                <div className="title">
                  <h3>
                    <a href="#run">Hike</a>
                  </h3>
                </div>
                <div className="desc">
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus maecenas
                </div>
                <div className="link mt-2">
                  <a href="#link" className="animated_link">
                    start now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="row g-0 flex-column-reverse flex-md-row flex-md-row-reverse flex-lg-row">
            <div className=" col-md-6 col-12 p-0">
              <div className="bg_img">
                <img src={imgCycle} alt="" />
              </div>
            </div>
            <div className=" col-md-6 col-12 p-0">
              <div className="text_con">
                <div className="subtitle">Body shap</div>
                <div className="title">
                  <h3>
                    <a href="#run">Bikecycle</a>
                  </h3>
                </div>
                <div className="desc">
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus maecenas
                </div>
                <div className="link mt-2">
                  <a href="#link" className="animated_link">
                    start now <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excercises;
