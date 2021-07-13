import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const TotalBonus = () => {
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
                {t("Id.157")}:{props.Id}
                {t("Name.135")}: {props.MemberName}
              </p>
              <p className="card-text">
                {t("TotalAmont.374")}: {props.totalamount}
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
    <Link to="/totalBonus">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t("ProfileReports.393")}
        </div>
        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  {t("Username.128")}
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>

              <div className="col-lg-4 col-sm-4">
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
                <button className="btn btn-purple">{t("Submit.369")}</button>
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
                <i className="fa fa-file-excel mr-1"></i> {t("CreateCSV.371")}
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
                  <h5 className="mb-1">{t("CompanyName.401")}</h5>
                  <h6 className="mb-1">{t("Companyaddress.402")} </h6>
                  <h8 className=" mb-1">
                    Phone: 9999999999 <br />
                    Email:companyname@emil.com
                  </h8>
                </div>
              </div>
              <div className="col-lg-12 col-lg-8">
                <div className="container mt-3">
                  <TableComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default TotalBonus;
