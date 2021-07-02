import React from "react";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <Link to="/login">
      <>
        <div className="main-signin-wrapper mt-4">
          <div className="main-card-signin d-md-flex wd-100p">
            <div
              className="wd-md-50p login d-none d-md-block  p-5 text-white"
              style={{
                background: `url(../../assets/img/dashboard/login.jpg)`,
                opacity: "0.9",
                backgroundrepeat: "no-repeat",
              }}
            >
              <div className="my-auto authentication-pages">
                <div>
                  <img
                    src="../../assets/img/brand/logo.png"
                    className=" ml-5  mb-4"
                    alt="logo"
                    style={{
                      height: "40px",
                      width: "130px",
                      paddingLeft: "80px !important",
                    }}
                  />
                  <h5 className="mb-4"></h5>
                  <p className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  {/* <a href="index.html" className="btn btn-danger">
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
            <div className="p-5 wd-md-50p">
              <div className="main-signin-header">
                <h2 style={{color: "#1c2b36"}}>Welcome back!</h2>
                <h6 style={{color: "red"}}>Please sign in to continue !</h6>
                <form action="index.html">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      placeholder="Enter your email"
                      type="text"
                      value="info@spruko.com"
                    />
                  </div>
                  <div className="form-group ">
                    <label>Password</label>{" "}
                    <input
                      className="form-control"
                      placeholder="Enter your password"
                      type="password"
                      value="sprukodemo"
                    />
                  </div>
                  <button className="btn btn-purple btn-block">Sign In</button>
                </form>
              </div>
              <div className="main-signin-footer mt-3 mg-t-5">
                <p>
                  <a href="" className="text-info">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="page-signup.html">Create an Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Login;
