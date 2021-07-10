import React, {useEffect, useState} from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import {useTranslation} from "react-i18next";
function Form2() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("countries");
  const [states, setStates] = useState([]);
  const [state, setState] = useState("states");
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  const {t, i18n} = useTranslation();
  useEffect(() => {
    const getData = async () => {
      await fetch("https://disease.sh/V3/covid-19/Countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((item) => ({
            name: item.country,
            value: item.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getData();
  }, []);

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };
  useEffect(() => {
    const getData = async () => {
      await fetch("https://disease.sh/v3/covid-19/states")
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data);
          const states = data.map((item) => {
            return item.state;
            //   value: item.stateInfo.iso2,
          });
          console.log(states);
          setStates(states);
        });
    };
    getData();
  }, []);

  const onStateChange = (e) => {
    setState(e.target.value);
  };
  const [phone, setPhone] = useState("");
  const handleOnChange = (value) => {
    setPhone(value);
  };
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
          {t("ContactDetails.190")}
        </h3>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("AddressLine1.191")}
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  disabled={disable}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("AddressLine2.192")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  disabled={disable}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <select
                  class="form-select form-control"
                  variant="outlined"
                  value={country}
                  onChange={onCountryChange}
                  disabled={disable}
                >
                  <options value="countries">{t("countries.193")}</options>
                  {countries.map((country) => (
                    <option value={country.value}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <select
                  class="form-select form-control"
                  variant="outlined"
                  value={country}
                  onChange={onStateChange}
                  disabled={disable}
                >
                  <options value="states">{t("countries.193")}</options>
                  {states.map((item) => (
                    <option value={state.value}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("City.194")}
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  disabled={disable}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("ZipCode.195")}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="usr"
                  disabled={disable}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("Email.196")}
                </label>

                <input
                  type="email"
                  class="form-control"
                  id=""
                  disabled={disable}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("Mobilenumber.197")}
                </label>
                <div>
                  <MuiPhoneNumber
                    defaultCountry={"us"}
                    onChange={handleOnChange}
                    disabled={disable}
                  />
                  ,{phone}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label for="usr" style={{color: "grey"}}>
                  {t("LandlineNumber.198")}
                </label>
                <div>
                  <MuiPhoneNumber
                    defaultCountry={"us"}
                    onChange={handleOnChange}
                    disabled={disable}
                  />
                  ,{phone}
                </div>
              </div>
            </div>
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

export default Form2;
