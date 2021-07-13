import React from "react";
import "../Dashboard/style.css";
import {useTranslation} from "react-i18next";
function Description() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="card mr-2 ml-2">
        <div class="card-body mr-10">
          {/* first row */}
          <div className="row">
            <div className="col-sm-6">
              <p class="card-text mr-5" style={{color: "grey"}}>
                <i
                  className="fa fa-check-circle mr-2"
                  style={{color: "grey"}}
                ></i>
                {t(
                  "You are viewing shared demo Multiple users may try this demo simultaneously.424"
                )}
              </p>
              <p style={{color: "grey"}}>
                <i className="fa fa-check-circle" style={{color: "grey"}}></i>
                {t("Try custom demo as per your configurations.425")}
              </p>
            </div>
            <div className="col-sm-6">
              <p class="card-text mr-5" style={{color: "grey"}}>
                <i
                  className="fa fa-check-circle mr-2"
                  style={{color: "grey"}}
                ></i>
                {t(
                  "You are viewing shared demo Multiple users may try this demo simultaneously.424"
                )}
              </p>
              <p style={{color: "grey"}}>
                <i className="fa fa-check-circle" style={{color: "grey"}}></i>
                {t("Try custom demo as per your configurations.425")}
              </p>
            </div>
          </div>
          <hr />
          {/* second row */}
          <div className="row">
            <div className="col-sm-3">
              <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="icon-parent">
                  <i className="fa fa-newspaper fa-2x"></i>
                </div>
                <div className="content-parent">
                  <h6>{t("Infinite MLM Blog.426")}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="icon-parent">
                  <i className="fa fa-skype fa-2x"></i>
                </div>
                <div className="content-parent">
                  <h6>{t("Infinite MLM Blog.426")}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="icon-parent">
                  <i className="fa fa-whatsapp fa-2x"></i>
                </div>
                <div className="content-parent">
                  <h6>{t("Infinite MLM Blog.426")}</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className="icon-parent">
                  <i className="fa fa-envelope fa-2x"></i>
                </div>
                <div className="content-parent">
                  <h6>{t("Infinite MLM Blog.426")}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
