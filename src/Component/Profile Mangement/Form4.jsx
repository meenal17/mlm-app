import React, {useState} from "react";
import {useTranslation} from "react-i18next";
function Form4() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className=" mr-3 ml-3 mt-3" style={{marginBottom: "63%"}}>
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
          {t("PaymentDetails.207")}
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("PaypalAccount.206")}
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="NA"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("Block Chain.140")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="NA"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("Bitgo.142")}
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder=""
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" style={{color: "grey"}}>
              Example select
            </label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              disabled={disable}
            >
              <option>{t("Bank Transfer.139")}</option>
              <option>{t("Block Chain.140")}</option>
              <option>{t("Paypal.141")}</option>
              <option>{t("Bitgo.142")}</option>
            </select>
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

export default Form4;
