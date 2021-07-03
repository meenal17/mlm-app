import React from "react";
import {Link} from "react-router-dom";
const Commission = () => {
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
              TotalAmont
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
              Tax
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
              Service Charge
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
              Payment Payable
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            Id="1"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
          />
          <RowComponent
            Id="2"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
          />
          <RowComponent
            Id="3"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
          />
          <RowComponent
            Id="4"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
          />
          <RowComponent
            Id="5"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
          />
          <RowComponent
            Id="6"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            tax="$38.0"
            servicecharge="$88.40"
            payable="$38.0"
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
                TotalAmont: {props.totalamount}
                <br />
                {props.tax}
                <br />
                {props.servicecharge}
                <br />
                {props.payable}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>
        <td className="d-none d-md-table-cell">{props.totalamount}</td>
        <td className="d-none d-md-table-cell">{props.tax}</td>
        <td className="d-none d-md-table-cell">{props.servicecharge}</td>
        <td className="d-none d-md-table-cell">{props.payable}</td>
      </tr>
    );
  }
  return (
    <Link to="/commission">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          User Commission Joinig
        </div>

        <div className="card p-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <label for="">Username</label>

                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="col-lg-2 col-sm-2">
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
              <div className="col-lg-4 col-sm-2">
                <label for="">Commission Type</label>

                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                />
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
            <div className="container mt-3">
              <TableComponent />
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Commission;
