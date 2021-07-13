import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const PackageUpgrated = () => {
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
              {t("Old Package.387")}
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
              {t("Upgratedpackage.388")}
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
              {t("Amount.95")}
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
              {t("UpgradedPackage.389")}
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
              {t("UpgradedDate.390")}
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
                {t("Id.157")}:{props.Id}
                {t("Member Name.74")} : {props.membername}
              </p>
              <p className="card-text">
                {t(" Old Package.387")}:{props.oldpackage}
                <br />
                {t("UpgradedPackage.389")}:{props.PackageUpgrated}
                <br />
                {t("Amount.95")}:{props.amount}
                <br />
                {t(" Upgratedpackage.388")}:{props.package}
                <br />
                {t("UpgradedDate.390")}:{props.date}
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
          {t("PayoutReleasedReport.154")}
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="">
              <h4 className="text-dark">{t("EpinTransferReport.391")} </h4>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-2">
                <label className="text-dark">{t("username.65")}</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder=""
                ></input>
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
              <div
                className="col-md-1 col-lg-1 ml-2 p-3"
                style={{marginTop: "28px"}}
              >
                <button className="btn btn-purple">{t("rest.57")}</button>
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
              <h5 className="mb-1">{t("CompanyName.401")}</h5>
              <h6 className="mb-1">{t("Companyaddress.402")} </h6>
              <h8 className=" mb-1">
                {t("Phone.386")}: 9999999999 <br />
                {t("Email.196")}:companyname@emil.com
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
