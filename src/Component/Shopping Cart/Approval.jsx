import React, {useState} from "react";
import {Link} from "react-router-dom";
import CheckBox from "../Profile Mangement/CheckBox";
import EditMemeber from "../Package/EditMemeber";

const Approvalshopping = () => {
  const [checked, setchecked] = useState(false);
  return (
    <>
      <Link to="/approval2">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Approval
        </div>
        <h5 className="ml-4 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          <span style={{color: "black"}}>Note</span> : This is an add-on module
        </h5>
        {/* Table */}
        <div>
          <div className="card p-3">
            <div className="card-title p-2">
              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-4">
                  <input
                    class="form-control"
                    type="text"
                    placeholder=" input"
                  />
                </div>
                <div className=" ml-1">
                  <div className="btn btn-purple">Search</div>
                </div>
                <div className="col-md-1">
                  <div className="btn btn-info">Reset</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          <input
                            type="checkbox"
                            class="check-btn"
                            checked={checked}
                            onClick={() => setchecked(!checked)}
                          />
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                          }}
                        >
                          #
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                          }}
                        >
                          Invoice No
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Members Name
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Total Amount
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Payment Method
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Order Detail
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <CheckBox checkall={checked} />
                        </td>
                        <td>1</td>
                        <td>salar khalid </td>
                        <td>RPCHSE1043</td>
                        <td> $ 2,700.00 </td>

                        <td>Bank Transfer</td>
                        <td>27 Feb 2021 - 07:53:05 AM</td>

                        <i
                          className="fas fa-eye p-2 ml-4 mt-2"
                          style={{backgroundColor: "grey", color: "black"}}
                        ></i>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn btn-purple">Approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Approvalshopping;
