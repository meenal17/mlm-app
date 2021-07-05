import React from "react";
import {Link} from "react-router-dom";
function Approval() {
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
              <input type="checkbox" />
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
              Total Amount
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
              Action
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joining"
            Action=""
          />
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joining"
            Action=""
          />
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joinig"
            Action=""
          />
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joining"
            Action=""
          />
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joining"
            Action=""
          />
          <RowComponent
            checkbox=""
            MemberName="John"
            sponsor="binaoryaddon"
            Package="ELITE PACKEt (Amount: € 87.70 )"
            TotalAmont="$38.0"
            paymentmethod="Free Joining"
            Action=""
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
              <strong class="card-title">{props.MemberName}</strong>
              <p className="card-text">
                sponsor {props.sponsor}
                <br />
                {props.Package && `ISN ${props.isn}`}
              </p>
              <i
                className="fa fa-sitemap icon mt-3 ml-4 p-2"
                style={{fontSize: 15 + "px"}}
              ></i>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">
          {props.checkbox} <input type="checkbox" />{" "}
        </td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>
        <td className="d-none d-md-table-cell">{props.sponsor}</td>
        <td className="d-none d-md-table-cell">{props.Package}</td>
        <td className="d-none d-md-table-cell">{props.TotalAmont}</td>
        <td className="d-none d-md-table-cell">{props.paymentmethod}</td>

        <td className="d-none d-md-table-cell ">
          {props.Action}
          <i
            className="fa fa-sitemap icon mt-3 p-2 "
            style={{fontSize: 15 + "px"}}
          ></i>
        </td>
      </tr>
    );
  }
  return (
    <>
      <Link to="/Approval">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          Approval Member
        </div>
        <div class="card mr-2 ml-2">
          <div className="card-body">
            <div className="container">
              <TableComponent />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-1 ml-4 mr-2">
              <button className="btn btn-primary">Approve</button>
            </div>
            <div className="col-lg-1">
              <button className="btn btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Approval;
