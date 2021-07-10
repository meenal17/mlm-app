import React from "react";
import "../Dashboard/style.css";
import {useTranslation} from "react-i18next";
function SearchLinkBar() {
  const {t, i18n} = useTranslation();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3
            style={{
              color: "grey",
              fontSize: 16 + "px",
              padding: 2 + "px",
            }}
          >
            {t("promotiontool.10")}
          </h3>
          <div className="row">
            <div className="col-sm-6">
              <div style={{marginLeft: 25 + "px"}}>
                <span>{t("ReplicaLink.11")}</span>

                <span className="search_icons">
                  <i className="fa fa-facebook-f ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                </span>
              </div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="" />
                <div class="input-group-append">
                  <button class="btn btn-outline-info" type="button">
                    {t("search.13")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div style={{marginLeft: 25 + "px"}}>
                {t("LeadCapture.12")}

                <span className="search_icons">
                  <i className="fa fa-facebook-f ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                </span>
              </div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="" />
                <div class="input-group-append">
                  <button class="btn btn-outline-info" type="button">
                    {t("search.13")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchLinkBar;
