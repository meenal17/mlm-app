import React from "react";
import "./style.css";
import {useTranslation} from "react-i18next";
import Container from "react-bootstrap/Container";
function ListWidget2() {
  function TableComponent(props = {}) {
    return (
      <table className="table">
        <tbody>
          <RowComponent charges="Commission Charges" amount=" €87.70" />
          <RowComponent charges="Purchase Amount" amount=" €87.70" />
          <RowComponent charges="Registration Fee " amount=" €87.70" />
          <RowComponent charges="Registration Fee " amount=" €87.70" />
          <RowComponent charges="Purchase Amount" amount=" €87.70" />
          <RowComponent charges="Commission Charges" amount=" €87.70" />
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
              <p class="card-title">{props.charges}</p>
              <p className="card-text">amount{props.amount}</p>
              <p className="card-text">
                <button className="btn btn-info">PA</button>
              </p>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell mr-5">{props.charges}</td>
        <td className="d-none d-md-table-cell mr-5 info-td">{props.amount}</td>
        <td className="d-none d-md-table-cell mr-5">
          <button className="btn btn-info">PA</button>
        </td>
      </tr>
    );
  }
  const {t, i18n} = useTranslation();

  return (
    <div>
      <div class="card">
        <h4
          style={{
            fontSize: 20 + "px",
            color: "grey",

            paddingTop: "8px",
            marginLeft: "7px",
          }}
        >
          {t("Incomeandcommssion.14")}{" "}
        </h4>
        <div className="container" style={{marginBottom: "7%"}}>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default ListWidget2;
