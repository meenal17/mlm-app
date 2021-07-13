import React from "react";
import {useTranslation} from "react-i18next";
const Selectbox = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <select class="form-control">
            <option>{t("Active.174")}</option>
            <option>{t("Blocked.175")}</option>
          </select>
        </div>
        <div className="col-md-1 mr-1">
          <button className="btn btn-purple">{t("search.13")}</button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-info">{t("rest.57")}</button>
        </div>
      </div>
    </>
  );
};

export default Selectbox;
