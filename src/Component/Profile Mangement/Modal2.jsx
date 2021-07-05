import React from "react";

function Modal2() {
  return (
    <>
      <div
        type="button"
        data-toggle="modal"
        data-target="#exampleModal2"
        className="button"
        style={{color: "purple"}}
      >
        Change Transaction Password
      </div>

      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header content-header">
              <h5
                class="modal-title"
                id="exampleModal2Label"
                style={{
                  color: "#fff",
                  marginLeft: "35px",
                  fontSize: "25px",
                }}
              >
                <div className="modal-icon2">
                  <i
                    className="fa fa-key mb-3"
                    style={{textAlign: "center"}}
                  ></i>
                </div>
                Change Transacttion Password ?
              </h5>
            </div>
            <div class="modal-body">
              <div className="">
                <div class="form-group">
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    current Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Current Password"
                  />
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="New Password"
                  />
                  <label
                    for="exampleInputPassword1 "
                    style={{color: "grey", float: "left"}}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-indigo">
                change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal2;
