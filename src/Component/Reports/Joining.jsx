import React from "react";
import {Link} from "react-router-dom";
const Joining = () => {
  return (
    <Link to="/joinings">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          User Joinig
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-4 mx-auto ">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Date Range</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Overall</option>
                    <option>Month</option>
                    <option>Year</option>
                    <option>Today</option>
                    <option>Custom</option>
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
                <i className="fa fa-file-excel-o mr-1"></i>Create CSV
              </button>
            </div>
          </div>
        </div>
        <div className="card mr-3 ml-3 p-3">
          <img
            src="../../assets/img/brand/logo.png"
            alt=""
            style={{width: "15%", height: "23%", marginBottom: "15px"}}
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
          {/* table */}
          <div className="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Member Name
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Sponsor
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Package
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Registration Fee
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Enrollment Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Your First Name (DEMOTF0) </td>
                  <td>member13</td>
                  <td>Membership Pack 3($ 300.00 )</td>
                  <td>$ 47.70 </td>
                  <td>Free Join</td>
                  <td>02 Dec 2019 - 12:00:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Joining;
