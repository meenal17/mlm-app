import React from "react";
import Container from "react-bootstrap/Container";
import {useTranslation} from "react-i18next";
function ListWidget() {
  function TableComponent(props = {}) {
    return (
      <table className="table">
        <tbody>
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
          <RowComponent image="" MemberName="YourFirstName" amount=" €87.70" />
        </tbody>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell ml-4 mr-4">
          <div className="card ">
            <div className="card-body">
              <p class="card-title">
                <img
                  className="mr-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                  }
                  alt="image not found"
                  style={{
                    height: 45 + "px",
                    width: 45 + "px",
                  }}
                />
                {props.MemberName}
              </p>
              <p className="card-text">amount{props.amount}</p>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell mr-5">
          <img
            className=" mr-3"
            src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
            alt="image not found"
            style={{height: 45 + "px", width: 45 + "px"}}
          />
        </td>
        <td className="d-none d-md-table-cell mr-5">
          {props.MemberName}
          <br /> <small>DEMOR7P</small>
        </td>
        <td className="d-none d-md-table-cell mr-5">{props.amount}</td>
      </tr>
    );
  }
  const {t, i18n} = useTranslation();

  return (
    <div class="card">
      <h4
        style={{
          fontSize: 20 + "px",
          color: "grey",
          paddingTop: "8px",
          marginLeft: "7px",
        }}
      >
        {t("Incomeandcommssion.14")}
      </h4>
      <div className="container">
        <TableComponent />
      </div>
    </div>
  );
}
export default ListWidget;
