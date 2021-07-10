import React from "react";
import "./signUpStyle.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function Register() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <Link to="/Register">
        <div class="alert alert-light mr-2 ml-2" style={{fontSize: 22 + "px"}}>
          {t("Refferal Member.77")}
        </div>
        <div class="container-fluid">
          <div class="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-body">
                  <div
                    className="m-3"
                    style={{textAlign: "center", color: "grey"}}
                  >
                    <h4>{t("Sponsor And Package Information.78")}</h4>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="title-name"
                          >
                            {t("Sponser Username.79")}
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="title-name"
                          >
                            {t("Sponser fullname.80")}{" "}
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="FullName"
                          />
                          <div class="form-group">
                            <label
                              for="exampleFormControlSelect1"
                              class="title-name"
                            >
                              {t("Levels.65")}
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>All</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label
                              for="exampleFormControlSelect1"
                              class="title-name"
                            >
                              {t("Product.81")}
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                            </select>
                          </div>
                          <div style={{textAlign: "center"}}>
                            <button className="btn btn-primary">
                              {t("Next.82")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Link>
      <div className="mr-2 ml-2"></div>
    </>
  );
}

export default Register;
