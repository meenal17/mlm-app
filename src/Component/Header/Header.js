import React from "react";
import {Link} from "react-router-dom";
import Countrylang from "./Countrylang";
import Currency from "./currency";
const Header = () => {
  return (
    <>
      <div className="main-header sticky side-header nav nav-item">
        <div className="container">
          <div className="main-header-left ">
            <div
              className="app-sidebar__toggle mobile-toggle ml-3"
              data-toggle="sidebar"
            >
              <a className="open-toggle" href="#">
                <i className="header-icons" data-eva="menu-outline"></i>
              </a>
              <a className="close-toggle" href="#">
                <i className="header-icons" data-eva="close-outline"></i>
              </a>
            </div>
            <div className="ml-3">
              <div>
                <Currency />
              </div>
            </div>
            <div className="ml-4">
              <Countrylang />
            </div>
          </div>
          <div className="main-header-center">
            <div className="responsive-logo">
              <a href="index.html">
                <img
                  src="assets/img/brand/logo.png"
                  className="mobile-logo"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="main-header-right">
            <div className="nav nav-item  navbar-nav-right ml-auto">
              <form
                className="navbar-form nav-item my-auto d-lg-none"
                role="search"
              >
                {/* <div className="input-group nav-item my-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <button type="reset" className="btn btn-default">
                      <i className="ti-close"></i>
                    </button>
                    <button className="btn btn-default nav-link">
                      <i className="ti-search"></i>
                    </button>
                  </span>
                </div> */}
              </form>
              <div className="nav-item full-screen fullscreen-button">
                <a className="new nav-link full-screen-link" href="#">
                  <i className="ti-fullscreen"></i>
                </a>
              </div>
              {/* email */}
              <div className="dropdown  nav-item main-header-message ">
                <a className="new nav-link" href="#">
                  <i className="ti-email"></i>
                  <span className="pulse-danger"></span>
                </a>
                <div className="dropdown-menu  animated fadeInUp ">
                  <div className="p-3 d-flex">
                    <div className="">
                      <h6 className="  mb-0">You have 1 new mail</h6>
                    </div>
                  </div>
                  <div className="main-message-list chat-scroll p-3">
                    <span class="clear block m-b-none">
                      Aniket Ghanekar
                      <br />
                      I want to make a website like MLM marketing copmapy …
                      <br />
                      <small class="text-muted">June 11, 10:12</small>
                    </span>
                  </div>
                  <div className="text-center dropdown-footer">
                    <Link to="/mailbox">VIEW ALL</Link>
                  </div>
                </div>
              </div>
              {/* bell */}
              <div className="dropdown nav-item main-header-notification">
                <a className="new nav-link " href="#">
                  <i className="ti-bell animated bell-animations"></i>
                  <span className=" pulse"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow animated fadeInUp">
                  <div className=" text-left d-flex p-3">
                    <div className="">
                      <h6 className="  mb-0">You have no new notification</h6>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="navbar-toggler navresponsive-toggler d-sm-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon fe fe-more-vertical "></span>
              </button>
              <div className="dropdown main-profile-menu nav nav-item nav-link">
                <a className="profile-user" href="">
                  <img alt="" src="./assets/img/dashboard/user.jpg" />
                </a>
                {/* <div className="card ">
                  <p>Profile</p>
                  <p>Settings</p>
                </div> */}
                <div className="dropdown-menu dropdown-menu-arrow animated fadeInUp">
                  <div className="main-header-profile header-img">
                    <div className="main-img-user">
                      <img alt="" src="./assets/img/dashboard/user.jpg" />
                    </div>
                    <h6>Elizabeth Jane</h6>
                    <span>Premium Member</span>
                  </div>
                  <Link className="dropdown-item" to="/Profile">
                    <i className="far fa-user"></i> My Profile
                  </Link>

                  <Link className="dropdown-item" href="/">
                    <i className="fa fa-sign-in"></i> SignUp
                  </Link>
                  <Link className="dropdown-item" to="/">
                    <i className="fas fa-user"></i> Help
                  </Link>
                  <Link className="dropdown-item" to="/logout">
                    <i className="fas fa-sign-out-alt"></i> Logout Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="dropdown main-header-message right-toggle">
                <a
                  className="nav-link "
                  data-toggle="sidebar-right"
                  data-target=".sidebar-right"
                >
                  <i className="ti-menu tx-20 bg-transparent"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <MainHeader /> */}
      </div>
    </>
  );
};
export default Header;
