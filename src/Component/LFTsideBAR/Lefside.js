import React, {useState} from "react";
// import Header from "../Header/Header";
import {Link} from "react-router-dom";
import "../LFTsideBAR/style.css";
const LefSide = () => {
  return (
    <>
      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar sidebar-scroll scroller">
        <div class="main-sidebar-header" style={{backgroundColor: "#1c2b36"}}>
          <a class=" desktop-logo logo-light " href="">
            <img
              src="../../assets/img/brand/logo.png"
              class="main-logo"
              alt="logo"
            />
          </a>
          <a class=" desktop-logo logo-dark" href="">
            <div
              class="main-logo dark-theme"
              style={{height: "50px", width: "150px"}}
            >
              <img
                src="../../assets/img/brand/logo.png"
                alt="logo"
                style={{height: "100%", width: "100%"}}
              />
            </div>
          </a>
          <a class="logo-icon mobile-logo icon-light" href="">
            <img
              src="../../assets/img/brand/logo.png"
              class="logo-icon"
              alt="logo"
            />
          </a>
          <a class="logo-icon mobile-logo " href="">
            <img
              src="../../assets/img/brand/icon.png"
              class="logo-icon "
              alt="logo"
            />
          </a>
        </div>
        <div
          class="main-sidebar-body circle-animation"
          style={{backgroundColor: "#1c2b36"}}
        >
          <ul class="side-menu circle">
            <li class="slide">
              <Link class="side-menu__item" to="">
                <i class="side-menu__icon ti-desktop"></i>
                <span class="side-menu__label">Dashboard</span>
              </Link>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <Link class="side-menu__item">
                <i class="side-menu__icon fa fa-sitemap text-white"> </i>
                <span class="side-menu__label">Networks</span>
                <i class="angle fe fe-chevron-down"></i>
              </Link>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/genologytree">
                    Genealogy Tree
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/sponsortree">
                    Sponsor Tree
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/TreeView">
                    Tree View
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/DownloadMember">
                    DownLine Members
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/ReferralMember">
                    Refferral Members
                  </Link>
                </li>
              </ul>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fas fa-user-plus"></i>
                <span class="side-menu__label">signup</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/Register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/Approval">
                    Approval
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/BRegister">
                    Bulk Register
                  </Link>
                </li>
              </ul>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Bussiness">
                <i class="side-menu__icon fa fa-building-o"></i>
                <span class="side-menu__label">Bussiness</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Ewallet">
                <i class="side-menu__icon fa fa-briefcase"></i>
                <span class="side-menu__label">Ewallet</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/payout">
                <i class="side-menu__icon fa fa-money"></i>
                <span class="side-menu__label">PayOut</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Epin">
                <i class="side-menu__icon fa fa-bookmark-o"></i>
                <span class="side-menu__label">E-pin</span>
              </Link>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-address-book"></i>
                <span class="side-menu__label">Profile Managment</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/Profile">
                    Profile View
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/MemberList">
                    Member List
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/KycDetails">
                    KYC Details
                  </Link>
                </li>
              </ul>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-cubes"></i>
                <span class="side-menu__label">Package</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/membership">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/cart">
                    Repurchase/Cart
                  </Link>
                </li>
              </ul>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-shopping-bag"></i>
                <span class="side-menu__label">Shopping Cart</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/shoppingcart">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/approval2">
                    Approval
                  </Link>
                </li>
              </ul>
            </li>
            <li
              class="slide"
              onClick={(e) =>
                window?.jQuery(e.currentTarget)?.toggleClass("is-expanded")
              }
            >
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-cubes"></i>
                <span class="side-menu__label">Reports</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/reportprofile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/active-deactiveprofile">
                    Active/Deactive
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/joinings">
                    Joining
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/commission">
                    Commission
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/totalBonus">
                    Total Bonus
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/totalearning">
                    Total Earning
                  </Link>
                </li>

                {/* <li>
                  <Link class="slide-item" to="/">
                    Purchase
                  </Link>
                </li> */}
                <li>
                  <Link class="slide-item" to="/payoutrelease">
                    PayOut
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/rankperformane">
                    Rank Performance
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/rankarchive">
                    Rank Archive
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/e-pintransfer">
                    E-pin Transfer
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/packageupgrated">
                    Package Upgrade
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-envelope-o"></i>
                <span class="side-menu__label">Mail</span>
              </a>
            </li> */}
            <li class="slide">
              <Link class="side-menu__item" to="/mailbox">
                <i class="side-menu__icon fa fa-envelope-o "></i>
                <span class="side-menu__label">Mail</span>
              </Link>
            </li>
            <li class="slide">
              <Link
                class="side-menu__item"
                data-toggle="slide"
                to="/privilegeduser"
              >
                <i class="side-menu__icon fa fa-user-circle-o"></i>
                <span class="side-menu__label">Privileged User</span>
              </Link>
            </li>
            <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="/logout">
                <i class="side-menu__icon fa fa-sign-out"></i>
                <span class="side-menu__label">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default LefSide;
