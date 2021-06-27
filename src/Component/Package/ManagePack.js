import React, {useState} from "react";
import CheckBox from "../Profile Mangement/CheckBox";
import UpdatePackage from "./Update-Package";
import Selectbox from "./Selectbox";
function ManagePack() {
  const [checked, setchecked] = useState(false);

  return (
    <>
      <div className="mr-2 ml-2 pb-3 mt-4">
        <Selectbox />
        {/* table */}
        <div className="card">
          <div className="col-md-12 mt-2">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th
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
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                    }}
                  >
                    ID
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                    }}
                  >
                    product image
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Package Name
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Amount
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Pv
                  </th>
                  <th
                    style={{
                      fontSize: 15 + "px",
                      color: "black",
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>cart1</td>
                  <td>image</td>
                  <td>Purchase Pack 1</td>
                  <td>category1</td>
                  <td>$ 100.00 </td>
                  <td>50</td>
                  <UpdatePackage />
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>
                  <td>cart1</td>
                  <td>image</td>
                  <td>Purchase Pack 1</td>
                  <td>category1</td>
                  <td>$ 100.00 </td>
                  <td>50</td>
                  <UpdatePackage />
                </tr>
              </tbody>
            </table>
            <hr />
            <div className="row">
              <div className="col-md-9"></div>
              <div className="col-md-3">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
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
      </div>
    </>
  );
}

export default ManagePack;
