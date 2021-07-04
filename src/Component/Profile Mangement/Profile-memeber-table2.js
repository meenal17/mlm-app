import React, {useState} from "react";
import CheckBox from "./CheckBox";
function Profilememebertable2() {
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
