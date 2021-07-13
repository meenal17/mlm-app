import React, {useState} from "react";
import CheckBox from "../Profile Mangement/CheckBox";
import UpdatePackage from "./Update-Package";
import Selectbox from "./Selectbox";
import {useTranslation} from "react-i18next";
function ManagePack() {
  const [checked, setchecked] = useState(false);
  const {t, i18n} = useTranslation();
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
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {t("Productimage.337")}
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
              {t("PackageName.336")}
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
              {t("Category.94")}
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
              {t("Amount.95")}
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
              {t("pv.326")}
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
              {t("Action.59")}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            checked=""
            productimg="image of product"
            packagename="binaoryaddon"
            category="ELITE PACKEt (Amount: € 87.70 )"
            amount="$38.0"
            pv="Free Joining"
            Action="  "
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
              {t("Product.81")}:{" "}
              <strong class="card-title">{props.productimg}</strong>
              <p className="card-text">
                {t("PackageName.336")}: {props.packagename}
                <br />
                {t("Category.94")}:{props.category}
                <br />
                {t("Amount.95")}:{props.amount}
                <br />
                {t("pv.326")} :{props.pv}
                {t("Action.59")}: <UpdatePackage getform={UpdatePackage} />
              </p>
            </div>
          </div>
        </td>

        <td>
          <CheckBox checkall={checked} />
        </td>
        <td className="d-none d-md-table-cell">{props.productimg}</td>
        <td className="d-none d-md-table-cell">{props.packagename}</td>
        <td className="d-none d-md-table-cell">{props.category}</td>
        <td className="d-none d-md-table-cell">{props.amount}</td>
        <td className="d-none d-md-table-cell">{props.pv}</td>

        <UpdatePackage getform={UpdatePackage} />
      </tr>
    );
  }

  return (
    <>
      <div className="mr-2 ml-2 pb-3 mt-4">
        <Selectbox />
        {/* table */}
        <div className="card">
          <div className="col-md-12 mt-2">
            <div className="container">
              <TableComponent />
            </div>

            <hr />
            <div className="row">
              <div className="col-md-9"></div>
              <div className="col-md-3">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        {t("Previous.99")}
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
                        {t("Next.100")}
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
