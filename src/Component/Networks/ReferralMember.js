import React from "react";
import DownloadMember from "./DownloadMember";
import "./style.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function ReferralMember() {
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
              {t("Memeber Name.74")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
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
              }}
            >
              {t("levels.66")}
            </th>

            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {t("Joining Date.76")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {t("Action.59")}{" "}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            image=""
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
          />
          <RowComponent
            MemberName="John"
            sponsor="0123456789"
            level="1"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
            Action=" "
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
              <strong class="card-title">
                <img
                  className="mr-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                  }
                  alt="image not found"
                  style={{height: 45 + "px", width: 45 + "px"}}
                />
                {props.MemberName}
              </strong>
              <p className="card-text">
                sponsor{props.sponsor}
                <br />
                JoiningDate: {props.JoiningDate}
              </p>
              <i
                className="fa fa-sitemap icon mt-3 ml-4 p-2"
                style={{fontSize: 15 + "px"}}
              ></i>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell">
          {" "}
          <img
            className=" mr-3"
            src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
            alt="image not found"
            style={{height: 45 + "px", width: 45 + "px"}}
          />
          {props.MemberName}
        </td>
        <td className="d-none d-md-table-cell">{props.sponsor}</td>
        <td className="d-none d-md-table-cell">{props.level}</td>
        <td className="d-none d-md-table-cell">{props.JoiningDate}</td>

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
      <Link to="/ReferralMember">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          {t("Refferal Member.77")}
        </div>

        <div className="card ml-2 p-0 mr-2">
          <div className="card-body">
            <div class="row">
              <div className=" col-lg-3">
                <div className="card-text download-Content ">
                  <div class="textpurple">{t("Total DownLine Members.63")}</div>
                  <div class="textpurple mt-2">258</div>
                </div>
              </div>
              <div className=" col-lg-2">
                <div className="card-text download-Content2">
                  <div class="textgreen">{t("Total Levels.64")}</div>
                  <div class="textgreen">76</div>
                </div>
              </div>
              <div className=" col-lg-2">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">
                      {t("username.65")}
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </form>
              </div>
              <div className=" col-lg-2">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      {" "}
                      {t("levels.66")}
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>All</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-lg-1 mt-4 ml-0">
                <button className="btn btn-outline-primary">
                  {" "}
                  {t("search.13")}
                </button>
              </div>
              <div className="col-lg-1 mt-4 ml-0">
                <button className="btn btn-outline-info">
                  {" "}
                  {t("reset.67")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mr-2 ml-2">
          <div className="card-body">
            <div className="container">
              <TableComponent />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ReferralMember;
