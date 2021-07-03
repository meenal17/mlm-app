import React from "react";
import {Link} from "react-router-dom";
import "../Mail/style.css";
import InboxTable from "./InboxTable";
import SendboxTable from "./SendboxTable";
import Compose from "./Compose";
export default function Mail() {
  return (
    <>
      <Link to="/mailbox">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          Mail Box
        </div>
        <div className="card ">
          <section class="container p-3 ">
            <div className="row">
              <div class="col-md-12 pr-2">
                <div class="d-flex">
                  <ul
                    id="tabsJustified"
                    class="nav nav-pills flex-column p-1 "
                    style={{color: "#23b7e5"}}
                  >
                    <li class="nav-item mb-2">
                      <a
                        href=""
                        data-target="#compose"
                        data-toggle="tab"
                        class=" small  p-2"
                      >
                        <div className="btn btn-purple ">Compose</div>
                      </a>
                      <hr />
                    </li>

                    <li class="nav-item">
                      <a
                        href=""
                        data-target="#home1"
                        data-toggle="tab"
                        class="nav-link small active sidecolumn "
                      >
                        Inbox
                        <i
                          className="fa fa-envelope-o icon-col ml-1"
                          style={{color: "white"}}
                        ></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href=""
                        data-target="#profile1"
                        data-toggle="tab"
                        class="nav-link small sidecolumn p-2"
                      >
                        Send
                        <i
                          className="fa fa-send-o  ml-1"
                          style={{color: "white"}}
                        ></i>
                      </a>
                    </li>
                  </ul>
                  <div className=""></div>

                  <div
                    style={{
                      borderLeft: "3px solid #23b7e5",
                    }}
                  ></div>

                  <div class="tab-content ml-2 " style={{width: "80%"}}>
                    <div id="compose" class="tab-pane fade ">
                      <Compose />
                    </div>
                    <div id="home1" class="tab-pane fade active show">
                      <InboxTable />
                    </div>
                    <div id="profile1" class="tab-pane fade ">
                      <SendboxTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Link>
    </>
  );
}
