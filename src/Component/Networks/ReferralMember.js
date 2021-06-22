import React from "react";
import DownloadMember from "./DownloadMember";
import {Link} from "react-router-dom";
function ReferralMember() {
  return (
    <>
      <Link to="/ReferralMember">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          Refferal Member
        </div>

        <div className="card ml-2 p-0 mr-2">
          <div className="card-body">
            <div class="row">
              <div className=" col-lg-3">
                <div className="card-text download-Content ">
                  <div class="textpurple">Total DownLine Members</div>
                  <div class="textpurple mt-2">258</div>
                </div>
              </div>
              <div className=" col-lg-2">
                <div className="card-text download-Content2">
                  <div class="textgreen">Total Levels</div>
                  <div class="textgreen">76</div>
                </div>
              </div>
              <div className=" col-lg-3">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </form>
              </div>
              <div className=" col-lg-2">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Levels</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>All</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-lg-1 mt-4 ml-0">
                <button className="btn btn-outline-primary">search</button>
              </div>
              <div className="col-lg-1 mt-4 ml-0">
                <button className="btn btn-outline-info">reset</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mr-2 ml-2">
          <div className="card-body">
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
                    Level
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
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>
                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>
                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
                <tr>
                  <td>
                    <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                    />
                    John
                  </td>
                  <td>binaryaddon</td>
                  <td>1</td>
                  <td>15 Feb 2021 - 06:49:31 PM</td>

                  <i
                    className="fa fa-sitemap icon mt-3 ml-4 p-2"
                    style={{fontSize: 15 + "px"}}
                  ></i>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card ml-5">
            <div className="card body">
              <nav aria-label="... ">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1 <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="page-item active">
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
      </Link>
    </>
  );
}

export default ReferralMember;
