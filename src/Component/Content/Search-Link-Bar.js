import React from "react";
import "../Dashboard/style.css";
function SearchLinkBar() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <div style={{marginLeft: 25 + "px"}}>
                Replica Link
                <span className="search_icons">
                  <i className="fa fa-facebook-f ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                </span>
              </div>
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
            <div className="col-sm-6">
              <div style={{marginLeft: 25 + "px"}}>
                Lead Capture
                <span className="search_icons">
                  <i className="fa fa-facebook-f ml-2"></i>
                  <i className="fa fa-twitter ml-2"></i>
                  <i className="fa fa-linkedin ml-2"></i>
                </span>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchLinkBar;
