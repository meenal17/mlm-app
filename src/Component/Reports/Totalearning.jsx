import React from "react";
import {Link} from "react-router-dom";

const Totalearning = () => {
  return (
    <Link to="/totalearning">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          Total Earning
        </div>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-8"></div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fas fa-file mr-1"></i>Create excel
              </button>
            </div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fa fa-file-excel-o mr-1"></i>Create CSV
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped mg-b-0 text-md-nowrap">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Member Name</th>
                      <th>Total Earning</th>
                      <th>Ewallet Balance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>salar khalid (binaryaddon)</td>
                      <td>$ 3,737.23 </td>
                      <td>$ 2,946.73 </td>
                      <td>
                        <i
                          className="fa fa-edit p-2 mr-1"
                          style={{backgroundColor: "lightgrey", color: "black"}}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>salar khalid (binaryaddon)</td>
                      <td>$ 3,737.23 </td>
                      <td>$ 2,946.73 </td>
                      <td>
                        <i
                          className="fa fa-edit p-2 mr-1"
                          style={{backgroundColor: "lightgrey", color: "black"}}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>salar khalid (binaryaddon)</td>
                      <td>$ 3,737.23 </td>
                      <td>$ 2,946.73 </td>
                      <td>
                        <i
                          className="fa fa-edit p-2 mr-1"
                          style={{backgroundColor: "lightgrey", color: "black"}}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>salar khalid (binaryaddon)</td>
                      <td>$ 3,737.23 </td>
                      <td>$ 2,946.73 </td>
                      <td>
                        <i
                          className="fa fa-edit p-2 mr-1"
                          style={{backgroundColor: "lightgrey", color: "black"}}
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>salar khalid (binaryaddon)</td>
                      <td>$ 3,737.23 </td>
                      <td>$ 2,946.73 </td>
                      <td>
                        <i
                          className="fa fa-edit p-2 mr-1"
                          style={{backgroundColor: "lightgrey", color: "black"}}
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Totalearning;
