import React from "react";
import EnhancedTable from "./Table";
import {useTranslation} from "react-i18next";
function Payouttable2() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="row mt-2">
        <div className="col-lg-3 col-sm-4">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder={t("Username.128")}
          />
        </div>
        <div className="col-lg-2 col-sm-4">
          <select class="form-control">
            <option>{t("Bank Transfer.139")}</option>
            <option>{t("Block Chain.140")}</option>
            <option>{t("Paypal.141")}</option>
            <option>{t("Bitgo.142")}</option>
          </select>
        </div>
        <div className="col-lg-2 col-sm-3">
          <select class="form-control">
            <option>{t("Manual User.143")}</option>
            <option>{t("Request.144")}</option>
          </select>
        </div>
        <div className="col-lg-2 col-sm-3">
          <select class="form-control">
            <option>{t("KYC verified.145")}</option>
            <option>{t("KYCnotverified.146")}</option>
          </select>
        </div>
        <div className="col-sm-2 col-lg-1 mr-2">
          <button className="btn btn-purple">{t("search.13")}</button>
        </div>
        <div className="col-sm-2 col-lg-1">
          <button className="btn btn-info">{t("reset.67")}</button>
        </div>
      </div>
      {/* table */}
      <EnhancedTable />
      {/* table end */}
    </>
  );
}

export default Payouttable2;
