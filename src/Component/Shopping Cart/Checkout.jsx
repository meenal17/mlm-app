import React from "react";
import {Link} from "react-router-dom";
import PackageTable from "./PackageTable";
import {useTranslation} from "react-i18next";
const Checkout = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/checkout">
      <>
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          {t("checkout.37")}
        </div>
        <h5 className="ml-4 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          {t("onmodule.113")}
        </h5>
        <div className="ml-4 mt-5 mr-4">
          <h4 className="checkout-heading">{t("CheckoutSteps.346")}</h4>
          <hr />
        </div>
        <div className=" mr-3 ml-3">
          <div className="card ">
            <div className="card -title">
              <h4
                className=" mt-4 ml-4"
                style={{
                  color: " rgb(66, 65, 65)",
                }}
              >
                {t("package.33")}
              </h4>

              <div className="card-body">
                <PackageTable />
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Checkout;
