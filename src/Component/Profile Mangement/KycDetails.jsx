import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function KycDetails() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <Link to="/KycDetails">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          {t("KYC Details.319")}
        </div>
        <div className="row">
          <div className="col-md-5 pb-5">
            <h5 className="ml-4 mt-2" style={{color: "grey"}}>
              <i
                class="fa fa-exclamation-circle bell mr-2 "
                style={{color: "#ffad31", fontSize: 25 + "px"}}
              />
              {t("onmodule.113")}
            </h5>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="btn btn-info">
              <Link to="/Profile" style={{color: "#fff"}}>
                <i className="fa fa-arrow-left" /> {t("Back.320")}
              </Link>
            </div>
          </div>
        </div>
        <div className="card mr-2 ml-2">
          <div className="row">
            <div className="col-md-3 p-2">
              <div class="form-group p-3">
                <label for="exampleFormControlSelect1" style={{color: "grey"}}>
                  {t("SelectCategory.321")}
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Any</option>
                  <option>3453258</option>
                  <option>Passport</option>
                  <option>Driving License</option>
                  <option>Adhar Card</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div class="form-group p-3">
                <label for="exampleFormControlSelect1" style={{color: "grey"}}>
                  {t("Status.160")}
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Any</option>
                  <option>{t("Pending.5")}</option>
                  <option>{t("Rejected.322")}</option>
                  <option>{t("Approved.323")}</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 p-2 mt-3">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput" style={{color: "grey"}}>
                    {t("UserSelecter.324")}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-1 mr-1" style={{marginTop: "50px"}}>
              <button className="btn btn-purple">{t("search.13")}</button>
            </div>
            <div className="col-lg-1 ">
              <button className="btn btn-info" style={{marginTop: "50px"}}>
                {t("reset.67")}
              </button>
            </div>
          </div>
          <h6 className="ml-4 pb-2">
            <Link to="/kyc_settings" style={{color: "#19a9d5"}}>
              {t("Manage KYC configuration?.325")}
            </Link>
          </h6>
        </div>
      </Link>
    </>
  );
}

export default KycDetails;
