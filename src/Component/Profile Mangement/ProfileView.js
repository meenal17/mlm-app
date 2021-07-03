import {red} from "@material-ui/core/colors";
import React from "react";
import {Link} from "react-router-dom";
import "../Profile Mangement/profilestyle.css";
import Modal2 from "./Modal2";
import Appcard from "./Appcard";
import Updatepv from "./Updatepv";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
function ProfileView() {
  return (
    <Link to="/Profile">
      <>
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Profile View
        </div>
        {/* header  ProfileView */}
        <div className="card mr-2 ml-2 pb-3 ">
          <div className="row pt-4 pb-1">
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <input
                class="form-control"
                type="text"
                placeholder="Default input"
              />
            </div>
            <div className="col-lg-1">
              <button className="btn btn-purple">Search</button>
            </div>
            <div className="col-lg-1 ">
              <button className="btn btn-info">Reset</button>
            </div>
          </div>
          {/* header end ProfileView */}
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <div class="main-profile-overview">
                  <div class="main-img-user profile-user">
                    <img alt="" src="/assets/img/dashboard/profile.jpg" />
                    <a
                      href="JavaScript:void(0);"
                      class="fas fa-camera profile-edit"
                    ></a>
                  </div>
                  <div class="d-flex justify-content-between mg-b-20">
                    <div></div>
                  </div>
                </div>

                {/* content */}
                <div className="">
                  <div className="content2">
                    <h4 className="name" style={{color: "grey"}}>
                      Salar khalid{" "}
                    </h4>
                    <h5 className="name2" style={{color: "grey"}}>
                      binaryaddon
                    </h5>
                    <p className="mail" style={{color: "grey"}}>
                      salarkalid155@gmail.com
                    </p>
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      className="button mb-3"
                      style={{color: "purple"}}
                    >
                      Change Password
                    </div>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header content-header">
                            <h5
                              class="modal-title"
                              id="exampleModalLabel"
                              style={{
                                color: "#fff",
                                marginLeft: "130px",
                                fontSize: "25px",
                              }}
                            >
                              <div className="modal-icon">
                                <i className="fa fa-lock mb-3"></i>
                              </div>
                              Change Password ?
                            </h5>
                          </div>
                          <div class="modal-body">
                            <div className="">
                              <div class="form-group">
                                <label
                                  for="exampleInputPassword1 "
                                  style={{color: "grey", float: "left"}}
                                >
                                  current Password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Current Password"
                                />
                                <label
                                  for="exampleInputPassword1 "
                                  style={{color: "grey", float: "left"}}
                                >
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="New Password"
                                />
                                <label
                                  for="exampleInputPassword1 "
                                  style={{color: "grey", float: "left"}}
                                >
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="Confirm Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-outline-light"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-indigo"
                            >
                              change Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Modal2 />
                </div>

                {/* content close */}
                {/* <!-- Button trigger modal --> */}
              </div>
            </div>
            {/* second column */}
            <div class="vertical"></div>
            <div className="col-md-7 mt-3 pb-2">
              <h4 style={{color: "black", fontSize: "25px"}}>
                <div
                  className="btn btn-outline-primary"
                  style={{float: "right"}}
                >
                  <i className="fa fa-th"></i>
                </div>
                Rank: <span style={{color: "#7266ba"}}>xyz</span>
              </h4>

              <h6 style={{color: "grey"}}>Membership packge:</h6>
              <h5 style={{color: "black"}}>Membership Pack:3</h5>
              <hr />
              <div className="row">
                {/* first */}
                <div
                  className="col-md-3"
                  style={{borderRight: "1px solid rgb(219, 215, 215)"}}
                >
                  <div className="p-1">
                    <h6 style={{color: "grey"}}>
                      <span>
                        <i
                          className="fas fa-arrow-right mr-2"
                          style={{
                            backgroundColor: "#DEC5F6",
                            padding: "8px",
                            borderRadius: "50%",
                            color: "black",
                          }}
                        ></i>
                      </span>
                      Personal PV
                    </h6>

                    <h4 className="ml-5" style={{color: "black"}}>
                      2080
                    </h4>
                    {/* Update PV */}
                    <Updatepv />
                  </div>
                </div>
                {/* second */}
                <div
                  className="col-md-3 "
                  style={{borderRight: "1px solid rgb(219, 215, 215)"}}
                >
                  <h6 style={{color: "grey"}}>
                    <span>
                      <i
                        className="fas fa-users mr-2"
                        style={{
                          backgroundColor: "#F9EAB4",
                          padding: "8px",
                          borderRadius: "50%",
                          color: "black",
                        }}
                      ></i>
                    </span>
                    Group PV
                  </h6>
                  <h4 className="ml-5" style={{color: "black"}}>
                    80503
                  </h4>
                </div>
                {/* third */}
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid rgb(219, 215, 215)",
                    padding: "5px",
                  }}
                >
                  <div className="ml-3">
                    <h6 style={{color: "grey"}}>
                      <span>
                        <i
                          className="fa fa-arrow-left mr-2"
                          style={{
                            backgroundColor: "#C5F6F0",
                            padding: "8px",
                            borderRadius: "50%",
                            color: "black",
                          }}
                        ></i>
                      </span>
                      Left Carry
                    </h6>
                    <h4 className="ml-5" style={{color: "black"}}>
                      8050
                    </h4>
                  </div>
                </div>
                {/* fourth */}
                <div
                  className="col-md-3"
                  style={{
                    borderRight: "1px solid rgb(219, 215, 215)",
                    padding: "5px",
                  }}
                >
                  <div className="ml-3">
                    <h6 style={{color: "grey"}}>
                      <span>
                        <i
                          className="fas fa-arrow-right mr-2"
                          style={{
                            backgroundColor: "#C5F6F0",
                            padding: "8px",
                            borderRadius: "50%",
                            color: "black",
                          }}
                        ></i>
                      </span>
                      Right Carry
                    </h6>
                    <h4 className="ml-5" style={{color: "black"}}>
                      10
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* <Appcard /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="card mt-2 ml-3 p-2">
              <Form1 />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mt-2 mr-3 p-2">
              <Form2 />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  ml-3 p-2">
              <Form3 />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card   p-2">
              <Form4 />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  mr-3 p-2">
              <Form5 />
            </div>
          </div>
        </div>

        {/* second card */}
      </>
    </Link>
  );
}

export default ProfileView;
