import React from "react";
import {Link} from "react-router-dom";
const Profile = () => {
  return (
    <Link to="/reportprofile">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Profile Reports
        </div>
        <div className="card p-3  mr-2 ml-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  Username{" "}
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-3  mr-2 ml-3 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  Enter Count
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-3  mr-2 ml-3 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  Enter Count start from
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-lg-4 col-sm-4">
                <label for="usr" style={{color: "grey"}}>
                  Enter Count
                  <span className="ml-1" style={{color: "red"}}>
                    *
                  </span>
                </label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div className="col-md-1 col-lg-1" style={{marginTop: "28px"}}>
                <button className="btn btn-purple">View</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Profile;
