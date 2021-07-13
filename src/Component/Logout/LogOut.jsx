import React, {useState} from "react";
import Countrylang from "../Header/Countrylang";
import {useTranslation} from "react-i18next";
import "../Logout/style.css";
const LogOut = () => {
  const {t, i18n} = useTranslation();
  return (
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
                  className=" ml-5 mb-4"
                  alt="logo"
                  style={{
                    height: "40px",
                    width: "130px",
                  }}
                />
                <h5 className="mb-4"></h5>
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                {/* <a href="index.html" className="btn btn-danger">
                    Learn More
                  </a> */}
              </div>
            </div>
          </div>
          <div className="p-5 wd-md-50p">
            <div className="main-signin-header">
              <h2 style={{color: "#736d6d", textAlign: "center"}}>
                {t("logout.53")}
              </h2>
              <h6>
                {" "}
                <div className="ml-3" style={{listStyleType: "none"}}>
                  <Countrylang />
                </div>
              </h6>
              <form action="index.html">
                <div className="form-group">
                  <label>{t("Email.196")}</label>
                  <input
                    className="form-control"
                    placeholder="Enter your email"
                    type="text"
                    value="info@spruko.com"
                  />
                </div>
                <div className="form-group">
                  <label>{t("Password.416")}</label>{" "}
                  <input
                    className="form-control"
                    placeholder="Enter your password"
                    type="password"
                    value="sprukodemo"
                  />
                </div>
                <button className="btn btn-purple btn-block">
                  {t("SignOut.417")}
                </button>
              </form>
            </div>
            <div className="main-signin-footer mt-3 mg-t-5">
              <p>
                <a href="" className="text-info">
                  {t("Forgotpassword?.418")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOut;
