import React from "react";
import {Link} from "react-router-dom";
import AddPurchase from "./AddPurchase";
import ManagePack from "./ManagePack";
import ManageCategory from "./ManageCategory";
const Cart = () => {
  return (
    <Link>
      <>
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-2 mt-4">
            <AddPurchase />
          </div>
        </div>
        <h5 className="ml-4 mt-2 mb-4" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          <span style={{color: "black"}}>Note</span> : This is an add-on module
        </h5>
        {/* tabs */}
        <div className="card mr-2 ml-2 ">
          <div className="row">
            <div className="col-md-12 mt-3">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item mr-3">
                  <a
                    class="nav-link linked active"
                    href="#profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    Manage Package
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link linked "
                    href="#buzz"
                    role="tab"
                    data-toggle="tab"
                  >
                    Manage Category
                  </a>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div class="tab-content">
                <div
                  role="tabpanel"
                  class="tab-pane fade in active"
                  id="profile"
                >
                  <ManagePack />
                </div>

                <div role="tabpanel" class="tab-pane fade" id="buzz">
                  <ManageCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Cart;
