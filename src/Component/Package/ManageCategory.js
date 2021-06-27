import React, {useState} from "react";
import Selectbox from "./Selectbox";
import CheckBox from "../Profile Mangement/CheckBox";
import EditRepurchase from "./EditRepurchase";
const ManageCategory = () => {
  const [checked, setchecked] = useState(false);
  return (
    <>
      <div className="mr-2 ml-2 pb-3 mt-4">
        <Selectbox />
        {/* Table */}
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
                      fontWeight: "bold",
                      fontWeight: "bold",
                    }}
                  >
                    Category Name
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

                  <td>category1</td>

                  <EditRepurchase />
                </tr>
                <tr>
                  <td>
                    <CheckBox checkall={checked} />
                  </td>

                  <td>category1</td>

                  <EditRepurchase />
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
};

export default ManageCategory;
