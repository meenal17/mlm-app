import React, {useState} from "react";
// import Header from "../Header/Header";
import {Link} from "react-router-dom";
import "../LFTsideBAR/style.css";
import {useTranslation} from "react-i18next";
const LefSide = () => {
  const {t, i18n} = useTranslation();

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
                <span class="side-menu__label">{t("dashboard.1")}</span>
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
                <span class="side-menu__label">{t("network.15")}</span>
                <i class="angle fe fe-chevron-down"></i>
              </Link>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/genologytree">
                    {t("GenealogyTree.16")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/sponsortree">
                    {t("SponsorTree.17")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/TreeView">
                    {t("TreeView.18")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/DownloadMember">
                    {t("DownLineMembers.19")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/ReferralMember">
                    {t("RefferralMembers.20")}
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
                <span class="side-menu__label"> {t("signup.21")}</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/Register">
                    {t("register.22")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/Approval">
                    {t("Approval.23")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/BRegister">
                    {t("bulk register.24")}
                  </Link>
                </li>
              </ul>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Bussiness">
                <i class="side-menu__icon fa fa-building-o"></i>
                <span class="side-menu__label"> {t("Bussiness.92")}</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Ewallet">
                <i class="side-menu__icon fa fa-briefcase"></i>
                <span class="side-menu__label">{t("Ewallet.26")}</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/payout">
                <i class="side-menu__icon fa fa-money"></i>
                <span class="side-menu__label">{t("PayOut.130")}</span>
              </Link>
            </li>
            <li class="slide">
              <Link class="side-menu__item" to="/Epin">
                <i class="side-menu__icon fa fa-bookmark-o"></i>
                <span class="side-menu__label">{t("Epin.153")}</span>
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
                <span class="side-menu__label">
                  {t("Profile Managment.29")}
                </span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/Profile">
                    {t("profileview.30")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/MemberList">
                    {t("memberlist.31")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/KycDetails">
                    {t("KYC detail.32")}
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
                <span class="side-menu__label"> {t("package.33")}</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/membership">
                    {t("membership.34")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/cart">
                    {t("Repurchase/Cart.35")}
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
                <span class="side-menu__label">{t("Shopping Cart.36")}</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/shoppingcart">
                    {t("checkout.37")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/approval2">
                    {t("approval.38")}
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
                <span class="side-menu__label"> {t("Reports.39")}</span>
                <i class="angle fe fe-chevron-down"></i>
              </a>
              <ul class="slide-menu">
                <li>
                  <Link class="slide-item" to="/reportprofile">
                    {t("profile.40")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/active-deactiveprofile">
                    {t("checkout.41")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/joinings">
                    {t("Joining.42")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/commission">
                    {t("Commission.43")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/totalBonus">
                    {t("totalBonus.44")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/totalearning">
                    {t("total earning.45")}
                  </Link>
                </li>

                {/* <li>
                  <Link class="slide-item" to="/">
                    Purchase
                  </Link>
                </li> */}
                <li>
                  <Link class="slide-item" to="/payoutrelease">
                    {t("payoutrelease.46")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/rankperformane">
                    {t("rankperformance.47")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/rankarchive">
                    {t("rankarchive.48")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/e-pintransfer">
                    {t("epin transfer.49")}
                  </Link>
                </li>
                <li>
                  <Link class="slide-item" to="/packageupgrated">
                    {t("packageupgrated.50")}
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
                <span class="side-menu__label">{t("mail.51")}</span>
              </Link>
            </li>
            <li class="slide">
              <Link
                class="side-menu__item"
                data-toggle="slide"
                to="/privilegeduser"
              >
                <i class="side-menu__icon fa fa-user-circle-o"></i>
                <span class="side-menu__label">{t("Privileged User.52")}</span>
              </Link>
            </li>
            <li class="slide">
              <a class="side-menu__item" data-toggle="slide" href="/logout">
                <i class="side-menu__icon fa fa-sign-out"></i>
                <span class="side-menu__label">{t("logout.53")}</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default LefSide;
