import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Totalearning = () => {
  const {t, i18n} = useTranslation();
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
              #
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
              {t("member name.68")}
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
              {t("TotalAmont.374")}
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
              {t("Tax.375")}
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
            Id="1"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
          />
          <RowComponent
            Id="2"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
          />
          <RowComponent
            Id="3"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
          />
          <RowComponent
            Id="4"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
          />
          <RowComponent
            Id="5"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
          />
          <RowComponent
            Id="6"
            MemberName="Your First Name (DEMOTF0)"
            totalearning="$38.0"
            Ewallet="$38.0"
            Action=""
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
              <p class="card-title">
                {t("Id.157")}:{props.Id}
                {t("Member Name.74")}: {props.MemberName}
              </p>
              <p className="card-text">
                {t("TotalAmont.374")}: {props.totalearning}
                <br />
                {props.Ewallet}
                <br />
                <i
                  className="fa fa-edit p-2 mr-1"
                  style={{backgroundColor: "lightgrey", color: "black"}}
                ></i>
              </p>
            </div>
          </div>
        </td>
        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.MemberName}</td>
        <td className="d-none d-md-table-cell">{props.totalearning}</td>
        <td className="d-none d-md-table-cell">{props.Ewallet}</td>

        <td className="d-none d-md-table-cell">
          {" "}
          <i
            className="fa fa-edit p-2 mr-1"
            style={{backgroundColor: "lightgrey", color: "black"}}
          ></i>
        </td>
      </tr>
    );
  }
  return (
    <Link to="/totalearning">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t("TotalEarning.400")}
        </div>
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-8"></div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fas fa-file mr-1"></i>
                {t("Createexcel.370")}
              </button>
            </div>
            <div className="col-lg-2 col-sm-2">
              <button className="btn  btn-purple">
                <i className="fa fa-file-excel-o mr-1"></i>
                {t("CreateCSV.371")}
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <div className="container mt-3">
                <TableComponent />
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Totalearning;
