import React from "react";
import BarGraph from "./Graphs/BarGraph";
import LineGraph from "./Graphs/LineGraph";
import DonutGraph from "./Graphs/DonutGraph";
import SearchLinkBar from "./Search-Link-Bar";
import MemberList from "./WigetLg/MemberList";
import ListWidget from "../Dashboard/ListWidgetCard/ListWidget";
import ListWidget2 from "../Dashboard/ListWidgetCard/ListWidget2";
import FontLinks from "../Dashboard/FontLinks";
import Description from "../Dashboard/Description";
import "../Dashboard/style.css";
function Bar() {
  return (
    <>
      {/* <!-- row --> */}
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-lg-7">
            <div class="card">
              <h4
                style={{
                  color: "grey",
                  fontSize: 16 + "px",
                  padding: 15,
                }}
              >
                Income VS Commssion
              </h4>
              <div class="card-body" style={{padding: 30}}>
                <BarGraph />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5">
            <div class="card">
              <h4
                style={{
                  color: "grey",
                  fontSize: 16 + "px",
                  padding: 15,
                }}
              >
                Payout Overview
              </h4>
              <div
                class="card-body"
                style={{margin: "auto", position: "relative"}}
              >
                <DonutGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <div class="card">
              {/* <h4
                style={{
                  color: "grey",
                  fontSize: 16 + "px",
              
                }}
              >
                Joining
              </h4> */}
              <div class="card-body" style={{padding: 20}}>
                <h4
                  style={{
                    color: "grey",
                    fontSize: 16 + "px",
                  }}
                >
                  Joining
                </h4>
                <LineGraph />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div class="card">
              <div class="card-body" style={{padding: 9}}>
                <h4
                  style={{
                    color: "grey",
                    fontSize: 16 + "px",
                  }}
                >
                  New Members
                </h4>
                <MemberList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0">
        <div class="card">
          <div class="card-body">
            <h3
              style={{
                color: "grey",
                fontSize: 16 + "px",
                padding: 5 + "px",
              }}
            >
              Promotion Tools
            </h3>
            <SearchLinkBar />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div class="card pt-3 pl-3pt-3 pl-3">
              <h4
                style={{fontSize: 20 + "px", color: "grey", marginBottom: 10}}
              >
                Team Performance
              </h4>
              <h5
                className="mt-2 "
                style={{fontSize: 15 + "px", color: "grey"}}
              >
                <span className="text-style">Top Earning</span>
                &nbsp;&nbsp;&nbsp;
                <span className="text-style">Top Recruiters</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="text-style">Package OverView</span>
                &nbsp;&nbsp;&nbsp;
                <span className="text-style">Rank OverView</span>
              </h5>
              <ListWidget />
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <div class="card pt-3 pl-3">
              <h4
                style={{fontSize: 20 + "px", color: "grey", marginBottom: 10}}
              >
                Income & Commssion
              </h4>
              <h5 className="mt-2" style={{fontSize: 15 + "px", color: "grey"}}>
                <span className="text-style">Income</span> &nbsp;&nbsp;&nbsp;
                <span className="text-style">Commission</span>
              </h5>
              <ListWidget2 />
            </div>
          </div>
          <div className="col-sm-6 col-lg-12">
            <div className="mt-0">
              <div class="card">
                <div class="card-body">
                  <FontLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-0">
        <div class="card col-sm-12">
          <Description />
        </div>
      </div> */}
    </>
  );
}
export default Bar;
