import React from "react";
import {Link} from "react-router-dom";
function KycDetails() {
  return (
    <>
      <Link to="/KycDetails">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          KYC Details
        </div>
        <div className="row">
          <div className="col-md-5 pb-5">
            <h5 className="ml-4 mt-2" style={{color: "grey"}}>
              <i
                class="fa fa-exclamation-circle bell mr-2 "
                style={{color: "#ffad31", fontSize: 25 + "px"}}
              />
              <span style={{color: "black"}}>Note</span> : This is an add-on
              module
            </h5>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="btn btn-info">
              <Link to="/Profile" style={{color: "#fff"}}>
                <i className="fa fa-arrow-left" /> Back
              </Link>
            </div>
          </div>
        </div>
        <div className="card mr-2 ml-2">
          <div className="row">
            <div className="col-md-3 p-2">
              <div class="form-group p-3">
                <label for="exampleFormControlSelect1" style={{color: "grey"}}>
                  Select Category
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Any</option>
                  <option>3453258</option>
                  <option>Passport</option>
                  <option>Driving License</option>
                  <option>Adhar Card</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div class="form-group p-3">
                <label for="exampleFormControlSelect1" style={{color: "grey"}}>
                  Status
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Any</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                  <option>Approved</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 p-2 mt-3">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput" style={{color: "grey"}}>
                    User Selecter
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-1 mr-1" style={{marginTop: "50px"}}>
              <button className="btn btn-purple">Search</button>
            </div>
            <div className="col-lg-1 ">
              <button className="btn btn-info" style={{marginTop: "50px"}}>
                Reset
              </button>
            </div>
          </div>
          <h6 className="ml-4 pb-2">
            <Link to="/kyc_settings" style={{color: "#19a9d5"}}>
              Manage KYC configuration?
            </Link>
          </h6>
        </div>
      </Link>
    </>
  );
}

export default KycDetails;
