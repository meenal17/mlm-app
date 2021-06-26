import React, {useState} from "react";
function Form3() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  return (
    <>
      <div className=" mr-3 ml-3 mt-3 mb-3">
        <span
          className=""
          style={{
            float: "right",
            color: "white",
            border: "2px solid #55489c",
            backgroundColor: "#55489c",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <i
            className="fas fa-pen"
            onClick={() => {
              setdisable(false);
              setshow("block");
            }}
          />
        </span>
        <h3 className="" style={{color: "black"}}>
          Bank Details
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Bank Name
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Bank Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Branch Name
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Branch Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Account Holder
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Account Holder"
              disabled={disable}
            />
          </div>

          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Account Number
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Account Number"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Ifsc Code
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Branch Name"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              PAN
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="PAN Number"
              disabled={disable}
            />
          </div>
          <div className="FormBtn" style={{display: show}}>
            <div className="btn btn-purple mt-3">Update</div>
            <span>
              <div
                className="btn btn-outline-primary mt-3 ml-1"
                onClick={() => {
                  setdisable(true);
                  setshow("none");
                }}
              >
                Cancel
              </div>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form3;
