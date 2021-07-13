import React from "react";
import {useTranslation} from "react-i18next";
const EditRepurchase = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <i
        className="fa fa-edit icon mt-3 ml-4 p-2"
        data-toggle="modal"
        data-target="#exampleModal2"
        style={{fontSize: 15 + "px"}}
      ></i>
      <div
        class="modal fade"
        id="exampleModal2"
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
                {t("EditRepurchaseCategory.333")}
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
              <h5 className="mt-2">
                {t("Category.94")} <span style={{color: "red"}}>*</span>{" "}
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-purple">
                {t("Change.334")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRepurchase;
