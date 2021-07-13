import React from "react";
import {useTranslation} from "react-i18next";
const Addnewmember = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{float: "right"}}
      >
        {t("NewPackage.327")}{" "}
        <i className="fa fa-plus" style={{color: "#fff"}} />
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                style={{color: "#3b5698", fontSize: "25px"}}
              >
                {t("AddMembershipPackage.340")}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5 className="">{t("Id.157")}</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="">{t("Name.135")}</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="">{t("Amount.95")}</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="">{t("pv.326")}</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-purple">
                {t("AdvancedConfigration.329")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addnewmember;
