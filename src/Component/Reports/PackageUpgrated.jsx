import React from "react";
import {Link} from "react-router-dom";
const PackageUpgrated = () => {
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
              MemberName
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
              Old Package
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
              Upgrated package
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
              Amount
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
              Upgraded Package
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
              Upgraded Date
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            Id="1"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="2"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="3"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="4"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="5"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="6"
            membername="YourFistName(binnoryaddon)"
            oldpackage="Elit(Packit)"
            PackageUpgrated="Membership Pack 2"
            amount="$100.00"
            package="Free Upgraded"
            date="11 Nov 2020 - 10:09:56 AM"
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
                MemberName : {props.membername}
              </p>
              <p className="card-text">
                Old Package :{props.oldpackage}
                <br />
                Upgrated Package:{props.PackageUpgrated}
                <br />
                Amount:{props.amount}
                <br />
                Upgrated Package:{props.package}
                <br />
                Date:{props.date}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.membername}</td>
        <td className="d-none d-md-table-cell">{props.oldpackage}</td>
        <td className="d-none d-md-table-cell">{props.PackageUpgrated}</td>
        <td className="d-none d-md-table-cell">{props.amount}</td>
        <td className="d-none d-md-table-cell">{props.package}</td>

        <td className="d-none d-md-table-cell">{props.date}</td>
      </tr>
    );
  }
  return (
    <Link to="/packageupgrated">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Payout Released Report
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="">
              <h4 className="text-dark">E-pin Transfer Report </h4>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-2">
                <label className="text-dark">UserName</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder=""
                ></input>
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
              <div
                className="col-md-1 col-lg-1 ml-2 p-3"
                style={{marginTop: "28px"}}
              >
                <button className="btn btn-purple">Rest</button>
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
        <div className="card mr-2 ml-2">
          <div className=" container-fluid">
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
          </div>
          {/* table */}

          <div className="container mt-3">
            <TableComponent />
          </div>
        </div>
      </>
    </Link>
  );
};

export default PackageUpgrated;
