import React from "react";

function Updatepv() {
  return (
    <>
      <div
        type="button"
        data-toggle="modal"
        data-target="#updatepv"
        className=""
        style={{color: "#7266ba"}}
      >
        Upadate PV
      </div>

      <div
        class="modal fade"
        id="updatepv"
        tabindex="-1"
        role="dialog"
        aria-labelledby="updatepvLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header content-header">
              <h5
                class="modal-title"
                id="updatepvLabel"
                style={{
                  color: "#fff",
                  marginLeft: "130px",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                <div
                  className="modal-icon2 "
                  style={{textAlign: "center", marginLeft: "30px"}}
                >
                  <i className="fa fa-edit mb-3"></i>
                </div>
                Upadate PV
              </h5>
            </div>
            <div class="modal-body">
              <div className="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputtext"
                    placeholder="Upadate Pv"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-indigo">
                Add PV
              </button>
              <button type="button" class="btn btn-outline-indigo">
                Deduct Pv
              </button>
              <button
                type="button"
                class="btn btn-outline-light"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updatepv;
