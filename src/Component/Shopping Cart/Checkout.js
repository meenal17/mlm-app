import React from "react";
import {Link} from "react-router-dom";
import PackageTable from "./PackageTable";
const Checkout = () => {
  return (
    <Link to="/checkout">
      <>
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Checkout
        </div>
        <h5 className="ml-4 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          <span style={{color: "black"}}>Note</span> : This is an add-on module
        </h5>
        <div className="ml-4 mt-5 mr-4">
          <h4 className="checkout-heading">Checkout Steps</h4>
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
                Packages
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
