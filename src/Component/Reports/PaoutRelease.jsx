import React from "react";
import {Link} from "react-router-dom";
const PaoutRelease = () => {
  return (
    <Link to="/payoutrelease">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Payout Released Report
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-sm-2">
                <div class="form-group">
                  <label for="exampleFormControlSelect1" className="text-dark">
                    Status
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Released</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div class="form-group">
                  <label for="exampleFormControlSelect1" className="text-dark">
                    Date Range
                  </label>
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
                <button className="btn btn-info">Submit</button>
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
                    Invoice
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
                    Total Amount
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Date
                  </th>

                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>PR00079 </td>

                  <td>Hugo Esteban Ramirez (DEMO9RT) </td>
                  <td>$ 26.00 </td>
                  <td>26 Nov 2020 - 05:03:15 AM </td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>PR00079 </td>

                  <td>Hugo Esteban Ramirez (DEMO9RT) </td>
                  <td>$ 26.00 </td>
                  <td>26 Nov 2020 - 05:03:15 AM </td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>PR00079 </td>

                  <td>Hugo Esteban Ramirez (DEMO9RT) </td>
                  <td>$ 26.00 </td>
                  <td>26 Nov 2020 - 05:03:15 AM </td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>PR00079 </td>

                  <td>Hugo Esteban Ramirez (DEMO9RT) </td>
                  <td>$ 26.00 </td>
                  <td>26 Nov 2020 - 05:03:15 AM </td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>PR00079 </td>

                  <td>Hugo Esteban Ramirez (DEMO9RT) </td>
                  <td>$ 26.00 </td>
                  <td>26 Nov 2020 - 05:03:15 AM </td>
                  <td>Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Link>
  );
};

export default PaoutRelease;