import React from "react";
import {Table} from "react-bootstrap";

function ListWidget2() {
  return (
    <div>
      <div className="row row-sm row-deck">
        <div className="col-xl-12 col-lg-6">
          <div className="card overflow-hidden ">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between">
                <h4
                  className="card-title mg-b-10"
                  style={{textDecoration: "none"}}
                >
                  Income & Commssion
                </h4>
              </div>
              {/* heding */}
            </div>
            {/* <Table>
              <thead>
                <a href="">Income</a>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <a href="">Comission</a>
              </thead>
            </Table> */}
            <div className="card-body p-0">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <a href="">Income</a>
                    </th>
                    <th>
                      <a href="">Comission</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="btn btn-outline-info">PA</button>
                    </td>
                    <td>
                      <button className="btn btn-outline-info">PA</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWidget2;
