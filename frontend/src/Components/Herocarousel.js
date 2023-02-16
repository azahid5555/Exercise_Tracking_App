import React from "react";

const Herocarousel = (props) => {
  return (
    <div className="owl-carousel owl-theme herocarousel">
      <div className="item">
        <div className="heroslide_con slide-4">
          <div className="row align-items-center px-4">
            <div className="col-7  d-none d-sm-flex carousel_icon">
              <img src={props.img} alt="" />
            </div>
            <div className="col-9 col-sm-5 ps-4 ps-sm-0">
              <h1 className="carousel_title">BODY AND SOUL</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heroslide_con slide-3">
          <div className="row align-items-center px-4">
            <div className="col-7  d-none d-sm-flex carousel_icon text-end">
              <img src={props.img} alt="" />
            </div>
            <div className="col-9 col-sm-5 ps-4 ps-sm-0">
              <h1 className="carousel_title">STEP TO PEACE</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="heroslide_con slide-2">
          <div className="row align-items-center px-4">
            <div className="col-7 d-none d-sm-flex carousel_icon text-end">
              <img src={props.img} alt="" />
            </div>
            <div className="col-9 col-sm-5 ps-4 ps-sm-0">
              <h1 className="carousel_title">STAY FLEXIBLE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocarousel;
