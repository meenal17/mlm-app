import React, {useState} from "react";
import {Link} from "react-router-dom";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";
import {Multiselect} from "multiselect-react-dropdown";
import Transaction from "./Transaction";
import Cards from "./cards";
import "./style.css";
function Bussiness() {
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
      info: "Registation Fee",
    },
    {
      info: "Package Amount",
    },
    {info: "Purchase Upgrade"},
    {
      info: "Package Upgrade",
    },
    {
      info: "Fund Transfer Fee",
    },
    {
      info: "Commission Charges",
    },
    {
      info: "PayOut Fee",
    },
    {
      info: "Referral Commission",
    },
    {
      info: "Level Commission",
    },
    {
      info: "Matching Bonous",
    },
    {
      info: "Pool Bonus",
    },
    {
      info: "Vacation Bonus",
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
    {
      info: "Paid",
    },
    {
      info: "Pending",
    },
  ];
  const [options] = useState(data);
  const Data = [
    {
      infoType: "Income",
    },
    {
      infoType: "Bouns",
    },
    {
      infoType: "Paid",
    },
    {
      infoType: "Pendind",
    },
  ];
  const [options2] = useState(Data);
  return (
    <>
      <Link to="/Bussiness">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Bussiness
        </div>
        <Cards />
        {/* Tabs */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              <div className="card">
                <section>
                  <ul class="nav nav-tabs " id="myTab" role="tablist">
                    <li class="nav-item waves-effect waves-light active">
                      <a
                        class="nav-link active active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="false"
                      >
                        <h5 className="h5-heading">Bussiness Summary</h5>
                      </a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <h5 className="h5-heading"> Bussiness Transactions</h5>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="col-sm-3">
                        {/* <DateRangePickerComponent
                          placeholder="Enter Date Range"
                          startDate={startValue}
                          endValue={endValue}
                          format="dd/MM/yy"
                          start="Year"
                          depth="Year"
                        ></DateRangePickerComponent> */}
                      </div>
                      <div className="row">
                        <div className="col-sm-6 mt-3 mb-2">
                          <h5 className="ml-3" style={{color: "grey"}}>
                            Paid
                          </h5>
                          <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card card1 text-secondary">
                              <div class="card-body body-text">
                                <h4 class="card-title">Paid</h4>
                                <p class="card-text text1">€ 0.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <h5 className="ml-3" style={{color: "grey"}}>
                            Pending
                          </h5>
                          <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card card2  text-secondary">
                              <div class="card-body body-text">
                                <h4 class="card-title">Pending</h4>
                                <p class="card-text text2">€ 0.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* first row */}
                      <h4 className="ml-2" style={{color: "black"}}>
                        Income
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
                      </div>
                      {/* ------------------------------------------------------------------------------------------------  */}
                      {/* first row */}
                      <h4 className="ml-2" style={{color: "black"}}>
                        Bonous
                      </h4>
                      <div className="row card-color">
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Registation Fee
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Package Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Purchase Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Package Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* second row */}
                      <div className="row  card-color mt-2">
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Registation Fee
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Package Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Purchase Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Purchase Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        {/* third row */}
                        <div className="col-lg-3 mt-2">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Package Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 mt-2">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Purchase Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 mt-200">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              Purchase Amount
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Bussiness Transactions */}
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
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

                      <Transaction />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Bussiness;
