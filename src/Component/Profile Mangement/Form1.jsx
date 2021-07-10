import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
function Form1() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className=" mr-3 ml-3 mt-3" style={{marginBottom: "85px"}}>
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
          {t("PersonalDetails.179")}
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("FirstName.180")}
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              {t("LastName.181")}
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label style={{color: "grey"}}>
              {t("Gender.182")}
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>
            <select class="form-control" disabled={disable}>
              <option>{t("Gender.182")}</option>
              <option>{t("Male.183")}</option>
              <option> {t("Female.184")}</option>
              <option>{t("other.185")}</option>
            </select>
          </div>
          <label style={{color: "grey"}}>
            {t("DOB.186")}
            <span className="ml-1" style={{color: "red"}}>
              *
            </span>
          </label>
          <div
            style={{
              margin: "auto",
              display: "block",
              width: "fit-content",
            }}
          >
            <TextField
              disabled={disable}
              id="date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
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

export default Form1;
