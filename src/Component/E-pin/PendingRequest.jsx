import React from "react";

const PendingRequest = () => {
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
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Requestes Pin Count
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Count
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Request Date
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Expire Date
                    </th>
                  </tr>
                </thead>
                <tbody>
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingRequest;
