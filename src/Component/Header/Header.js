import React from "react";
import Breadcrumb from "../../Breadcrumb";
import MainHeader from "./Main_header";
const Header = () => {
  return (
    <>
      <div class="main-content app-content">
        <div className="main-header sticky side-header nav nav-item">
          <div className="container">
            <div className="main-header-left ">
              <div
                className="app-sidebar__toggle mobile-toggle"
                data-toggle="sidebar"
              >
                <a className="open-toggle" href="#">
                  <i className="header-icons" data-eva="menu-outline"></i>
                </a>
                <a className="close-toggle" href="#">
                  <i className="header-icons" data-eva="close-outline"></i>
                </a>
              </div>
              <div className="main-header-center ml-3 d-sm-none d-md-none d-lg-block">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search for anything..."
                />
                <button className="btn">
                  <i className="fas fa-search"></i>
                </button>
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
                  <div className="input-group nav-item my-auto">
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
                  </div>
                </form>
                <div className="nav-item full-screen fullscreen-button">
                  <a className="new nav-link full-screen-link" href="#">
                    <i className="ti-fullscreen"></i>
                  </a>
                </div>
                <div className="dropdown  nav-item main-header-message ">
                  <a className="new nav-link" href="#">
                    <i className="ti-email"></i>
                    <span className="pulse-danger"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow animated fadeInUp ">
                    <div className="main-dropdown-header  d-sm-none">
                      <a className="main-header-arrow" href="">
                        <i className="icon ion-md-arrow-back"></i>
                      </a>
                    </div>
                    <div className="menu-header-content text-left d-flex">
                      <div className="">
                        <h6 className="menu-header-title text-white mb-0">
                          5 new Messages
                        </h6>
                      </div>
                      <div className="my-auto ml-auto">
                        <span className="badge badge-pill badge-warning float-right">
                          Mark All Read
                        </span>
                      </div>
                    </div>
                    <div className="main-message-list chat-scroll">
                      <a href="#" className="p-3 d-flex border-bottom">
                        <div
                          className="  drop-img  cover-image  "
                          data-image-src="../../assets/img/faces/3.jpg"
                        >
                          <span className="avatar-status bg-teal"></span>
                        </div>

                        <div className="wd-90p">
                          <div className="d-flex">
                            <h5 className="mb-1 name">Paul Molive</h5>
                            <p className="time mb-0 text-right ml-auto float-right">
                              10 min ago
                            </p>
                          </div>
                          <p className="mb-0 desc">
                            I'm sorry but i'm not sure how...
                          </p>
                        </div>
                      </a>
                      <a href="#" className="p-3 d-flex border-bottom">
                        <div
                          className="drop-img cover-image"
                          data-image-src="../../assets/img/faces/2.jpg"
                        >
                          <span className="avatar-status bg-teal"></span>
                        </div>
                        <div className="wd-90p">
                          <div className="d-flex">
                            <h5 className="mb-1 name">Sahar Dary</h5>
                            <p className="time mb-0 text-right ml-auto float-right">
                              13 min ago
                            </p>
                          </div>
                          <p className="mb-0 desc">
                            All set ! Now, time to get to you now......
                          </p>
                        </div>
                      </a>
                      <a href="#" className="p-3 d-flex border-bottom">
                        <div
                          className="drop-img cover-image"
                          data-image-src="../../assets/img/faces/9.jpg"
                        >
                          <span className="avatar-status bg-teal"></span>
                        </div>
                        <div className="wd-90p">
                          <div className="d-flex">
                            <h5 className="mb-1 name">Khadija Mehr</h5>
                            <p className="time mb-0 text-right ml-auto float-right">
                              20 min ago
                            </p>
                          </div>
                          <p className="mb-0 desc">
                            Are you ready to pickup your Delivery...
                          </p>
                        </div>
                      </a>
                      <a href="#" className="p-3 d-flex border-bottom">
                        <div
                          className="drop-img cover-image"
                          data-image-src="../../assets/img/faces/12.jpg"
                        >
                          <span className="avatar-status bg-danger"></span>
                        </div>
                        <div className="wd-90p">
                          <div className="d-flex">
                            <h5 className="mb-1 name">Barney Cull</h5>
                            <p className="time mb-0 text-right ml-auto float-right">
                              30 min ago
                            </p>
                          </div>
                          <p className="mb-0 desc">
                            Here are some products ...
                          </p>
                        </div>
                      </a>
                      <a href="#" className="p-3 d-flex border-bottom">
                        <div
                          className="drop-img cover-image"
                          data-image-src="../../assets/img/faces/5.jpg"
                        >
                          <span className="avatar-status bg-teal"></span>
                        </div>
                        <div className="wd-90p">
                          <div className="d-flex">
                            <h5 className="mb-1 name">Petey Cruiser</h5>
                            <p className="time mb-0 text-right ml-auto float-right">
                              35 min ago
                            </p>
                          </div>
                          <p className="mb-0 desc">
                            I'm sorry but i'm not sure how...
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="text-center dropdown-footer">
                      <a href="text-center">VIEW ALL</a>
                    </div>
                  </div>
                </div>
                <div className="dropdown nav-item main-header-notification">
                  <a className="new nav-link " href="#">
                    <i className="ti-bell animated bell-animations"></i>
                    <span className=" pulse"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow animated fadeInUp">
                    <div className="menu-header-content text-left d-flex">
                      <div className="">
                        <h6 className="menu-header-title text-white mb-0">
                          7 new Notifications
                        </h6>
                      </div>
                      <div className="my-auto ml-auto">
                        <span className="badge badge-pill badge-warning float-right">
                          Mark All Read
                        </span>
                      </div>
                    </div>
                    <div className="main-notification-list Notification-scroll">
                      <a href="#" className="d-flex  p-3 border-bottom ">
                        <div className="notifyimg bg-success-transparent">
                          <i className="la la-shopping-basket text-success"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            New Order Received
                          </h5>
                          <div className="notification-subtext">1 hour ago</div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                      <a href="#" className="d-flex p-3 border-bottom">
                        <div className="notifyimg bg-danger-transparent">
                          <i className="la la-user-check text-danger"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            22 verified registrations
                          </h5>
                          <div className="notification-subtext">2 hour ago</div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                      <a href="#" className="d-flex p-3 border-bottom">
                        <div className="notifyimg bg-primary-transparent">
                          <i className="la la-check-circle text-primary"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            Project has been approved
                          </h5>
                          <div className="notification-subtext">4 hour ago</div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                      <a href="#" className="d-flex p-3 border-bottom">
                        <div className="notifyimg bg-pink-transparent">
                          <i className="la la-file-alt text-pink"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            New files available
                          </h5>
                          <div className="notification-subtext">
                            10 hour ago
                          </div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                      <a href="#" className="d-flex p-3 border-bottom">
                        <div className="notifyimg bg-warning-transparent">
                          <i className="la la-envelope-open text-warning"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            New review received
                          </h5>
                          <div className="notification-subtext">1 day ago</div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                      <a href="#" className="d-flex  p-3 border-bottom ">
                        <div className="notifyimg bg-purple-transparent">
                          <i className="la la-gem text-purple"></i>
                        </div>
                        <div className="ml-3">
                          <h5 className="notification-label mb-1">
                            Updates Available
                          </h5>
                          <div className="notification-subtext">2 days ago</div>
                        </div>
                        <div className="ml-auto">
                          <i className="las la-angle-right text-right text-muted"></i>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer">
                      <a href="">VIEW ALL</a>
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
                    <img alt="" src="../../assets/img/faces/5.jpg" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow animated fadeInUp">
                    <div className="main-header-profile header-img">
                      <div className="main-img-user">
                        <img alt="" src="../../assets/img/faces/5.jpg" />
                      </div>
                      <h6>Elizabeth Jane</h6>
                      <span>Premium Member</span>
                    </div>
                    <a className="dropdown-item" href="">
                      <i className="far fa-user"></i> My Profile
                    </a>
                    <a className="dropdown-item" href="">
                      <i className="far fa-edit"></i> Edit Profile
                    </a>
                    <a className="dropdown-item" href="">
                      <i className="far fa-clock"></i> Activity Logs
                    </a>
                    <a className="dropdown-item" href="">
                      <i className="fas fa-sliders-h"></i> Account Settings
                    </a>
                    <a className="dropdown-item" href="page-signin.html">
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </a>
                  </div>
                </div>
                <div className="dropdown main-header-message right-toggle">
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
          </div>
          <MainHeader />
        </div>

        <Breadcrumb />
      </div>
    </>
  );
};
export default Header;
