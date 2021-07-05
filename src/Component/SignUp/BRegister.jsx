import React from "react";
import {Link} from "react-router-dom";
function BRegister() {
  return (
    <>
      <Link to="/BRegister">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          Bulk Register
        </div>
        <div className="card ml-3 mr-3">
          <div className="card p-4 ml-2 mr-2 ">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4" style={{marginLeft: 1 + "px"}}>
                  <label For="" style={{color: "grey"}} className="pl-2">
                    Select File
                  </label>
                  <div>
                    <input
                      class="form-control form-control-static ml-2"
                      type="file"
                      id="fileInput"
                      name="register_doc"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-1"
                  style={{
                    marginTop: 3 + "%",
                    width: 35 + "px",
                    height: 35 + "px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#7266ba",
                      width: 80 + "px",
                      height: 40 + "px",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Register
                  </button>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-3">
                  <div
                    style={{
                      marginTop: 17 + "%",
                    }}
                  >
                    <a
                      className="p-2 "
                      title="Download sample file"
                      style={{
                        backgroundColor: "#21c254",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      <i class="fa fa-download mr-2 "></i>
                      Download sample file
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default BRegister;
