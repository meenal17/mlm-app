import React from "react";
import "./signUpStyle.css";
import {Link} from "react-router-dom";
function Register() {
  return (
    <>
      <Link to="/Register">
        <div class="alert alert-light mr-2 ml-2" style={{fontSize: 22 + "px"}}>
          Refferal Member
        </div>
        {/* <div className="container-2">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ul className="progres">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div> */}
        <div class="container-fluid">
          <div class="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-body">
                  <div
                    className="m-3"
                    style={{textAlign: "center", color: "grey"}}
                  >
                    <h4>Sponsor And Package Information</h4>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <form>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="title-name"
                          >
                            Sponser Username
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="title-name"
                          >
                            Sponser fullname
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="FullName"
                          />
                          <div class="form-group">
                            <label
                              for="exampleFormControlSelect1"
                              class="title-name"
                            >
                              Levels
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>All</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label
                              for="exampleFormControlSelect1"
                              class="title-name"
                            >
                              Product
                            </label>
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                              <option>select Product</option>
                            </select>
                          </div>
                          <div style={{textAlign: "center"}}>
                            <button className="btn btn-primary">Next</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Link>
      <div className="mr-2 ml-2"></div>
    </>
  );
}

export default Register;
