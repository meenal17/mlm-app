import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const PaoutRelease = () => {
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
              {t("member name.68")}
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
              {t("TotalAmont.374")}
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
              {t("Tax.375")}
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
              {t("ServiceCharge.376")}
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
              {t("PaymentPayable.377")}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            Id="1"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
          />
          <RowComponent
            Id="2"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
          />
          <RowComponent
            Id="3"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
          />
          <RowComponent
            Id="4"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
          />
          <RowComponent
            Id="5"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
          />
          <RowComponent
            Id="6"
            invoice="0033009"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            date="12-03-2021"
            status="$88.40"
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
                {t("Id.157")}:{props.Id}
                {t("Invoice.136")}:{props.invoice}
                {t("Member Name.74")}: {props.MemberName}
              </p>
              <p className="card-text">
                {t("TotalAmont.374")}: {props.totalamount}
                <br />
                {props.date}
                <br />
                {props.status}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.invoice}</td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>
        <td className="d-none d-md-table-cell">{props.totalamount}</td>

        <td className="d-none d-md-table-cell">{props.date}</td>
        <td className="d-none d-md-table-cell">{props.status}</td>
      </tr>
    );
  }
  return (
    <Link to="/payoutrelease">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t("PayoutReleasedReport.154")}
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-sm-2">
                <div class="form-group">
                  <label for="exampleFormControlSelect1" className="text-dark">
                    {t("Status.160")}
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>{t("Released.392")}</option>
                    <option>{t("Pending.5")}</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    {t("Date Range.379")}
                  </label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>{t("Overall.364")}</option>
                    <option>{t("Month.365")}</option>
                    <option>{t("Year.366")}</option>
                    <option>{t("Today.367")}</option>
                    <option>{t("Custom.368")}</option>
                  </select>
                </div>
              </div>

              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-info">{t("Submit.369")}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-8"></div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fas fa-file mr-1"></i>
                {t("Createexcel.370")}
              </button>
            </div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fa fa-file-excel-o mr-1"></i>
                {t("CreateCSV.371")}
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
            <h5 className="mb-1">{t("CompanyName.401")}</h5>
            <h6 className="mb-1">{t("Companyaddress.402")} </h6>
            <h8 className=" mb-1">
              {t("Phone.386")}: 9999999999 <br />
              {t("Email.196")}:companyname@emil.com
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

export default PaoutRelease;
