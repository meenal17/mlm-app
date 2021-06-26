import React, {useState} from "react";
// import Header from "../Header/Header";
import {Link} from "react-router-dom";

const LefSide = () => {
  return (
    <>
      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar sidebar-scroll">
        <div class="main-sidebar-header" style={{backgroundColor: "#1c2b36"}}>
          <a class=" desktop-logo logo-light " href="">
            <img
              src="../../assets/img/brand/logo.png"
              class="main-logo"
              alt="logo"
            />
          </a>
          <a class=" desktop-logo logo-dark" href="">
            <img
              src="../../assets/img/brand/logo.png"
              class="main-logo dark-theme"
              alt="logo"
            />
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
              <Link class="side-menu__item" to="/dashboard">
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
                  <Link class="slide-item" to="/genealogy">
                    Genealogy Tree
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/SponserTree">
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
            <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-shopping-bag"></i>
                <span class="side-menu__label">Shopping Cart</span>
              </a>
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
                  <Link class="slide-item" to="/">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Active/Deactive
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Joining
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Commission
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Total Bonus
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Total Earning
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Repurchase/Cart
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    Purchase
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/">
                    PayOut
                  </Link>
                </li>
              </ul>
            </li>
            <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="#">
                <i class="side-menu__icon fa fa-envelope-o"></i>
                <span class="side-menu__label">Mail</span>
              </a>
            </li>
            <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="#">
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
