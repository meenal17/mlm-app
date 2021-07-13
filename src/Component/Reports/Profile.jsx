import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Profile = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/reportprofile">
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
        <div className="card p-3  mr-2 ml-3 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  {t("EnterCount.395")}
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
        <div className="card p-3  mr-2 ml-3 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  {t("EnterCountstartfrom.396")}
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  {t("EnterCount.395")}
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
      </>
    </Link>
  );
};

export default Profile;
