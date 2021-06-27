import React from "react";

const AddPurchase = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-purple "
        data-toggle="modal"
        data-target="#exampleModal"
        style={{float: "right"}}
      >
        New Package <i className="fa fa-plus ml-1" style={{color: "#fff"}} />
      </button>
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
                Add Purchase Package
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
              <h5 className="" style={{color: "grey"}}>
                ID <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                Name <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                Category <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                Amount <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              <h5 className="" style={{color: "grey"}}>
                PV <span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />

              <h5 className="" style={{color: "grey"}}>
                Desciption<span style={{color: "red"}}>*</span>
              </h5>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
              {/* <button className="btn btn-info">
                <input
                  class="form-control form-control-lg"
                  type="File"
                  placeholder=""
                />
              </button> */}
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

export default AddPurchase;
