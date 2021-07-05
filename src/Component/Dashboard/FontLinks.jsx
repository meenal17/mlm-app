import React from "react";
import "./style.css";
function FontLinks() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-sm-4 font-icons">
          <div
            className=" d-flex"
            style={{justifyContent: "space-between", textAlign: "center"}}
          >
            <div className="">
              <i className="fa fa-desktop"></i>
              <p className="icons-text">Commission</p>
            </div>
            <div>
              <i className="fa fa-calculator"></i>
              <p className="icons-text">Compensation</p>
            </div>
            <div>
              <i className="fa fa-trophy "></i>
              <p className="icons-text">Rank</p>
            </div>
            <div>
              <i className="fa fa-history"></i>
              <p className="icons-text">Payout</p>
            </div>
            <div>
              <i className="fa fa-credit-card "></i>
              <p className="icons-text">Payout</p>
            </div>
            <div>
              <i className="fa fa-user-plus"></i>
              <p className="icons-text">SignUp</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p className="icons-text d-flex">Mail</p>
            </div>
            <div>
              <i className="fas fa-key"></i>
              <p className="icons-text d-flex">Api Key</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FontLinks;
