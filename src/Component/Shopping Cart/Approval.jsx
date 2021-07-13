import React, {useState} from "react";
import {Link} from "react-router-dom";
import CheckBox from "../Profile Mangement/CheckBox";
import EditMemeber from "../Package/EditMemeber";
import {useTranslation} from "react-i18next";
const Approvalshopping = () => {
  const [checked, setchecked] = useState(false);
  const {t, i18n} = useTranslation();
  return (
    <>
      <Link to="/approval2">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          {t("Approval.23")}
        </div>
        <h5 className="ml-4 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          <span style={{color: "black"}}>{t("onmodule.113")}</span>
        </h5>
        {/* Table */}
        <div>
          <div className="card p-3">
            <div className="card-title p-2">
              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-4">
                  <input
                    class="form-control"
                    type="text"
                    placeholder=" input"
                  />
                </div>
                <div className=" ml-1">
                  <div className="btn btn-purple">{t("search.13")}</div>
                </div>
                <div className="col-md-1">
                  <div className="btn btn-info">{t("rest.57")}</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
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
                          #
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                          }}
                        >
                          {t("InvoiceNo.341")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {t("member name.68")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("TotalAmount.342")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("PaymentMethod.343")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("OrderDetail.345")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Action.59")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <CheckBox checkall={checked} />
                        </td>
                        <td>1</td>
                        <td>salar khalid </td>
                        <td>RPCHSE1043</td>
                        <td> $ 2,700.00 </td>

                        <td>Bank Transfer</td>
                        <td>27 Feb 2021 - 07:53:05 AM</td>

                        <i
                          className="fas fa-eye p-2 ml-4 mt-2"
                          style={{backgroundColor: "grey", color: "black"}}
                        ></i>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn btn-purple">{t("Approval.23")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Approvalshopping;
