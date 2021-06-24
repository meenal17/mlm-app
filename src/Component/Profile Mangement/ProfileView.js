import {red} from "@material-ui/core/colors";
import React from "react";
import {Link} from "react-router-dom";
import "../Profile Mangement/profilestyle.css";
import Modal2 from "./Modal2";
import Appcard from "./Appcard";
function ProfileView() {
  return (
    <Link to="/Profile">
      <>
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Profile View
        </div>
        {/* header  ProfileView */}
        <div className="card mr-2 ml-2 ">
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
                <img
                  src="/assets/img/dashboard/profile.jpg"
                  alt=""
                  style={{width: "50%", height: "50%"}}
                />
                <label
                  for="imageUpload"
                  style={{position: "absolute", bottom: 0}}
                >
                  <i
                    className="fas fa-pen profile-icon"
                    style={{marginLeft: "20px"}}
                  ></i>
                </label>

                <div className="avatar-edit">
                  <input
                    id="imageUpload"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    style={{display: "none"}}
                  />
                </div>
                {/* content */}
                <div className="">
                  <div className="content">
                    <h4 className="name">Salar khalid </h4>
                    <h5 className="name2">binaryaddon</h5>
                    <p className="mail">salarkalid155@gmail.com</p>
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      className="button mb-3"
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
              <div
                className="col-md-3"
                style={{borderRight: "1px solid rgb(219, 215, 215)"}}
              >
                <div className="ml-3">
                  <h6>
                    <span>
                      <i className="fas fa-user mr-2"></i>
                    </span>
                    PersonalPV
                  </h6>
                  <h4>1245734</h4>
                  Update PV
                </div>
              </div>
            </div>

            {/* <Appcard /> */}
          </div>
        </div>
      </>
    </Link>
  );
}

export default ProfileView;
