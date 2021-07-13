import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Activedeactive = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/active-deactiveprofile">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t("Activate/Deactivate Report.362")}
        </div>

        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-4">
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
                <i className="fas fa-file "></i>
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

        <div className="card mr-2 ml-2 p-2">
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
              {t("Phone.386")}: 9999999999 <br />
              {t("Email.196")}:companyname@emil.com
            </h8>
          </div>
          {/* table */}
          <div className="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    {t("member name.68")}
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    {t("Status.160")}
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "black",
                      textTransform: "capitalize",
                      fontSize: "15px",
                    }}
                  >
                    {t("Date.372")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Adella Schoen (member1)</td>
                  <td>{t("Deactivated.373")}</td>
                  <td>12 Mar 2021 - 08:45:05 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Activedeactive;
