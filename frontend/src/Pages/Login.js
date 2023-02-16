import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../App";

const Login = () => {
  const { setChangeNAv } = useContext(Global);
  const navigate = useNavigate();
  const dashboard = () => {
    navigate("/dashboard");
    setChangeNAv(false);
  };
  return (
    <div className="login_page my-5 py-5">
      <div className="container">
        <div className="row form_wrapper_con shadow">
          <div className="col-12 col-lg-6 form_wrapper loginbg">
            <div className="title">
              <h2>Woxfit</h2>
              <p>
                <small>Train To Fit Your Body</small>
              </p>
            </div>
            <div className="social_icon">
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
          <div className="col-12 col-lg-6 form_wrapper right">
            <div className="title">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="subtitle text-center">
              Login to start your fitness journey
            </div>
            <div className="login_form_con">
              <form action="">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="*******"
                  />
                </div>
                <button className="btn cst_button filled2" onClick={dashboard}>
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
