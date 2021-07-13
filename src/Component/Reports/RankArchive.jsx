import {fontSize} from "@material-ui/system";
import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const RankArchive = () => {
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
              {t("Rank.309")}
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
              {t("RankArchiveDate.397")}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            Id="1"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="2"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="3"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="4"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="5"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
          />
          <RowComponent
            Id="6"
            Rank="silver"
            MemberName="Your First Name (DEMOTF0)"
            totalamount="$38.0"
            rankdate="11 Nov 2020 - 10:09:56 AM"
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
                {t("Name.135")}: {props.Rank}
              </p>
              <p className="card-text">
                {t("Member Name.74")} : {props.MemberName}
                <br />
                {t("RankArchiveDate.397")}:{props.rankdate}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.Rank}</td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>

        <td className="d-none d-md-table-cell">{props.rankdate}</td>
      </tr>
    );
  }
  return (
    <Link to="/rankarchive">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t("RankPerformanceReport.398")}
        </div>
        <h5 className="ml-5 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          {t("onmodule.113")}
        </h5>
        <div className="card p-3  mr-3 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  {t("username.65")}
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">{t("View.394")}</button>
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
                <i className="fa fa-file-excel mr-1"></i>
                {t("CreateCSV.371")}
              </button>
            </div>
          </div>
        </div>
        <div className="card p-3  mr-2 ml-2 mt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <img
                  src="../../assets/img/brand/logo.png"
                  alt=""
                  style={{width: "55%", height: "23%", marginBottom: "15px"}}
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
            </div>
            <div class="col-xl-12 mt-4">
              <div class="card-body">
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

export default RankArchive;
