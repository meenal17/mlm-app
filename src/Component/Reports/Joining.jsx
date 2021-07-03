import React from "react";
import {Link} from "react-router-dom";
const Joining = () => {
  function TableComponent(props = {}) {
    return (
      <table className="table">
        <thead className="d-none d-md-table-header-group">
          <tr>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              #
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Memeber Name
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Sponsor
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Package
            </th>

            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Registration Fee
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Payment Method
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              enrollmentdate
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            Id="1"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joining"
            enrollmentdate="22-09-2021"
          />
          <RowComponent
            Id="2"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joining"
            enrollmentdate="22-09-2021"
          />
          <RowComponent
            Id="3"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joinig"
            enrollmentdate="22-09-2021"
          />
          <RowComponent
            Id="4"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joining"
            enrollmentdate="22-09-2021"
          />
          <RowComponent
            Id="5"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joining"
            enrollmentdate="22-09-2021"
          />
          <RowComponent
            Id="6"
            MemberName="Your First Name (DEMOTF0)"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            registrationfee="$38.0"
            paymentmethod="Free Joining"
            enrollmentdate="22-09-2021"
          />
        </tbody>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell">
          <div className="card">
            <div className="card-body">
              <p class="card-title">
                ID:{props.Id}
                Name: {props.MemberName}
              </p>
              <p className="card-text">
                sponsor {props.sponsor}
                <br />
                {props.Package}
                <br />
                {props.registrationfee}
                <br />
                {props.enrollmentdate}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>
        <td className="d-none d-md-table-cell">{props.sponsor}</td>
        <td className="d-none d-md-table-cell">{props.Package}</td>
        <td className="d-none d-md-table-cell">{props.registrationfee}</td>
        <td className="d-none d-md-table-cell">{props.paymentmethod}</td>

        <td className="d-none d-md-table-cell ">{props.enrollmentdate}</td>
      </tr>
    );
  }
  return (
    <Link to="/joinings">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          User Joinig
        </div>

        <div className="card p-3 mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-4">
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
            <div className="container">
              <TableComponent />
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Joining;
