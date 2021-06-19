import React from "react";
import Sidebar from "../Component/RTL/SideBar";
import LefSide from "../Component/LFTsideBAR/Lefside";
import Header from "../Component/Header/Header";
import Breadcrumb from "../Breadcrumb";
import Description from "../Component/Dashboard/Description";
import {Switch, Route} from "react-router-dom";
import TreeView from "../Component/Networks/TreeView";
import ReferralMember from "../Component/Networks/ReferralMember";
import Register from "../Component/SignUp/Register";
import Approval from "../Component/SignUp/Approval";
import BulkRegister from "../Component/SignUp/Bulk Register";
import DownloadMember from "../Component/Networks/DownloadMember";
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
                <Route path="/" component={Breadcrumb} />
                <Route path="/TreeView" exact component={TreeView} />
                <Route
                  path="/DownloadMember"
                  exact
                  component={DownloadMember}
                />
                <Route path="/ReferalMember" exact component={ReferralMember} />
                <Route path="/Register" exact component={Register} />
                <Route path="/Approval" exact component={Approval} />
                <Route path="/Bulkregister" exact component={BulkRegister} />
              </Switch>

              <Description />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
