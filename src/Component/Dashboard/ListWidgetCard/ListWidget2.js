import React from "react";
import "./style.css";
function ListWidget2() {
  return (
    <div>
      <div className="row row-sm row-deck">
        <div className="col-xl-12 col-lg-6">
          <div className="card overflow-hidden ">
            <div className="card-header pb-0">
              <div className="card-body p-0 mb-1">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Package Amount</td>
                      <td class="info-td"> € 36406.06 </td>
                      <td>
                        <td>
                          <button className="btn btn-info">PA</button>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td> Registration Fee </td>
                      <td class="info-td"> € 10792.23 </td>
                      <td>
                        <td>
                          <button className="btn btn-info">PA</button>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td> Purchase Amount </td>
                      <td class="info-td"> € 2104.72 </td>
                      <td>
                        <td>
                          <button
                            className="btn btn-info"
                            style={{padding: "5"}}
                          >
                            PA
                          </button>
                        </td>
                      </td>
                    </tr>
                    <tr>
                      <td> Commission Charges </td>
                      <td class="info-td"> € 1461.1 </td>
                      <td>
                        <td>
                          <button
                            className="btn btn-info"
                            style={{padding: "5"}}
                          >
                            PA
                          </button>
                        </td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWidget2;
