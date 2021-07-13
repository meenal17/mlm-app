import React from "react";
import {useTranslation} from "react-i18next";
const UpdatePackage = (props) => {
  const {t, i18n} = useTranslation();
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <i
        type="button"
        class="fa fa-edit icon mt-3 ml-4 p-2"
        data-toggle="modal"
        data-target="#exampleModalLong"
        onClick={() => props.getform()}
      ></i>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
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
                (t{"UpdatePurchasePackage.338"})
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
              <h5 className="" style={{color: "grey"}}>
                {t("Id.157")} <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("Name.135")} <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("Category.94")} <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("Amount.95")} <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("pv.326")} <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("Desciption.114")}
                <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                {t("Productimage.337")}
                <span style={{color: "red"}}>*</span>
              </h5>
              <button type="button" class="btn btn-outline-success">
                {t("Change.334")}
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                {t("Savechanges.339")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePackage;
