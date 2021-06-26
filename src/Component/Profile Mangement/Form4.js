import React, {useState} from "react";

function Form4() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  return (
    <>
      <div className=" mr-3 ml-3 mt-3" style={{marginBottom: "63%"}}>
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
          Payment Details
        </h3>
        <form>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Paypal Account
            </label>

            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="NA"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              Block Chain
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="NA"
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="usr" style={{color: "grey"}}>
              BitGo
            </label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder=""
              disabled={disable}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" style={{color: "grey"}}>
              Example select
            </label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              disabled={disable}
            >
              <option>Bank Transfer</option>
              <option>Block Chain</option>
              <option>PayPal</option>
              <option>BitGo</option>
            </select>
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

export default Form4;
