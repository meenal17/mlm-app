import React from "react";

const EditMemeber = () => {
  return (
    <>
      <i
        className="fa fa-edit icon mt-3 ml-4 p-2"
        data-toggle="modal"
        data-target="#exampleModal"
        style={{fontSize: 15 + "px"}}
      ></i>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                style={{color: "#3b5698", fontSize: "25px"}}
              >
                Update Membership Package
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5 className="mt-2">ID</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="mt-2">Name</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="mt-2">Amount</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="mt-2">PV</h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-purple">
                Advanced Configration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMemeber;
