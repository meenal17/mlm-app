import {fontSize} from "@material-ui/system";
import React from "react";
import {Link} from "react-router-dom";
const RankArchive = () => {
  return (
    <Link to="/rankarchive">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Rank Performance Report
        </div>
        <h5 className="ml-5 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          Note : This is an add-on module
        </h5>
        <div className="card p-3  mr-3 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  Username{" "}
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-8"></div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fas fa-file mr-1"></i>Create excel
              </button>
            </div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fa fa-file-excel mr-1"></i>Create CSV
              </button>
            </div>
          </div>
        </div>
        <div className="card p-3  mr-2 ml-2 mt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <img
                  src="../../assets/img/brand/logo.png"
                  alt=""
                  style={{width: "55%", height: "23%", marginBottom: "15px"}}
                />
                <div
                  className="card-title"
                  style={{
                    textAlign: "left",
                    textTransform: "capitalize",
                    color: "grey",
                  }}
                >
                  <h5 className="mb-1"> Company Name</h5>
                  <h6 className="mb-1">Company address </h6>
                  <h8 className=" mb-1">
                    Phone: 9999999999 <br />
                    Email:companyname@emil.com
                  </h8>
                </div>
              </div>
            </div>
            <div class="col-xl-12 mt-4">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped mg-b-0 text-md-nowrap">
                    <thead>
                      <tr>
                        <th style={{color: "black", fontSize: "15px"}}>ID</th>
                        <th style={{color: "black", fontSize: "15px"}}>
                          New Rank
                        </th>
                        <th style={{color: "black", fontSize: "15px"}}>
                          Member Name
                        </th>
                        <th style={{color: "black", fontSize: "15px"}}>
                          Rank Archive Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Silver</td>
                        <td>salar khalid(binaryaddon)</td>
                        <td>11 Nov 2020 - 10:09:56 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Silver</td>
                        <td>salar khalid(binaryaddon)</td>
                        <td>11 Nov 2020 - 10:09:56 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Silver</td>
                        <td>salar khalid(binaryaddon)</td>
                        <td>11 Nov 2020 - 10:09:56 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Silver</td>
                        <td>salar khalid(binaryaddon)</td>
                        <td>11 Nov 2020 - 10:09:56 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Silver</td>
                        <td>salar khalid(binaryaddon)</td>
                        <td>11 Nov 2020 - 10:09:56 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default RankArchive;
