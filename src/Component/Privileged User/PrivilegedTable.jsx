import React, {useState} from "react";
import CheckBox from "../Profile Mangement/CheckBox";
import {useTranslation} from "react-i18next";
const PrivilegedTable = () => {
  const {t, i18n} = useTranslation();
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
              {t("Name.135")}
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
              {t("Email.411")}
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
              {t("Mobile.318")}
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
              {t("Action.59")}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            name="binaoryaddon"
            email="test123@gamil.com"
            mobile="9834123450"
            Action="  "
          />
          <RowComponent
            name="binaoryaddon"
            email="test123@gamil.com"
            mobile="9834123450"
            Action="  "
          />
          <RowComponent
            name="binaoryaddon"
            email="test123@gamil.com"
            mobile="9834123450"
            Action="  "
          />
          <RowComponent
            name="binaoryaddon"
            email="test123@gamil.com"
            mobile="9834123450"
            Action="  "
          />
          <RowComponent
            name="binaoryaddon"
            email="test123@gamil.com"
            mobile="9834123450"
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
              {t("Name.135")}: <strong class="card-title">{props.name}</strong>
              <p className="card-text">
                {t("Email.411")}: {props.email}
                <br />
                {t("Mobile.318")}:{props.mobile}
                <br />
                <br />
                {t("Action.59")}:{" "}
                <p>
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
                </p>
              </p>
            </div>
          </div>
        </td>

        <td>
          <CheckBox checkall={checked} />
        </td>

        <td className="d-none d-md-table-cell">{props.name}</td>
        <td className="d-none d-md-table-cell">{props.email}</td>
        <td className="d-none d-md-table-cell">{props.mobile}</td>

        <td className="d-none d-md-table-cell">
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
    );
  }

  return (
    <>
      <div className="card mr-2 ml-2">
        <div className="row ">
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
              <div className="btn btn-purple">{t("search.13")}</div>
            </div>
          </div>
          <div className="col-md-1  p-4">
            <div class="form-group">
              <div className="btn btn-info">{t("rest.57")}</div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="card">
          <div className="col-md-12 ">
            <div className="container">
              <TableComponent />
            </div>

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
                      {t("Previous.99")}
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
                      {t("Next.100")}
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
