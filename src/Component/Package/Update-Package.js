import React from "react";

const UpdatePackage = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <i
        type="button"
        class="fa fa-edit icon mt-3 ml-4 p-2"
        data-toggle="modal"
        data-target="#exampleModalLong"
      ></i>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
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
                Update Purchase Package
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
              <h5 className="" style={{color: "grey"}}>
                Product image<span style={{color: "red"}}>*</span>
              </h5>
              <button type="button" class="btn btn-outline-success">
                Change
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePackage;
