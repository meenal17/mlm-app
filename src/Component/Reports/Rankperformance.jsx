import React from "react";
import {Link} from "react-router-dom";
const Rankperformance = () => {
  return (
    <Link to="/rankperformane">
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
        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <img
                  src="../../assets/img/brand/logo.png"
                  alt=""
                  style={{width: "20%", height: "23%", marginBottom: "15px"}}
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
            <div className=" mt-3 text-center text-dark">
              <h5>Rank Performance Report</h5>
              <hr />
            </div>
            <div className="row mt-4 text-center">
              <div
                className="col-lg-6 col-sm-4 text-dark "
                style={{fontSize: "18px", fontWeight: "bold"}}
              >
                <h6>Member Name</h6>
                <br />
                <h6>Current Rank</h6>
                <br />
                <h6> Next Rank</h6>
                <br />
                <h6>Current Referral Count</h6>
                <br />
                <h6>Referral count for hghgj</h6>
                <br />
                <h6>Needed Referral Count</h6>
                <br />
              </div>
              <div
                className="col-lg-6 col-sm-4 "
                style={{color: "grey", fontSize: "18px", fontWeight: "bold"}}
              >
                <h6>salar khalid(binaryaddon)</h6>
                <br />
                <h6>hgfhfh </h6>
                <br />
                <h6>hgfhfh </h6>
                <br />
                <h6>97</h6>
                <br />
                <h6>123</h6>
                <br />
                <h6>26</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Rankperformance;
