import React, {useState} from "react";
import {Link} from "react-router-dom";
import Addnewmember from "./Addnewmember";
import CheckBox from "../Profile Mangement/CheckBox";
import EditMemeber from "./EditMemeber";

const Membership = () => {
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
                textTransform: "capitalize",
              }}
            >
              ID
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Package
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Amount
            </th>

            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              PV
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            ></th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Action
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            checked=""
            id="1"
            package="binaoryaddon"
            amount="$38.0"
            pv="Free Joining"
            no="0"
            Action="  "
          />
          <RowComponent
            checked=""
            id="2"
            package="binaoryaddon"
            amount="$38.0"
            pv="Free Joining"
            no="0"
            Action="  "
          />
          <RowComponent
            checked=""
            id="3"
            package="binaoryaddon"
            amount="$38.0"
            pv="Free Joining"
            no="0"
            Action="  "
          />
          <RowComponent
            checked=""
            id="4"
            package="binaoryaddon"
            amount="$38.0"
            pv="Free Joining"
            no="0"
            Action="  "
          />
          <RowComponent
            checked=""
            id="5"
            package="binaoryaddon"
            amount="$38.0"
            pv="Free Joining"
            no="0"
            Action="  "
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
              Package: <strong class="card-title">{props.package}</strong>
              <p className="card-text">
                Amount: {props.amount}
                <br />
                PV:{props.pv}
                <br />
                <br />
                {props.no}
                Action: <EditMemeber editform={EditMemeber} />
              </p>
            </div>
          </div>
        </td>

        <td>
          <CheckBox checkall={checked} />
        </td>
        <td className="d-none d-md-table-cell">{props.id}</td>
        <td className="d-none d-md-table-cell">{props.package}</td>
        <td className="d-none d-md-table-cell">{props.amount}</td>
        <td className="d-none d-md-table-cell">{props.pv}</td>

        <td className="d-none d-md-table-cell">{props.no}</td>

        {props.Action}
        <EditMemeber editform={EditMemeber} />
      </tr>
    );
  }

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
              <div className="container">
                <TableComponent />
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
      </Link>
    </>
  );
};

export default Membership;
