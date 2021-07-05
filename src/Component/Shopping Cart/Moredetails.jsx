import React from "react";
import {Link} from "react-router-dom";

const Moredetails = () => {
  return (
    <Link to="/moredetails">
      <>
        <div className="">
          <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
            Shopping Cart
          </div>
          <div className="container-fluid">
            <div className="card">
              <h4 className="ml-4  mt-4" style={{color: "grey"}}>
                Purchase Pack 1
              </h4>
              <hr />
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <div style={{height: "100px"}}>
                        <img
                          src={"/assets/img/dashboard/shopping.jpg"}
                          class="card-img-top card-img"
                          alt="not found"
                        />
                      </div>
                    </div>
                    <div class="vertical"></div>

                    <div className="col-md-8">
                      <h6>
                        <p style={{color: "grey"}}>
                          Product Id :cart1 &nbsp;&nbsp;&nbsp; Price : $ 100.00
                          &nbsp;&nbsp;&nbsp; PV : 50 &nbsp;&nbsp;&nbsp;Category
                          : category1
                        </p>
                      </h6>

                      <form>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </form>

                      <div className="">
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          Total
                        </label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                              $
                            </span>
                          </div>

                          <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          Total PV
                        </label>

                        <input
                          class="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                        <label
                          for="exampleFormControlInput1"
                          style={{color: "grey"}}
                        >
                          Description
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Default input"
                        />
                        <div className="mt-4">
                          <div className="btn btn-purple ">Update Cart</div>
                          <span>
                            <div className="btn btn-info ml-1">Cancel</div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Moredetails;
