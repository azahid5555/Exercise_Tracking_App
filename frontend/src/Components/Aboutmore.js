import React from "react";
import missionImg from "../imgs/mission.webp";
import storyImg from "../imgs/story.webp";
import carImg1 from "../imgs/imgCaro1.webp";
import carImg2 from "../imgs/imgCaro2.webp";
import carImg3 from "../imgs/imgCaro3.webp";

const Aboutmore = () => {
  return (
    <div className="aboutmore">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="about_title_con">
                  <div className="subtitle">
                    <h2>INTRODUCTION</h2>
                  </div>
                  <div className="title">
                    <h1>WOXFIT CLUB</h1>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mission_con">
                  <div className="img_con">
                    <img src={missionImg} alt="" />
                  </div>
                  <div className="text_con">
                    <h4 className="title">Mission</h4>
                    <div className="disc">
                      <p>
                        Our purpose is to pass on empowering knowledge and
                        training guidance in order to have a positive impact on
                        the health and fitness of everyone we work with.
                      </p>
                      <p>
                        To provide a personalised health and fitness service
                        that unlocks every individual’s true potential so they
                        can achieve their desired goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="img_slider_con">
                  <div className="owl-carousel owl-theme herocarousel">
                    <div className="item">
                      <img src={carImg3} alt="" />
                    </div>
                    <div className="item">
                      <img src={carImg1} alt="" />
                    </div>
                    <div className="item">
                      <img src={carImg2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-sm-6 col-12">
                <div className="mission_con storycon">
                  <div className="img_con">
                    <img src={storyImg} alt="" />
                  </div>
                  <div className="text_con">
                    <h4 className="title">STORY</h4>
                    <div className="disc">
                      <p>
                        Our main focus at F7 Fitness is functional training
                        because of the proven benefits. With an emphasis on
                        mobility, strength, and conditioning,
                      </p>
                      <p>
                        the benefits of functional training differ from other
                        workouts because of the way it targets your body.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-12">
                <div className="mission_con storycon">
                  <div className="img_con">
                    <img src={storyImg} alt="" />
                  </div>
                  <div className="text_con">
                    <h4 className="title">APPROACH</h4>
                    <div className="disc">
                      <p>
                        <small>
                          <b>INOVATION + MOTIVATION = RESULTS</b>
                        </small>
                      </p>
                      <p>
                        We are a hybrid gym and training facility. We have
                        clean, state of the art facilities with the most
                        knowledgeable staff and cutting-edge training methods.
                        We offer open gym, team training, group classes, boxing,
                        cycle and personal training.
                      </p>
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

export default Aboutmore;
