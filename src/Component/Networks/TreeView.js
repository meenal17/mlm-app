import React from "react";
import {Link} from "react-router-dom";
import Description from "../Dashboard/Description";
function TreeView() {
  return (
    <>
      <Link to="/TreeView">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          TreeView
        </div>
        <div className="card p-4 ml-2 mr-2">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6" style={{marginLeft: 1 + "px"}}>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Something clever.."
                  />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary mr-2 ml-2">
                      Search
                    </button>
                    <button type="button" class="btn btn-danger">
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <h3 style={{color: "grey", marginLeft: 8 + "px"}}>[binaryaddon]</h3>
        <hr></hr>
        <br />

        <div class="dropdown">
          <button
            // className="btn btn-outline-primary dropdown-toggle "
            className="btn btn-outline-info dropdown-toggle ml-5 mb-3"
            type="button"
            id="dropdownMenuButton1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user"></i>
            INF857335
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div class="dropdown mb-5">
          <button
            // className="btn btn-outline-primary dropdown-toggle "
            className="btn btn-outline-info dropdown-toggle ml-5 "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user"></i>
            INF857335
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              A
            </a>
            <a class="dropdown-item" href="#">
              An
            </a>
            <a class="dropdown-item" href="#">
              Something
            </a>
          </div>
          <br />
        </div>
      </Link>
      <div className="col-md-12">{/* <Description /> */}</div>
    </>
  );
}

export default TreeView;
