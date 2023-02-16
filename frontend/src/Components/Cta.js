import React from "react";
import ctaImg1 from "../imgs/cta1.png";
import ctaImg2 from "../imgs/cta2.png";

const Cta = () => {
  return (
    <div className="cta_sec">
      <div className="row">
        <div className="col-12">
          <div className="subtitle text-center">
            <p>Do you wanna change?</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="title text-center">
            <h1>GET YOUR DREAM BODY WITH US</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10 col-12">
          <div className="description text-center">
            <p>
              Accumsan vulputate sed id blandit duis pellentesque nullam diam
              purus. Quisque diam pharetra, tristique non arcu eu. Integer.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 text-center">
          <a href="#link" className="cst_button filled2 hovWhite">
            Start now
          </a>
          <a href="#link" className="animated_link">
            Contact Us <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="img1_con">
        <img src={ctaImg1} alt="" />
      </div>
      <div className="img2_con">
        <img src={ctaImg2} alt="" />
      </div>
      <div className="section">
        <div class="scroll text1">
          <div>
            Special Offer! <span> BEST PROFESSIONAL COACHES </span> Special
            Offer!
            <span> BEST PROFESSIONAL COACHES </span>
          </div>
          <div>
            Special Offer! <span> BEST PROFESSIONAL COACHES </span> Special
            Offer!
            <span>BEST PROFESSIONAL COACHES </span>
          </div>
        </div>
        <div class="scroll text2">
          <div>
            Special Offer! <span> BEST PROFESSIONAL COACHES </span> Special
            Offer!
            <span> BEST PROFESSIONAL COACHES </span>
          </div>
          <div>
            Special Offer! <span> BEST PROFESSIONAL COACHES </span> Special
            Offer!
            <span>BEST PROFESSIONAL COACHES </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
