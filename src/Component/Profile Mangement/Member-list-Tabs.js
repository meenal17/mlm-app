import React, {useState} from "react";
import "../Profile Mangement/profilestyle.css";
import CheckBox from "./CheckBox";
export default function MemberlistTabs() {
  const [checked, setchecked] = useState(false);
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-4">
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
            />
          </div>
          <div className="col-lg-3">
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Active</option>
                <option>Block</option>
              </select>
            </div>
          </div>
          <div className="col-lg-1 mr-1">
            <button className="btn btn-purple">Search</button>
          </div>
          <div className="col-lg-1 ">
            <button className="btn btn-info">Reset</button>
          </div>
        </div>
        {/* Table */}
        <div className="row">
          <div className="col-md-12 mr-2 ml-2 mt-3">
            <table class="table table-hover">
              <thead>
                <tr className="">
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
                      fontWeight: "bold",
                    }}
                  >
                    Member Name
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Sponsor
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    email
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Mobile
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Joining Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    />
                    Jack xyz
                  </td>
                  <td>binaryaddon</td>
                  <td>youremail@email.com</td>
                  <td>1234567890</td>
                  <td>May 25, 2021, 6:55 pm</td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-lg-4 col-sm-3 mt-3">
                <h6 style={{color: "grey"}}>
                  Showing 1 to 10 of 1,881 entries
                </h6>
              </div>
              <div className="col-lg-2 col-sm-3">
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Row Pages</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
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
      </div>
    </>
  );
}
