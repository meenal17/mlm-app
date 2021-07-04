import React, {useState} from "react";
import "../Profile Mangement/profilestyle.css";
import CheckBox from "./CheckBox";
export default function MemberlistTabs() {
  const [checked, setchecked] = useState(false);
  function TableComponent(props = {}) {
    return (
      <table className="table">
        <thead className="d-none d-md-table-header-group">
          <tr>
            <th
              className="d-sm-none d-md-table-cell"
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
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Memeber Name
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Sponsor
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Email
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Mobile
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Joining Date
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            checkBox=""
            image=""
            MemberName="John"
            sponsor="0123456789"
            email="binarryaddn@gmail.com"
            Mobile="9823456050"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            checkBox=""
            image=""
            MemberName="John"
            sponsor="0123456789"
            email="binarryaddn@gmail.com"
            Mobile="9823456050"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            checkBox=""
            image=""
            MemberName="John"
            sponsor="0123456789"
            email="binarryaddn@gmail.com"
            Mobile="9823456050"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            checkBox=""
            image=""
            MemberName="John"
            sponsor="0123456789"
            email="binarryaddn@gmail.com"
            Mobile="9823456050"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            checkBox=""
            image=""
            MemberName="John"
            sponsor="0123456789"
            email="binarryaddn@gmail.com"
            Mobile="9823456050"
            JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
        </tbody>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell">
          <div className="card">
            <div className="card-body">
              <strong class="card-title">
                <img
                  className="mr-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                  }
                  alt="image not found"
                  style={{height: 45 + "px", width: 45 + "px"}}
                />
                {props.MemberName}
              </strong>
              <p className="card-text">
                sponsor:{props.sponsor}
                <br />
                E-mail:{props.email}
                <br />
                Mobile{props.Mobile}
                <br />
                JoiningDate: {props.JoiningDate}
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell ">
          {props.CheckBox}
          <CheckBox checkall={checked} />
        </td>
        <td className="d-none d-md-table-cell">
          <img
            className=" mr-3"
            src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
            alt="image not found"
            style={{height: 45 + "px", width: 45 + "px"}}
          />
          {props.MemberName}
        </td>
        <td className="d-none d-md-table-cell">{props.sponsor}</td>
        <td className="d-none d-md-table-cell">{props.email}</td>
        <td className="d-none d-md-table-cell">{props.Mobile}</td>

        <td className="d-none d-md-table-cell">{props.JoiningDate}</td>
      </tr>
    );
  }
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
          <div className="col-md-12">
            <div className="card-body">
              <div className="container">
                <TableComponent />
              </div>
            </div>

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
