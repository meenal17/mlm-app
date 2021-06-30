import React from "react";
import LefSide from "../Component/LFTsideBAR/Lefside";
import Header from "../Component/Header/Header";
import Breadcrumb from "../Breadcrumb";
import Description from "../Component/Dashboard/Description";
import {Switch, Route, useLocation} from "react-router-dom";
import TreeView from "../Component/Networks/TreeView";
import ReferralMember from "../Component/Networks/ReferralMember";
import Register from "../Component/SignUp/Register";
import Approval from "../Component/SignUp/Approval";
import BRegister from "../Component/SignUp/BRegister";
import DownloadMember from "../Component/Networks/DownloadMember";
import Bussiness from "../Component/Bussiness/Bussiness";
import Ewallet from "../Component/Ewallet/Ewallet";
import payout from "../Component/Payout/payout";
import ProfileView from "../Component/Profile Mangement/ProfileView";
import MemberList from "../Component/Profile Mangement/MemberList";
import KycDetails from "../Component/Profile Mangement/KycDetails";
import Membership from "../Component/Package/Membership";
import Cart from "../Component/Package/Cart";
import ShoppingCart from "../Component/Shopping Cart/ShoppingCart";
import Checkout from "../Component/Shopping Cart/Checkout";
import PackageTable from "../Component/Shopping Cart/PackageTable";
import Moredetails from "../Component/Shopping Cart/Moredetails";
import Approvalshopping from "../Component/Shopping Cart/Approval";
import Mail from "../Component/Mail/Mail";
import GenologyTree from "../Component/Networks/GenologyTree";
import Privilegeduser from "../Component/Privileged User/Privilegeduse";
import SponsorTree from "../Component/Networks/SponsorTree";
import LogOut from "../Component/Logout/LogOut";

export default function Router() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/logout" ? (
        <LogOut />
      ) : (
        <div class="page">
          <section>
            <div className="col-lg-12 pl-0 pr-0">
              <div class="page">
                <LefSide />
                <div className="main-content app-content">
                  <Header />
                  <Switch>
                    <Route exact path="/" component={Breadcrumb} />
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
                    <Route exact path="/payout" component={payout} />
                    <Route exact path="/Profile" component={ProfileView} />
                    <Route exact path="/MemberList" component={MemberList} />
                    <Route exact path="/KycDetails" component={KycDetails} />
                    <Route exact path="/membership" component={Membership} />
                    <Route exact path="/cart" component={Cart} />
                    <Route
                      exact
                      path="/shoppingcart"
                      component={ShoppingCart}
                    />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route
                      exact
                      path="/packagetable"
                      component={PackageTable}
                    />
                    <Route exact path="/moredetails" component={Moredetails} />
                    <Route
                      exact
                      path="/approval2"
                      component={Approvalshopping}
                    />
                    <Route exact path="/mailbox" component={Mail} />
                    <Route
                      exact
                      path="/genologytree"
                      component={GenologyTree}
                    />
                    <Route exact path="/sponsortree" component={SponsorTree} />
                    {/* <Route exact path="/logout" component={LogOut} /> */}
                    <Route
                      exact
                      path="/privilegeduser"
                      component={Privilegeduser}
                    />
                  </Switch>
                  <Description />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
