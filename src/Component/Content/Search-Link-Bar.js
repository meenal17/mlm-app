import React from "react";
import "../Dashboard/style.css";
function SearchLinkBar() {
  return (
    <>
      <row className="col-lg-2">
        <div className="card p-0 m-2 ">
          {/* <div className="card-body"> */}
          <div style={{marginLeft: 25 + "px"}}>
            Replica Link
            <span className="search_icons">
              <i className="fa fa-facebook-f ml-2"></i>
              <i className="fa fa-twitter ml-2"></i>
              <i className="fa fa-linkedin ml-2"></i>
            </span>
            <span style={{marginLeft: 38 + "%"}}>
              Lead Capture
              <span className="search_icons">
                <i className="fa fa-facebook-f ml-2"></i>
                <i className="fa fa-twitter ml-2"></i>
                <i className="fa fa-linkedin ml-2"></i>
              </span>
            </span>
          </div>

          <div class="input-group">
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Something....................."
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-info" type="button">
                    search
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Something clever.."
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-info" type="button">
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </row>
    </>
  );
}
export default SearchLinkBar;
