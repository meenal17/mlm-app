import React from "react";
import LefSide from "../Component/LFTsideBAR/Lefside";
import Header from "../Component/Header/Header";
import Breadcrumb from "../Breadcrumb";
import Description from "../Component/Dashboard/Description";
import {Switch, Route} from "react-router-dom";
import TreeView from "../Component/Networks/TreeView";
import ReferralMember from "../Component/Networks/ReferralMember";
import Register from "../Component/SignUp/Register";
import Approval from "../Component/SignUp/Approval";
import BRegister from "../Component/SignUp/BRegister";
import DownloadMember from "../Component/Networks/DownloadMember";
import Bussiness from "../Component/Bussiness/Bussiness";
import Ewallet from "../Component/Ewallet/Ewallet";
export default function Router() {
  return (
    <div class="page">
      <section>
        <div className="col-lg-12 pl-0 pr-0">
          <div class="page">
            <LefSide />
            <div className="main-content app-content">
              <Header />
              <Switch>
                <Route exact path="/dashboard" component={Breadcrumb} />
                <Route exact path="/TreeView" component={TreeView} />
                <Route
                  path="/DownloadMember"
                  exact
                  component={DownloadMember}
                />
                <Route
                  exact
                  path="/ReferralMember"
                  component={ReferralMember}
                />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Approval" component={Approval} />
                <Route exact path="/BRegister" component={BRegister} />
                <Route exact path="/Bussiness" component={Bussiness} />
                <Route exact path="/Ewallet" component={Ewallet} />
              </Switch>
              <Description />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
