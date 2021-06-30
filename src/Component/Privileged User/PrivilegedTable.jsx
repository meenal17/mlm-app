import React, {useState} from "react";
import CheckBox from "../Profile Mangement/CheckBox";
const PrivilegedTable = () => {
  const [checked, setchecked] = useState(false);

  return (
    <>
      <div className="card mr-2 ml-2">
        <div className="row mt-2 ">
          <div className="col-md-3 ml-2 p-4">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
              />
            </div>
          </div>
          <div className="col-md-1  p-4 mr-1">
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
          <div className="col-md-12 ">
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
                    Name
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                    }}
                  >
                    Mobile
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Email
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
                  <td>xyz</td>
                  <td>test1@gamil.com</td>
                  <td>23456789</td>

                  <td>
                    <i
                      className="fa fa-edit p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-key p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-cog p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fas fa-pen p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>xyz</td>
                  <td>test1@gamil.com</td>
                  <td>23456789</td>

                  <td>
                    <i
                      className="fa fa-edit p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-key p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-cog p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fas fa-pen p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>xyz</td>
                  <td>test1@gamil.com</td>
                  <td>23456789</td>

                  <td>
                    <i
                      className="fa fa-edit p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-key p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-cog p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fas fa-pen p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>xyz</td>
                  <td>test1@gamil.com</td>
                  <td>23456789</td>

                  <td>
                    <i
                      className="fa fa-edit p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-key p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-cog p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fas fa-pen p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>xyz</td>
                  <td>test1@gamil.com</td>
                  <td>23456789</td>

                  <td>
                    <i
                      className="fa fa-edit p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-key p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fa fa-cog p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                    <i
                      className="fas fa-pen p-2 mr-1"
                      style={{backgroundColor: "lightgrey", color: "black"}}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col-lg-6">
              <nav
                aria-label="Page navigation example"
                style={{float: "right"}}
              >
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
    </>
  );
};

export default PrivilegedTable;
