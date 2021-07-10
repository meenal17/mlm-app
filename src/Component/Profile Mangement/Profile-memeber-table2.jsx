import React, {useState} from "react";
import CheckBox from "./CheckBox";
import {useTranslation} from "react-i18next";
function Profilememebertable2() {
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
              }}
            >
              {t("Memeber Name.74")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {t("Sponsor.75")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {t("Email.196")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
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
              }}
            >
              {t("Joining Date.76")}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
          // checkBox=""
          // image=""
          // MemberName="John"
          // sponsor="0123456789"
          // email="binarryaddn@gmail.com"
          // Mobile="9823456050"
          // JoiningDate="15 Feb 2021 - 06:49:31 PM"
          />
        </tbody>

        <h4>no result yet</h4>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell">
          <div className="card">
            <div className="card-body">
              <strong class="card-title">{props.MemberName}</strong>
              <p className="card-text">
                {t("Sponsor.75")}:{props.sponsor}
                <br />
                {t("Email.196")}:{props.email}
                <br />
                {t("Mobile.318")}:{props.Mobile}
                <br />
                {t("Joining Date.76")}: {props.JoiningDate}
              </p>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell">{props.MemberName}</td>
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
          <div className="col-md-12 mr-2 ml-2 mt-3">
            <div className="container">
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilememebertable2;
