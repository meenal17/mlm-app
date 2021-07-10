import React, {useState} from "react";
import {useTranslation} from "react-i18next";
function Form3() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className=" mr-3 ml-3 mt-3 mb-3">
        <span
          className=""
          style={{
            float: "right",
            color: "white",
            border: "2px solid #55489c",
            backgroundColor: "#55489c",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <i
            className="fas fa-pen"
            onClick={() => {
              setdisable(false);
              setshow("block");
            }}
          />
        </span>
        <h3 className="" style={{color: "black"}}>
          {t("BankDetails.199")}
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("BankName.200")}
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Bank Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("BranchName.201")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Branch Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("AccountHolder.202")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Account Holder"
              disabled={disable}
            />
          </div>

          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("AccountNumber.203")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Account Number"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("IfscCode.204")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Branch Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("PAN.205")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="PAN Number"
              disabled={disable}
            />
          </div>
          <div className="FormBtn" style={{display: show}}>
            <div className="btn btn-purple mt-3">{t("Update.187")}</div>
            <span>
              <div
                className="btn btn-outline-primary mt-3 ml-1"
                onClick={() => {
                  setdisable(true);
                  setshow("none");
                }}
              >
                {t("Cancel.188")}
              </div>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form3;
