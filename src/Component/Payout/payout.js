import React, {useState} from "react";
import Cards from "../Ewallet/Cards";
import {Link} from "react-router-dom";
import PayoutSortingTable1 from "./payoutSortingTable1";
import Payouttable2 from "./Payouttable2";
import Payouttable3 from "./Payouttable3";
function Payout() {
  return (
    <Link to="/payout">
      <>
        {/* heding */}
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          PayOut
        </div>
        {/* end heding */}
        <Cards />
      </>
      {/* tabs */}
      <div className="card p-2 mr-3 ml-3">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link linked active"
              href="#payout"
              role="tab"
              data-toggle="tab"
            >
              PayOut Summary
            </a>
          </li>
          <li class="nav-item linked">
            <a class="nav-link" href="#release" role="tab" data-toggle="tab">
              PayOut Release
            </a>
          </li>
          <li class="nav-item linked">
            <a class="nav-link" href="#payment" role="tab" data-toggle="tab">
              Prosess Payment
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane fade in active" id="payout">
            <PayoutSortingTable1 />
          </div>
          <div role="tabpanel" class="tab-pane fade" id="release">
            <Payouttable2 />
          </div>
          <div role="tabpanel" class="tab-pane fade" id="payment">
            <Payouttable3 />
          </div>
        </div>
      </div>
      {/* tabs end */}
    </Link>
  );
}

export default Payout;
