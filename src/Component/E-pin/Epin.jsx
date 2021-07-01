import React from "react";
import Card from "./card";
import {Link} from "react-router-dom";
import EpinList from "./E-pinList";
import PendingRequest from "./PendingRequest";
const Epin = () => {
  return (
    <Link to="/Epin">
      <div
        class="alert alert-light p-1"
        style={{fontSize: 22 + "px", height: "50px"}}
      >
        Payout Released Report
      </div>
      <Card />
      <div className="container-fluid">
        <div className="card">
          <div className="card-title" style={{textTransform: "capitalize"}}>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#profile"
                  role="tab"
                  data-toggle="tab"
                >
                  E-pin List
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#buzz" role="tab" data-toggle="tab">
                  Pending Request
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="card-body">
            {/* <!-- Tab panes --> */}
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="profile">
                {/* E-pin List */}
                <EpinList />
              </div>
              <div role="tabpanel" class="tab-pane fade" id="buzz">
                {/* Pending Request */}
                <PendingRequest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Epin;
