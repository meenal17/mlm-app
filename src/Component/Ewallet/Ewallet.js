import React, {useState} from "react";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";
import {Multiselect} from "multiselect-react-dropdown";
import {Link} from "react-router-dom";
import "../Ewallet/Style.css";
import {CardColumns} from "react-bootstrap";
import Cards from "./Cards";
import {useTranslation} from "react-i18next";
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
  const {t, i18n} = useTranslation();
  return (
    <>
      <Link to="/Ewallet">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          {t("Ewallet.26")}
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
                {t("Ewallet Summary.102")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#transactions"
                role="tab"
                data-toggle="tab"
              >
                {t("Ewallet Transactions.103")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#Balance"
                role="tab"
                data-toggle="tab"
              >
                {t("Ewallet Balance.104")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#statements"
                role="tab"
                data-toggle="tab"
              >
                {t("Ewallet Statment.105")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#p-wallet"
                role="tab"
                data-toggle="tab"
              >
                {t("Purchase Wallet.106")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                href="#earning"
                role="tab"
                data-toggle="tab"
              >
                {t("User Earning.107")}
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
                {t("Credit.108")}
              </h4>
              <div className="row card-color">
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Registation Fee.109")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
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
                      {t("Registation Fee.109")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 ">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-color">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-color">€27.718</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* second row */}
              <h4 className="ml-2 mt-2" style={{color: "black"}}>
                {t(" Debit.112")}
              </h4>
              <div className="row card-color">
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Registation Fee.109")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-coL">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Purchase Amount.111")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 mt-2">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Package Amount.110")}
                      <br />
                      <p className="p-col">€27.718</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul class="list-group">
                    <li class="list-group-item disabled li-col">
                      {t("Purchase Amount.111")}
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
                    placeholder={t("Username.128")}
                  />
                </div>
                <div className="col-lg-3 col-sm-4">
                  <Multiselect
                    options={options2}
                    displayValue="infoType"
                    placeholder={t("Type.129")}
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
                  <button className="btn btn-purple">{t("search.13")}</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">{t("reset.67")}</button>
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
                          {t("member name.68")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Category.94")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Amount.95")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Transection Date.116")}
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
                  <button className="btn btn-info">{t("reset.67")}</button>
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
                          {t("member name.68")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          {t("EwalletBalance.2")}
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
                            <a class="page-link" href="#"></a>
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
                  <button className="btn btn-purple">{t("search.13")}</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">{t("reset.67")}</button>
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
                          {t("Desciption.114")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Amount.95")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Balance.115")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Transection Date.116")}
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
                          <option>{t("Row Pages.98")}</option>
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
                              {t("Next.82")}
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
                {t("onmodule.113")}
              </h5>
              <div className="row mt-3 ml-2">
                <div className="col-lg-4">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder={t("Username.128")}
                  />
                </div>
                <div className="col-sm-2 col-lg-1 mr-2">
                  <button className="btn btn-purple">{t("search.13")}</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">{t("reset.67")}</button>
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
                          {t("Desciption.114")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Amount.95")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Balance.115")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Transection Date.116")}
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
                        {t("Showing 1 to 10 of 1,881 entries.97")}
                      </h6>
                    </div>
                    <div className="col-lg-2 col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>{t("Row Pages.98")}</option>
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
            {/* six Tab */}
            <div role="tabpanel" class="tab-pane fade" id="earning">
              <div className="row mt-3 ml-2">
                <div className="col-lg-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder={t("Username.128")}
                  />
                </div>
                <div className="col-lg-3">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>{t("Category.94")}</option>
                      <option>{t("Refferral Commission.117")}</option>
                      <option>{t("Rank Commission.118")}</option>
                      <option>{t("Level Commission.119")}</option>
                      <option>{t("Binary Commission.120")}</option>
                      <option>{t("Matching Bonus.121")}</option>
                      <option>{t("Pool Bonus.122")}</option>
                      <option>{t("Fast Start Bonus.123")}</option>
                      <option>{t("Vacation Bonus.124")}</option>
                      <option>{t("Education Fund.125")}</option>
                      <option>{t("Car Fund.126")}</option>
                      <option>{t("House Fund.127")}</option>
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
                  <button className="btn btn-purple">{t("search.13")}</button>
                </div>
                <div className="col-sm-2 col-lg-1">
                  <button className="btn btn-info">{t("reset.67")}</button>
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
                          {t("Desciption.114")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Amount.95")}
                        </th>
                        <th
                          style={{
                            fontSize: 15 + "px",
                            color: "black",
                            fontWeight: "bold",
                            fontWeight: "bold",
                          }}
                        >
                          {t("Transection Date.116")}
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
