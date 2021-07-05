import React from "react";

function Sidebar() {
  return (
    <>
      {/* <!-- Right-sidebar--> */}
      <div className="sidebar sidebar-right sidebar-animate">
        <div className="p-3">
          <a
            href="#"
            className="text-right float-right"
            data-toggle="sidebar-right"
            data-target=".sidebar-right"
          >
            <i className="fe fe-x"></i>
          </a>
        </div>
        <div className="tab-menu-heading border-0 card-header">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ml-auto">
            <a href="#" className="sidebar-remove">
              <i className="fe fe-x"></i>
            </a>
          </div>
        </div>
        <div className="tabs-menu ">
          {/* <!-- Tabs --> */}
          <ul className="nav panel-tabs">
            <li className="">
              <a href="#tab" className="active show" data-toggle="tab">
                Profile
              </a>
            </li>
            <li className="">
              <a href="#tab1" data-toggle="tab" className="">
                Friends
              </a>
            </li>
            <li>
              <a href="#tab2" data-toggle="tab" className="">
                Activity
              </a>
            </li>
            <li>
              <a href="#tab3" data-toggle="tab" className="">
                Todo
              </a>
            </li>
          </ul>
        </div>
        <div className="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
          <div className="tab-content">
            <div className="tab-pane active" id="tab">
              <div className="card-body p-0">
                <div className="header-user text-center mt-4">
                  <span className="avatar avatar-xxl brround mx-auto">
                    <img
                      src="../../assets/img/faces/5.jpg"
                      alt="Profile-img"
                      className="avatar avatar-xxl brround"
                    />
                  </span>
                  <div className=" text-center font-weight-semibold user mt-3 h6 mb-0">
                    Elizabeth Jane
                  </div>
                  <span className="text-muted">App Developer</span>
                  <div className="card-body">
                    <div className="form-group ">
                      <label className="form-label  text-left">
                        Offline/Online
                      </label>
                      <select
                        className="form-control mb-4 nice-select "
                        data-placeholder="Choose one"
                      >
                        <option value="1">Online</option>
                        <option value="2">Offline</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <label className="form-label text-left">Website</label>
                      <select
                        className="form-control nice-select "
                        data-placeholder="Choose one"
                      >
                        <option value="1">Spruko.com</option>
                        <option value="2">sprukosoft.com</option>
                        <option value="3">sprukotechnologies.com</option>
                        <option value="4">sprukoinfo.com</option>
                        <option value="5">sprukotech.com</option>
                      </select>
                    </div>
                  </div>
                </div>
                <a className="dropdown-item  border-top" href="#">
                  <i className="dropdown-icon fe fe-edit mr-2"></i> Edit Profile
                </a>
                <a className="dropdown-item  border-top" href="#">
                  <i className="dropdown-icon fe fe-user mr-2"></i> Spruko
                  technologies
                </a>
                <a className="dropdown-item border-top" href="#">
                  <i className="dropdown-icon  fe fe-unlock mr-2"></i> Add
                  Another Account
                </a>
                <a className="dropdown-item  border-top" href="#">
                  <i className="dropdown-icon fe fe-mail mr-2"></i> Message
                </a>
                <a className="dropdown-item  border-top" href="#">
                  <i className="dropdown-icon fe fe-help-circle mr-2"></i> Need
                  Help?
                </a>
                <div className="card-body border-top">
                  <h6>Followers</h6>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="followers">
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1"
                          data-image-src="../../assets/img/faces/3.jpg"
                        >
                          <span className="avatar-status bg-green"></span>
                        </a>
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1"
                          data-image-src="../../assets/img/faces/6.jpg"
                        >
                          <span className="avatar-status bg-red"></span>
                        </a>
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1"
                          data-image-src="../../assets/img/faces/3.jpg"
                        >
                          <span className="avatar-status bg-warning"></span>
                        </a>
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1"
                          data-image-src="../../assets/img/faces/4.jpg"
                        >
                          <span className="avatar-status bg-green"></span>
                        </a>
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1"
                          data-image-src="../../assets/img/faces/9.jpg"
                        >
                          <span className="avatar-status bg-warning"></span>
                        </a>
                        <a
                          href="#"
                          className="avatar brround avatar-md cover-image m-1 follwers"
                        >
                          +34
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body border-top border-bottom">
                  <div className="row">
                    <div className="col-4 text-center">
                      <a className="" href="">
                        <i className="dropdown-icon mdi  mdi-message-outline fs-20 m-0 leading-tight"></i>
                      </a>
                      <div>Inbox</div>
                    </div>
                    <div className="col-4 text-center">
                      <a className="" href="">
                        <i className="dropdown-icon mdi mdi-tune fs-20 m-0 leading-tight"></i>
                      </a>
                      <div>Settings</div>
                    </div>
                    <div className="col-4 text-center">
                      <a className="" href="">
                        <i className="dropdown-icon mdi mdi-logout-variant fs-20 m-0 leading-tight"></i>
                      </a>
                      <div>Sign out</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab1">
              <div className="chat">
                <div className="contacts_card">
                  <div className="input-group mb-0 p-3">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control search"
                    />
                    <div className="input-group-prepend mr-0">
                      <span className="input-group-text  search_btn  btn-primary">
                        <i className="fa fa-search text-white"></i>
                      </span>
                    </div>
                  </div>
                  <ul className="contacts mb-0">
                    <li className="active">
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/12.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Maryam Naz</h5>
                          <small className="text-muted">is online</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>01-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/2.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className=" online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Sahar Darya</h5>
                          <small className="text-muted">left 7 mins ago</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>01-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/5.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Maryam Naz</h5>
                          <small className="text-muted">online</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>01-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/7.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Yolduz Rafi</h5>
                          <small className="text-muted">online</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>02-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/8.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Nargis Hawa</h5>
                          <small className="text-muted">30 mins ago</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>02-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/3.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Khadija Mehr</h5>
                          <small className="text-muted">50 mins ago</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>03-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/14.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                          <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Petey Cruiser</h5>
                          <small className="text-muted">1hr ago</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>03-02-2019</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight w-100">
                        <div className="img_cont">
                          <img
                            src="../../assets/img/faces/11.jpg"
                            className="rounded-circle user_img"
                            alt="img"
                          />
                        </div>
                        <div className="user_info">
                          <h5 className="mt-1 mb-1">Khadija Mehr</h5>
                          <small className="text-muted">2hr ago</small>
                        </div>
                        <div className="float-right text-right ml-auto mt-auto mb-auto">
                          <small>03-02-2019</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab2">
              <div className="list d-flex align-items-center border-bottom p-3 mt-3">
                <div className="">
                  <span className="avatar bg-primary brround avatar-md">
                    CH
                  </span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>New Websites is Created</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">30 mins ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-danger brround avatar-md">N</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Prepare For the Next Project</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">2 hours ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-info brround avatar-md">S</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Decide the live Discussion Time</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">3 hours ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-warning brround avatar-md">K</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Team Review meeting</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">4 hours ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-success brround avatar-md">R</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">1 days ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center  border-bottom p-3">
                <div className="">
                  <span className="avatar bg-pink brround avatar-md">MS</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">1 days ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-purple brround avatar-md">L</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">
                        45 mintues ago
                      </small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center border-bottom p-3">
                <div className="">
                  <span className="avatar bg-primary brround avatar-md">
                    CH
                  </span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>New Websites is Created</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">30 mins ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list d-flex align-items-center p-3">
                <div className="">
                  <span className="avatar bg-blue brround avatar-md">U</span>
                </div>
                <div className="wrapper w-100 ml-3">
                  <p className="mb-0 d-flex">
                    <b>Prepare for Presentation</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted mr-1"></i>
                      <small className="text-muted ml-auto">2 days ago</small>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab3">
              <div className="mt-3">
                <div className="d-flex p-3">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      checked=""
                    />
                    <span className="custom-control-label">Do Even More..</span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox2"
                      value="option2"
                      checked=""
                    />
                    <span className="custom-control-label">Find an idea.</span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox3"
                      value="option3"
                      checked=""
                    />
                    <span className="custom-control-label">
                      Hangout with friends
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox4"
                      value="option4"
                    />
                    <span className="custom-control-label">
                      Do Something else
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox5"
                      value="option5"
                    />
                    <span className="custom-control-label">
                      Eat healthy, Eat Fresh..
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox6"
                      value="option6"
                      checked=""
                    />
                    <span className="custom-control-label">
                      Finsh something more..
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox7"
                      value="option7"
                      checked=""
                    />
                    <span className="custom-control-label">
                      Do something more
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox8"
                      value="option8"
                    />
                    <span className="custom-control-label">
                      Updated more files
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox9"
                      value="option9"
                    />
                    <span className="custom-control-label">System updated</span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="d-flex p-3 border-top border-bottom">
                  <label className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox10"
                      value="option10"
                    />
                    <span className="custom-control-label">
                      Settings Changings...
                    </span>
                  </label>
                  <span className="ml-auto">
                    <a href="#">
                      <i
                        className="si si-pencil text-primary mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Edit"
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="si si-trash text-danger mr-2"
                        data-toggle="tooltip"
                        title=""
                        data-placement="top"
                        data-original-title="Delete"
                      ></i>
                    </a>
                  </span>
                </div>
                <div className="text-center pt-5">
                  <a href="#" className="btn btn-primary">
                    Add more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Right-sidebar-closed --></div>   */}
      <mainSideBar />
    </>
  );
}
export default Sidebar;
