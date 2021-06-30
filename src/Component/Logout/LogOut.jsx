import React, {useState} from "react";
import Countrylang from "../Header/Countrylang";

import "../Logout/style.css";
const LogOut = () => {
  return (
    <>
      <div
        style={{
          display: "flex !important",
          justifyContent: "center !important",
          alignItems: "center !important",
          height: "100% !important",
          width: "100% !important",
          marginTop: "10%",
        }}
      >
        <div className="card" style={{height: "80vh", width: "80vh"}}>
          <div className="card-title mt-3">
            <div style={{height: "50px", width: "150px"}}>
              <a class=" desktop-logo logo-light " href="">
                <img
                  src="../../assets/img/brand/logo.png"
                  class="logo"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="ml-3" style={{listStyleType: "none"}}>
            <Countrylang />
          </div>
          <div className="card-body logoutcard-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1" className="labelcol">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" className="labelcol">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" class="btn btn-purple">
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOut;
