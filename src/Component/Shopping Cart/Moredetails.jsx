import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Moredetails = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/moredetails">
      <>
        <div className="">
          <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
            {t("ShoppingCart.347")}
          </div>
          <div className="container-fluid">
            <div className="card">
              <h4 className="ml-4  mt-4" style={{color: "grey"}}>
                {t("PurchasePack.348")}1
              </h4>
              <hr />
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <div style={{height: "100px"}}>
                        <img
                          src={"/assets/img/dashboard/shopping.jpg"}
                          class="card-img-top card-img"
                          alt="not found"
                        />
                      </div>
                    </div>
                    <div class="vertical"></div>

                    <div className="col-md-8">
                      <h6>
                        <p style={{color: "grey"}}>
                          {t("ProductId.349")} :{t("cart.350")}1
                          &nbsp;&nbsp;&nbsp; {t("Price.351")} : $ 100.00
                          &nbsp;&nbsp;&nbsp; {t("pv.326")} : 50
                          &nbsp;&nbsp;&nbsp;{t("Category.94")}:{" "}
                          {t("Category.94")}1
                        </p>
                      </h6>

                      <form>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </form>

                      <div className="">
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          {t("Total.352")}
                        </label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                              $
                            </span>
                          </div>

                          <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          {t("TotalPV.353")}
                        </label>

                        <input
                          class="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          {t("Description.114")}
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                        <div className="mt-4">
                          <div className="btn btn-purple ">
                            {t("UpdateCart.354")}
                          </div>
                          <span>
                            <div className="btn btn-info ml-1">
                              {t("Cancel.189")}
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Moredetails;
