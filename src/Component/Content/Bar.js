import React from "react";
import BarGraph from "./Graphs/BarGraph";
import LineGraph from "./Graphs/LineGraph";
import DonutGraph from "./Graphs/DonutGraph";
import SearchLinkBar from "./Search-Link-Bar";
import MemberList from "./WigetLg/MemberList";
import ListWidget from "../Dashboard/ListWidgetCard/ListWidget";
import ListWidget2 from "../Dashboard/ListWidgetCard/ListWidget2";
import FontLinks from "../Dashboard/FontLinks";
import "../Dashboard/style.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Bar() {
  const {t, i18n} = useTranslation();

  return (
    <>
      {/* <!-- row --> */}

      <div className="row">
        <div className="col-sm-4 col-lg-7">
          <div class="card">
            <h4
              style={{
                color: "grey",
                fontSize: 16 + "px",
                padding: 15,
              }}
            >
              <span>{t("IncomeVScommssion.6")}</span>
            </h4>
            <div class="card-body" style={{padding: 30}}>
              <BarGraph />
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-5">
          <DonutGraph />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-lg-7">
          <LineGraph />
        </div>

        <div className="col-sm-12 col-lg-5">
          <MemberList />
        </div>
      </div>

      <div className="mt-0">
        <SearchLinkBar />
      </div>

      <div>
        <div className="row">
          <div className="col-sm-4 col-lg-6">
            <ListWidget />
          </div>

          <div className="col-sm-4 col-lg-6 ">
            <ListWidget2 />
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="mt-0">
            <FontLinks />
          </div> */}
      </div>
    </>
  );
}
export default Bar;
