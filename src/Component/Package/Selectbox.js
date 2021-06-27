import React from "react";

const Selectbox = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <select class="form-control">
            <option>Active</option>
            <option>Block</option>
          </select>
        </div>
        <div className="col-md-1 mr-1">
          <button className="btn btn-purple">Search</button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-info">Rest</button>
        </div>
      </div>
    </>
  );
};

export default Selectbox;
