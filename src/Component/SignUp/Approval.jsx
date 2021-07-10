import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function Approval() {
  const {t, i18n} = useTranslation();
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
              {t("Memeber Name.74")}{" "}
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
              {t("Sponsor.75")}
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
              {t("Package.33")}
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
              {t("Total Amount.88")}
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
              {t("Payment Method.89")}
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
              {t("Action.59")}
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
                {t("Sponsor.75")} {props.sponsor}
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
          {t("Approval Member.87")}
        </div>
        <div class="card mr-2 ml-2">
          <div className="card-body">
            <div className="container">
              <TableComponent />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-1 ml-4 mr-2">
              <button className="btn btn-primary">{t("Approve.90")}</button>
            </div>
            <div className="col-lg-1">
              <button className="btn btn-danger">{t("reject.91")}</button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Approval;
