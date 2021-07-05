import React from "react";
import "./style.css";
function FontLinks() {
  return (
    <>
      <div className="card p-2">
        <div className="row">
          <div className="col-lg-12 col-sm-2 font-icons">
            <div className=" d-flex" style={{justifyContent: "space-around"}}>
              <div className=" col-lg-1">
                <i className="fa fa-desktop"></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-calculator"></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-trophy "></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-history"></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-credit-card "></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-user-plus"></i>
              </div>
              <div className=" col-lg-1">
                <i className="fa fa-envelope"></i>
              </div>
              <div className=" col-lg-1">
                <i className="fas fa-key"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FontLinks;
