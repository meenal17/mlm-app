import React from "react";
import {Link} from "react-router-dom";
const TotalBonus = () => {
  return (
    <Link to="/totalBonus">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Profile Reports
        </div>
        <div className="card p-3  mr-2 ml-3">
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

              <div className="col-lg-4 col-sm-4">
                <div class="form-group">
                  <label
                    for="exampleFormControlSelect1"
                    style={{color: "grey"}}
                  >
                    Date Range{" "}
                    <span className="ml-1" style={{color: "red"}}>
                      *
                    </span>{" "}
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Overall</option>
                    <option>Today</option>
                    <option>This week</option>
                    <option>This Month</option>
                    <option>This year</option>
                  </select>
                </div>
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">Submit</button>
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
              <div className="col-lg-12 col-lg-8">
                <table class="table mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Members Name</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Service Charge</th>
                      <th scope="col">Amount Payable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default TotalBonus;
