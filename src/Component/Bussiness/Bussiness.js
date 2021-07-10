import React, {useState} from "react";
import {Link} from "react-router-dom";
import {DateRangePickerComponent} from "@syncfusion/ej2-react-calendars";
import {Multiselect} from "multiselect-react-dropdown";
import Transaction from "./Transaction";
import Cards from "./cards";
import "./style.css";
import {useTranslation} from "react-i18next";
function Bussiness() {
  const {t, i18n} = useTranslation();

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
          {t("Bussiness.92")}
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
                        <h5 className="h5-heading">
                          {t("Bussiness Summary.93")}
                        </h5>
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
                        <h5 className="h5-heading">
                          {t("Bussiness Transactions.101")}
                        </h5>
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
                      <div className="col-sm-3"></div>
                      <div className="row">
                        <div className="col-sm-6 mt-3 mb-2">
                          <h5 className="ml-3" style={{color: "grey"}}>
                            {t("Paid.178")}
                          </h5>
                          <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card card1 text-secondary">
                              <div class="card-body body-text">
                                <h4 class="card-title"> {t("Paid.178")}</h4>
                                <p class="card-text text1">€ 0.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mt-2">
                          <h5 className="ml-3" style={{color: "grey"}}>
                            {t("Pending.5")}
                          </h5>
                          <div class="col-12 col-sm-6 col-lg-4">
                            <div class="card card2  text-secondary">
                              <div class="card-body body-text">
                                <h4 class="card-title"> {t("Pending.5")}</h4>
                                <p class="card-text text2">€ 0.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* first row */}
                      <h4 className="ml-2" style={{color: "black"}}>
                        {t("Income.3")}
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
                      </div>
                      {/* ------------------------------------------------------------------------------------------------  */}
                      {/* first row */}
                      <h4 className="ml-2" style={{color: "black"}}>
                        {t("Bonus.4")}
                      </h4>
                      <div className="row card-color">
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Registation Fee.109")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Package Amount.110")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Purchase Amount.111")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Package Amount.110")}
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
                              {t("Package Amount.110")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Purchase Amount.111")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Purchase Amount.111")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        {/* third row */}
                        <div className="col-lg-3 mt-2">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Package Amount.110")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 mt-2">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Purchase Amount.111")}
                              <br />
                              <p className="p-color2">€27.718</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 mt-200">
                          <ul class="list-group">
                            <li class="list-group-item disabled li-color2">
                              {t("Purchase Amount.111")}
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
                          <button className="btn btn-purple">
                            {t("search.13")}
                          </button>
                        </div>
                        <div className="col-sm-2 col-lg-1">
                          <button className="btn btn-info">
                            {t("reset.67")}
                          </button>
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
