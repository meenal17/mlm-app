import React from "react";

function Profilememebertable2() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-12 mr-2 ml-2 mt-3">
            <table class="table table-hover">
              <thead>
                <tr className="">
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <input type="checkbox " class="check-btn" />
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Member Name
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Sponsor
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    email
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Mobile
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Joining Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{/* <input type="checkbox " class="check-btn" /> */}</td>
                  <td>
                    {/* <img
                      className="mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/user.jpg"
                      }
                      alt="image not found"
                      style={{height: 45 + "px", width: 45 + "px"}}
                    /> */}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <h5 style={{color: "grey"}}>No result found</h5>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilememebertable2;
