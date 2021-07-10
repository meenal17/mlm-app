import React from "react";
import {useTranslation} from "react-i18next";
function Modal2() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div
        type="button"
        data-toggle="modal"
        data-target="#exampleModal2"
        className="button"
        style={{color: "purple"}}
      >
        {t("Change Password.302")}
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header content-header">
              <h5
                class="modal-title"
                id="exampleModal2Label"
                style={{
                  color: "#fff",
                  marginLeft: "35px",
                  fontSize: "25px",
                }}
              >
                <div className="modal-icon2">
                  <i
                    className="fa fa-key mb-3"
                    style={{textAlign: "center"}}
                  ></i>
                </div>
                {t("Change Transacttion Password.313")}?
              </h5>
            </div>
            <div class="modal-body">
              <div className="">
                <div class="form-group">
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    {t("currentPassword.303")}
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Current Password"
                  />
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    {t("NewPassword.304")}
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="New Password"
                  />
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    {t("ConfirmPassword.305")}
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-light"
                data-dismiss="modal"
              >
                {t("Close.314")}
              </button>
              <button type="button" class="btn btn-outline-indigo">
                {t("Change Password.302")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal2;
