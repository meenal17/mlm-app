import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
function Form1() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  return (
    <>
      <div className=" mr-3 ml-3 mt-3" style={{marginBottom: "85px"}}>
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
          Personal Details
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              First Name{" "}
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Last Name{" "}
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label style={{color: "grey"}}>
              Gender
              <span className="ml-1" style={{color: "red"}}>
                *
              </span>
            </label>
            <select class="form-control" disabled={disable}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <label style={{color: "grey"}}>
            Date Of Birth
            <span className="ml-1" style={{color: "red"}}>
              *
            </span>
          </label>
          <div
            style={{
              margin: "auto",
              display: "block",
              width: "fit-content",
            }}
          >
            <TextField
              disabled={disable}
              id="date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
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

export default Form1;
