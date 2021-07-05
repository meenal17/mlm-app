import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
function MemberList() {
  function TableComponent(props = {}) {
    return (
      <table className="table">
        <tbody>
          <RowComponent image="" MemberName="John" amount=" $38.65" />
          <RowComponent image="" MemberName="John" amount=" $38.65" />
          <RowComponent image="" MemberName="John" amount=" $38.65" />

          <RowComponent image="" MemberName="John" amount=" $38.65" />
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
        <td className="d-none d-md-table-cell mr-5">{props.MemberName}</td>
        <td className="d-none d-md-table-cell mr-5">{props.amount}</td>
      </tr>
    );
  }
  return (
    <>
      <Container fluid>
        <div class="card pb-4">
          <div
            class="card-body"
            style={{
              paddingBottom: "0",
            }}
          >
            <div className="text-center " style={{color: "grey"}}>
              <h6>New Members</h6>
            </div>
            <div className="container">
              <TableComponent />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MemberList;
