import React from "react";
import clientImg1 from "../imgs/coach1.jpg";
import clientImg2 from "../imgs/coach2.jpg";
import clientImg3 from "../imgs/coach3.jpg";
import clientImg4 from "../imgs/coach4.jpg";

const Testimonial = () => {
  return (
    <>
      <div>
        <div className="testimonial_sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-12">
                <h1 className="secTitle">TESTIMONIALS FROM CUSTOMERS</h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="owl-carousel owl-theme testimonialCarousel">
                  <div className="item">
                    <div className="testi_con">
                      <div className="quote">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div className="desc">
                        Sed dolor quis lacinia tristique nisi. Risus velit
                        tincidunt a nisl feugiat. Sit massa faucibus.
                      </div>
                      <div className="client">
                        <div className="img">
                          <img src={clientImg1} alt="" />
                        </div>
                        <div className="name">
                          <h4>Brooklyn Simmons</h4>
                          <span>@brookisim</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testi_con">
                      <div className="quote">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div className="desc">
                        Sed dolor quis lacinia tristique nisi. Risus velit
                        tincidunt a nisl feugiat. Sit massa faucibus.
                      </div>
                      <div className="client">
                        <div className="img">
                          <img src={clientImg2} alt="" />
                        </div>
                        <div className="name">
                          <h4>Brooklyn Simmons</h4>
                          <span>@brookisim</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testi_con">
                      <div className="quote">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div className="desc">
                        Sed dolor quis lacinia tristique nisi. Risus velit
                        tincidunt a nisl feugiat. Sit massa faucibus.
                      </div>
                      <div className="client">
                        <div className="img">
                          <img src={clientImg3} alt="" />
                        </div>
                        <div className="name">
                          <h4>Brooklyn Simmons</h4>
                          <span>@brookisim</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testi_con">
                      <div className="quote">
                        <i class="bi bi-quote"></i>
                      </div>
                      <div className="desc">
                        Sed dolor quis lacinia tristique nisi. Risus velit
                        tincidunt a nisl feugiat. Sit massa faucibus.
                      </div>
                      <div className="client">
                        <div className="img">
                          <img src={clientImg4} alt="" />
                        </div>
                        <div className="name">
                          <h4>Brooklyn Simmons</h4>
                          <span>@brookisim</span>
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
    </>
  );
};

export default Testimonial;
