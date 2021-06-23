import React, {useState} from "react";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";
import {Multiselect} from "multiselect-react-dropdown";
import {Link} from "react-router-dom";
import "../Ewallet/Style.css";
import {CardColumns} from "react-bootstrap";
import Cards from "./Cards";
function Ewallet() {
  const startValue: Date = new Date(
    new Date().getUTCFullYear(),
    new Date().getMonth(),
    21
  );
  const endValue: Date = new Date(
    new Date().getUTCFullYear(),
    new Date().getMonth() + 1,
    22
  );
  const data = [
    {
      info: "E-pin Purchase",
    },
    {
      info: "E-pin Refund",
    },
    {info: "Fund Credit"},
    {
      info: "Fund Debit",
    },
    {
      info: "Fund Transfer",
    },
    {
      info: "Fund Transfer Fee",
    },
    {
      info: "PayOut Request",
    },
    {
      info: "PayOut Release (manual)",
    },
    {
      info: "Payout Fee",
    },
    {
      info: "Payout Cancel",
    },
    {
      info: "E-wallet Payment",
    },
    {
      info: "Purchase Amount",
    },
    {
      info: "Package Upgrate Amount",
    },
    {
      info: "Refferal Commission",
    },
    {
      info: "Level Commission",
    },
    {
      info: "Binary Commission",
    },
    {
      info: "Matching Bonus",
    },
    {
      info: "Pool Bonus",
    },
    {
      info: "Fast Start Bonus",
    },
    {
      info: "Vaction Fund",
    },
    {
      info: "Education Fund",
    },
    {
      info: "Car Fund",
    },
    {
      info: "House Fund",
    },
  ];
  const [options] = useState(data);
  const Data = [
    {
      infoType: "Credit",
    },
    {
      infoType: "Debit",
    },
  ];
  const [options2] = useState(Data);
  return (
    <>
      <Link to="/Ewallet">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Ewallet
        </div>
        <Cards />
        {/* Tabs start */}
        <div className="card p-2 mr-3 ml-3">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link linked active"
                href="#Summary"
                role="tab"
                data-toggle="tab"
              >
                Ewallet Summary
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#transactions"
                role="tab"
                data-toggle="tab"
              >
                Ewallet Transactions
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#Balance"
                role="tab"
                data-toggle="tab"
              >
                Ewallet Balance
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#statements"
                role="tab"
                data-toggle="tab"
              >
                Ewallet Statment
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#p-wallet"
                role="tab"
                data-toggle="tab"
              >
                Purchase Wallet
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#earning"
                role="tab"
                data-toggle="tab"
              >
                User Earning
              </a>
            </li>
          </ul>

          {/* <!-- Tab panes --> */}
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="Summary">
              <div className="col-sm-3">
                <DateRangePickerComponent
                  placeholder="Enter Date Range"
                  startDate={startValue}
                  endValue={endValue}
                  format="dd/MM/yy"
                  start="Year"
                  depth="Year"
                ></DateRangePickerComponent>
              </div>
              {/* first row */}
              <h4 className="ml-2 mt-2" style={{color: "black"}}>
                Credit
              </h4>
              <div className="row card-color">
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Registation Fee
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Package Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Package Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* second row */}
              <div className="row  card-color mt-2">
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Registation Fee
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Package Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 ">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      Purchase Amount
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* second row */}
              <h4 className="ml-2 mt-2" style={{color: "black"}}>
                Debit
              </h4>
              <div className="row card-color">
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Registation Fee
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Purchase Amount
                      <br />
                      <p className="p-coL">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      Package Amount
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Second Tab */}
            <div role="tabpanel" class="tab-pane fade" id="transactions">
              <div className="row">
                <div className="col-lg-3 col-sm-4 ml-2">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-lg-3 col-sm-4">
                  <Multiselect
                    options={options2}
                    displayValue="infoType"
                    placeholder="Type"
                  />
                </div>
                <div
                  className="col-lg-3 col-sm-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                  }}
                >
                  <Multiselect options={options} displayValue="info" />
                </div>
                <div className="col-lg-2 col-sm-4">
                  <DateRangePickerComponent
                    placeholder="Enter Date Range"
                    startDate={startValue}
                    endValue={endValue}
                    format="dd/MM/yy"
                    start="Year"
                    depth="Year"
                  ></DateRangePickerComponent>
                </div>
              </div>
              <div className="row mt-3 ml-2">
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">Search</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">Reset</button>
                </div>
              </div>

              {/* Table */}
              <div class="card mr-2 ml-2">
                <div className="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr className="">
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Member Name
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
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
                          Transection Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>
                        <td>Registration Fee</td>
                        <td>€ 41.83</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 mt-3">
                      <h6 style={{color: "grey"}}>
                        Showing 1 to 10 of 1,881 entries
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Row Pages</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
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
            {/* Third Tab */}
            <div role="tabpanel" class="tab-pane fade" id="Balance">
              <div className="row mt-3 ml-2">
                <div className="col-lg-4">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">Search</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">Reset</button>
                </div>
              </div>

              {/* Table */}
              <div class="card mr-2 ml-2">
                <div className="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr className="">
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Member Name
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          E-wallet Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/dashboard/user.jpg"
                            }
                            alt="image not found"
                            style={{height: 45 + "px", width: 45 + "px"}}
                          />
                          Your First Namtestetest
                        </td>

                        <td className="td-color">€ 41.83</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 mt-3">
                      <h6 style={{color: "grey"}}>
                        Showing 1 to 10 of 1,881 entries
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Row Pages</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
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
            {/*  four Tab */}
            <div role="tabpanel" class="tab-pane fade" id="statements">
              <div className="row mt-3 ml-2">
                <div className="col-lg-4">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">Search</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">Reset</button>
                </div>
              </div>
              {/* table */}

              <div class="card mr-2 ml-2">
                <div className="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr className="">
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Desciption
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
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
                          Balance
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Transection Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td ">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 mt-3">
                      <h6 style={{color: "grey"}}>
                        Showing 1 to 10 of 1,881 entries
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Row Pages</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
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
            {/* end table */}
            {/* five Tab */}
            <div role="tabpanel" class="tab-pane fade" id="p-wallet">
              <h5 className="ml-5 mt-2" style={{color: "grey"}}>
                <i
                  class="fa fa-exclamation-circle bell mr-2 "
                  style={{color: "#ffad31", fontSize: 25 + "px"}}
                />
                Note : This is an add-on module
              </h5>
              <div className="row mt-3 ml-2">
                <div className="col-lg-4">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">Search</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">Reset</button>
                </div>
              </div>
              <div class="card mr-2 ml-2">
                <div className="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr className="">
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Desciption
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
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
                          Balance
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          Transection Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td ">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-color1 td">€ 1.09</td>
                        <td className="td-color2 td2 ">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 mt-3">
                      <h6 style={{color: "grey"}}>
                        Showing 1 to 10 of 1,881 entries
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Row Pages</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
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
            {/* six Tab */}
            <div role="tabpanel" class="tab-pane fade" id="earning">
              <div className="row mt-3 ml-2">
                <div className="col-lg-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-lg-3">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Category</option>
                      <option>Refferral Commission</option>
                      <option>Rank Commission</option>
                      <option>Level Commission</option>
                      <option>Binary Commission</option>
                      <option>Matching Bonus</option>
                      <option>Pool Bonus</option>
                      <option>Fast Start Bonus</option>
                      <option>Vacation Bonus</option>
                      <option>Education Fund</option>
                      <option>Car Fund</option>
                      <option>House Fund</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-3">
                  <DateRangePickerComponent
                    placeholder="Enter Date Range"
                    startDate={startValue}
                    endValue={endValue}
                    format="dd/MM/yy"
                    start="Year"
                    depth="Year"
                  ></DateRangePickerComponent>
                </div>
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">Search</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">Reset</button>
                </div>
              </div>
              {/* table Start*/}
              <div class="card mr-2 ml-2">
                <div className="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr className="">
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          Desciption
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
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
                          Transection Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                      <tr>
                        <td>Level Commission from INF857335</td>
                        <td className="td-col td-2">€ 1.09</td>
                        <td>May 25, 2021, 6:55 pm</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-lg-4 col-sm-3 mt-3">
                      <h6 style={{color: "grey"}}>
                        Showing 1 to 10 of 1,881 entries
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Row Pages</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled">
                            <a
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
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
              {/* table end*/}
            </div>
          </div>
        </div>
        {/* Tabs end */}
      </Link>
    </>
  );
}

export default Ewallet;
