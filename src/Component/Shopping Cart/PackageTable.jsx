import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const PackageTable = () => {
  const {t, i18n} = useTranslation();

  return (
    <Link to="/packagetable">
      <>
        <div className="container-fluid">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th
                  scope="col"
                  colspan="2"
                  style={{
                    color: " rgb(66, 65, 65)",
                    fontSize: "16px",
                  }}
                >
                  {t("Item.355")}
                </th>

                <th
                  scope="col"
                  style={{
                    color: " rgb(66, 65, 65)",
                    fontSize: "16px",
                  }}
                >
                  {t("Quantity.356")}
                </th>
                <th
                  scope="col"
                  style={{
                    color: " rgb(66, 65, 65)",
                    fontSize: "16px",
                  }}
                >
                  {t("Price.351")}
                </th>
                <th
                  scope="col"
                  style={{
                    color: " rgb(66, 65, 65)",
                    fontSize: "16px",
                  }}
                >
                  {t("Total.352")}
                </th>
                <th
                  scope="col"
                  style={{
                    color: " rgb(66, 65, 65)",
                    fontSize: "16px",
                  }}
                >
                  {t("Action.59")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src={"/assets/img/dashboard/shopping.jpg"}
                    class="card-img-top mt-4"
                    alt="not found"
                  />
                </th>
                <td>{t("Purchase.357")}</td>

                <td>
                  <input type="number" />
                </td>
                <td>200.6</td>
                <td>20000</td>
                <td>
                  <div className="btn btn-purple p-2 mb-1">
                    <i className="fa fa-refresh" /> {t("Update.187")}
                  </div>
                  <br />
                  <div className="btn btn-info p-2">
                    <i className="fas fa-trash" />
                    {t("Remove.358")}
                  </div>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    src={"/assets/img/dashboard/shopping.jpg"}
                    class="card-img-top mt-4"
                    alt="not found"
                  />
                </th>
                <td>{t("Purchase.357")}</td>

                <td>
                  <input type="number" />
                </td>
                <td>200.6</td>
                <td>20000</td>
                <td>
                  <div className="btn btn-purple p-2 mb-1">
                    <i className="fa fa-refresh" /> {t("Update.187")}
                  </div>
                  <br />
                  <div className="btn btn-info p-2">
                    <i className="fas fa-trash" />
                    {t("Remove.358")}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td colspan="2"></td>
                <td>Total</td>
                <td>$ 400.00 </td>
              </tr>
            </tbody>
            <div className="btn btn-info">
              <Link
                to="/shoppingcart"
                style={{
                  color: " #fff",
                }}
              >
                <i className="fa fa-arrow-left" /> {t("Back.320")}
              </Link>
            </div>
          </table>
        </div>
      </>
    </Link>
  );
};

export default PackageTable;
