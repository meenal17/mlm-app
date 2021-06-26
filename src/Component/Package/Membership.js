import React, {useState} from "react";
import {Link} from "react-router-dom";
import Addnewmember from "./Addnewmember";
import CheckBox from "../Profile Mangement/CheckBox";
import EditMemeber from "./EditMemeber";

const Membership = () => {
  const [checked, setchecked] = useState(false);

  return (
    <>
      <Link to="/membership">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Membership
          <Addnewmember />
        </div>
        <div className="card mr-2 ml-2">
          <div className="row mt-2 ">
            <div className="col-md-3 ml-2 p-4">
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1 ">
                  <option>Active</option>
                  <option>Blocked</option>
                </select>
              </div>
            </div>
            <div className="col-md-1  p-4">
              <div class="form-group">
                <div className="btn btn-purple">Search</div>
              </div>
            </div>
            <div className="col-md-1  p-4">
              <div class="form-group">
                <div className="btn btn-info">Rest</div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="card">
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
                      ID
                    </th>
                    <th
                      style={{
                        fontSize: 15 + "px",
                        color: "black",
                      }}
                    >
                      Package
                    </th>
                    <th
                      style={{
                        fontSize: 15 + "px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Amount
                    </th>
                    <th
                      style={{
                        fontSize: 15 + "px",
                        color: "black",
                        fontWeight: "bold",
                        fontWeight: "bold",
                      }}
                    >
                      PV
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
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>

                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                  <tr>
                    <td>
                      <CheckBox checkall={checked} />
                    </td>
                    <td>pck1</td>
                    <td>ELITE PACKEt</td>
                    <td>$ 100.00 </td>
                    <td>50</td>
                    <td>0</td>
                    <EditMemeber />
                  </tr>
                </tbody>
              </table>
              <div className="col-lg-6">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a
                        class="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Membership;
