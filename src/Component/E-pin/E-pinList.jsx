import React from "react";

const EpinList = () => {
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
                      Alocate Memeber
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      E-pin
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
                      Balance Amount
                    </th>
                    <th
                      scope="col"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Status
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
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <h6 className="">No Data Avalable</h6>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpinList;
