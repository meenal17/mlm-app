import React from "react";

const PendingRequest = () => {
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
              Name
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
              Pin Count
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
              Count
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
              Request Date
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
            Id="1"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
          />
          <RowComponent
            Id="2"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
          />
          <RowComponent
            Id="3"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
          />
          <RowComponent
            Id="4"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
          />
          <RowComponent
            Id="4"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
          />
          <RowComponent
            Id="5"
            Name="Larue Welch INF857335 "
            pincount="5"
            count=""
            amount="500"
            requestdate="June 1, 2021"
            expiredate="June 30, 2021"
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
              <p class="card-title">{props.Id}</p>
              <p className="">{props.Name}</p>
              <p className="card-text">
                E-pin:{props.pincount}
                <br />
                count:{props.count}
                <input type="number" style={{width: "50px"}} />
                <br />
                Amount:{props.amount}
                <br />
                Request Date: {props.requestdate}
                <br />
                Expire Date:{props.expiredate}
              </p>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell">{props.Id}</td>
        <td className="d-none d-md-table-cell">{props.Name}</td>
        <td className="d-none d-md-table-cell">{props.pincount}</td>
        <td className="d-none d-md-table-cell">
          {props.count} <input type="number" style={{width: "50px"}} />
        </td>
        <td className="d-none d-md-table-cell">{props.amount}</td>
        <td className="d-none d-md-table-cell">{props.requestdate}</td>
        <td className="d-none d-md-table-cell">{props.expiredate}</td>
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
            {/* 
                  <tr>
                    <th scope="row">
                      {" "}
                      <input type="checkbox" />{" "}
                    </th>
                    <td>Larue Welch INF857335 </td>
                    <td>3</td>
                    <td>
                      <input type="number" style={{width: "50px"}} />{" "}
                    </td>
                    <td>500</td>
                    <td>June 1, 2021</td>
                    <td>June 30, 2021</td>
                  </tr>
                </tbody>
              </table> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingRequest;
