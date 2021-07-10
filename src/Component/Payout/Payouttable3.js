import React from "react";
import EnhancedTable2 from "./Table3";
import {useTranslation} from "react-i18next";
function Payouttable3() {
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

        <div className="col-sm-1 col-lg-1 mr-1">
          <button className="btn btn-purple">{t("search.13")}</button>
        </div>
        <div className="col-sm-1 col-lg-1">
          <button className="btn btn-info">{t("reset.67")}</button>
        </div>
      </div>
      {/* table */}
      <EnhancedTable2 />
      {/* table */}
    </>
  );
}

export default Payouttable3;
