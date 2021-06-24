import React from "react";
import EnhancedTable2 from "./Table3";
function Payouttable3() {
  return (
    <>
      <div className="row mt-2">
        <div className="col-lg-3 col-sm-4">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="col-sm-1 col-lg-1 mr-1">
          <button className="btn btn-purple">Search</button>
        </div>
        <div className="col-sm-1 col-lg-1">
          <button className="btn btn-info">Reset</button>
        </div>
      </div>
      {/* table */}
      <EnhancedTable2 />
      {/* table */}
    </>
  );
}

export default Payouttable3;
