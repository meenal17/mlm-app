import React from "react";
import EnhancedTable from "./Table";

function Payouttable2() {
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
        <div className="col-lg-2 col-sm-4">
          <select class="form-control">
            <option>Bank Transfer</option>
            <option>Block Chain</option>
            <option>Paypal</option>
            <option>Bitgo</option>
          </select>
        </div>
        <div className="col-lg-2 col-sm-3">
          <select class="form-control">
            <option>Manual User</option>
            <option>Request</option>
          </select>
        </div>
        <div className="col-lg-2 col-sm-3">
          <select class="form-control">
            <option>KYC verified</option>
            <option>KYC not verified</option>
          </select>
        </div>
        <div className="col-sm-2 col-lg-1 mr-2">
          <button className="btn btn-purple">Search</button>
        </div>
        <div className="col-sm-2 col-lg-1">
          <button className="btn btn-info">Reset</button>
        </div>
      </div>
      {/* table */}
      <EnhancedTable />
      {/* table end */}
    </>
  );
}

export default Payouttable2;
