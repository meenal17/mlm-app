import React from "react";

const EpinList = () => {
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
                textTransform: "capitalize",
              }}
            >
              Id
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
              Alocate Member
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
              E-pin
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
              Balance Amount
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
              Status
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
              Expire Date
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

        <h6 className="">no result yet</h6>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell">
          <div className="card">
            <div className="card-body">
              <strong class="card-title">{props.alocateMember}</strong>
              <p className="card-text">
                E-pin:{props.pin}
                <br />
                Amount:{props.amount}
                <br />
                Balance Amount:{props.blance}
                <br />
                Status: {props.status}
                <br />
                Expire Date:{props.date}
              </p>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell">{props.alocateMember}</td>
        <td className="d-none d-md-table-cell">{props.pin}</td>
        <td className="d-none d-md-table-cell">{props.amount}</td>
        <td className="d-none d-md-table-cell">{props.blance}</td>
        <td className="d-none d-md-table-cell">{props.status}</td>
        <td className="d-none d-md-table-cell">{props.date}</td>
      </tr>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="col-md-3 col-sm-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="E-pin"
            />
          </div>
          <div className="col-md-3 col-sm-4">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Amount"
            />
          </div>
          <div className="col-md-3 col-sm-4">
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Active</option>
                <option>Blocked</option>
                <option>Used/Expired</option>
                <option>Deleted</option>
              </select>
            </div>
          </div>
          <div className="col-md-1 mr-2">
            <div className="btn btn-purple ">Search</div>
          </div>
          <div className="col-md-1">
            <div className="btn btn-info">Rest</div>
          </div>
          <div className="col-lg-12 col-sm-6 mt-4">
            <div className="container">
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpinList;
