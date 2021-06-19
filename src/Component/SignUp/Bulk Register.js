import React from "react";
import {Link} from "react-router-dom";
import Description from "../Dashboard/Description";
function BulkRegister() {
  return (
    <>
      <Link to="/">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          Bulk Register
        </div>
        <div className="card">
          <card className="body">
            <div className="row">
              <div className="col-lg-8">
                <label For="">Select Folder</label>
                <div></div>
              </div>
            </div>
          </card>
        </div>
      </Link>
      <Description />
    </>
  );
}

export default BulkRegister;
