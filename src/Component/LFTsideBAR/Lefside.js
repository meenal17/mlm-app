import React from "react";
import Header from "../Header/Header";
const LefSide = () => {
  return (
    <>
      <div class="page">
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar sidebar-scroll ">
          <div class="main-sidebar-header">
            <a class=" desktop-logo logo-light" href="index.html">
              <img
                src="../../assets/img/brand/logo.png"
                class="main-logo"
                alt="logo"
              />
            </a>
            <a class=" desktop-logo logo-dark" href="index.html">
              <img
                src="../../assets/img/brand/logo-white.png"
                class="main-logo dark-theme"
                alt="logo"
              />
            </a>
            <a class="logo-icon mobile-logo icon-light" href="index.html">
              <img
                src="../../assets/img/brand/favicon.png"
                class="logo-icon"
                alt="logo"
              />
            </a>
            <a class="logo-icon mobile-logo icon-dark" href="index.html">
              <img
                src="../../assets/img/brand/favicon-white.png"
                class="logo-icon dark-theme"
                alt="logo"
              />
            </a>
          </div>
          <div class="main-sidebar-body circle-animation ">
            <ul class="side-menu circle">
              <li>
                <h3 class="">Dashboard</h3>
              </li>
              <li class="slide">
                <a class="side-menu__item" href="index.html">
                  <i class="side-menu__icon ti-desktop"></i>
                  <span class="side-menu__label">Dashboard</span>
                </a>
              </li>
              <li>
                <h3>Widgets & Maps</h3>
              </li>
              <li class="slide">
                <a class="side-menu__item" href="widgets.html">
                  <i class="side-menu__icon ti-package"></i>
                  <span class="side-menu__label">Widgets</span>
                </a>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-email  menu-icons"></i>
                  <span class="side-menu__label">Mail</span>
                  <span class="badge badge-warning side-badge">5</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="mail.html">
                      Mail
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="mail-compose.html">
                      Mail Compose
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="mail-read.html">
                      Read-mail
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="mail-settings.html">
                      mail-settings
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chat.html">
                      Chat
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-briefcase"></i>
                  <span class="side-menu__label">Apps</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="cards.html">
                      Cards
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="draggablecards.html">
                      Draggablecards
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="rangeslider.html">
                      Range-slider
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="calendar.html">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="contacts.html">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="image-compare.html">
                      Image-compare
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="notification.html">
                      Notification
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="widget-notification.html">
                      Widget-notification
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="treeview.html">
                      Treeview
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" href="icons.html">
                  <i class="side-menu__icon ti-face-smile"></i>
                  <span class="side-menu__label">Icons</span>
                </a>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-map-alt menu-icon"></i>
                  <span class="side-menu__label">Maps</span>
                  <span class="badge badge-pink side-badge">2</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="map-leaflet.html">
                      Mapel Maps
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="map-vector.html">
                      Vector Maps
                    </a>
                  </li>
                </ul>
              </li>

              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-layout menu-icon"></i>
                  <span class="side-menu__label">Tables</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="table-basic.html">
                      Basic Tables
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="table-data.html">
                      Data Tables
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3>COMPONENTS</h3>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-server"></i>
                  <span class="side-menu__label">Elements</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="alerts.html">
                      Alerts
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="avatar.html">
                      Avatar
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="breadcrumbs.html">
                      Breadcrumbs
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="badge.html">
                      Badge
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="dropdown.html">
                      Dropdown
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="thumbnails.html">
                      Thumbnails
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="images.html">
                      Images
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="list-group.html">
                      List Group
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="navigation.html">
                      Navigation
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="pagination.html">
                      Pagination
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="popover.html">
                      Popover
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="progress.html">
                      Progress
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="spinners.html">
                      Spinners
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="media-object.html">
                      Media Object
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="typography.html">
                      Typography
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="tooltip.html">
                      Tooltip
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="toast.html">
                      Toast
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="tags.html">
                      Tags
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="tabs.html">
                      Tabs
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-palette "></i>
                  <span class="side-menu__label">Advanced UI</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="accordion.html">
                      Accordion
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="carousel.html">
                      Carousel
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="collapse.html">
                      Collapse
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="modals.html">
                      Modals
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="timeline.html">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="sweet-alert.html">
                      Sweet Alert
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="rating.html">
                      Ratings
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="counters.html">
                      Counters
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="search.html">
                      Search
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="userlist.html">
                      Userlist
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <h3>Forms</h3>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-pencil-alt"></i>
                  <span class="side-menu__label">Forms</span>
                  <span class="badge badge-info side-badge">6</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="form-elements.html">
                      Form Elements
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="form-advanced.html">
                      Advanced Forms
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="form-layouts.html">
                      Form Layouts
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="form-validation.html">
                      Form Validation
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="form-wizards.html">
                      Form Wizards
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="form-editor.html">
                      WYSIWYG Editor
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-pie-chart"></i>
                  <span class="side-menu__label">Charts</span>
                  <span class="badge badge-danger side-badge">5</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="chart-morris.html">
                      Morris Charts
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chart-flot.html">
                      Flot Charts
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chart-chartjs.html">
                      ChartJS
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chart-echart.html">
                      Echart
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chart-sparkline.html">
                      Sparkline
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="chart-peity.html">
                      Chart-peity
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3>OTHER PAGES</h3>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-files"></i>
                  <span class="side-menu__label">Pages</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="profile.html">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="editprofile.html">
                      Edit-Profile
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="invoice.html">
                      Invoice
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="gallery.html">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="todotask.html">
                      Todotask
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="faq.html">
                      Faqs
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="empty.html">
                      Empty Page
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-shopping-cart-full"></i>
                  <span class="side-menu__label">Ecommerce</span>
                  <span class="badge badge-success side-badge">3</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="products.html">
                      Products
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="product-details.html">
                      Product-Details
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="product-cart.html">
                      Cart
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-layers-alt"></i>
                  <span class="side-menu__label">Utilities</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="background.html">
                      Background
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="border.html">
                      Border
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="display.html">
                      Display
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="flex.html">
                      Flex
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="height.html">
                      Height
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="margin.html">
                      Margin
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="padding.html">
                      Padding
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="position.html">
                      Position
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="width.html">
                      Width
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="extras.html">
                      Extras
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-user"></i>
                  <span class="side-menu__label">Custom Pages</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="signin.html">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="signup.html">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="forgot.html">
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="reset.html">
                      Reset Password
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="lockscreen.html">
                      Lockscreen
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="underconstruction.html">
                      UnderConstruction
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="404.html">
                      404 Error
                    </a>
                  </li>
                  <li>
                    <a class="slide-item" href="500.html">
                      500 Error
                    </a>
                  </li>
                </ul>
              </li>
              <li class="slide ">
                <a class="side-menu__item" data-toggle="slide" href="#">
                  <i class="side-menu__icon ti-view-grid"></i>
                  <span class="side-menu__label">Submenus</span>
                  <i class="angle fe fe-chevron-down"></i>
                </a>
                <ul class="slide-menu">
                  <li>
                    <a class="slide-item" href="#">
                      Level-1
                    </a>
                  </li>
                  <li class="sub-slide">
                    <a class="slide-item" data-toggle="sub-slide" href="#">
                      <span class="sub-side-menu__label">Level2</span>
                      <i class="sub-angle fe fe-chevron-down"></i>
                    </a>
                    <ul class="sub-slide-menu">
                      <a
                        class="sub-side-menu__item"
                        data-toggle="sub-slide"
                        href="#"
                      >
                        <span class="sub-side-menu__label">Level1.1</span>
                        <i class="sub-angle2 fe fe-chevron-up"></i>
                      </a>
                      <ul class="sub-slide-menu">
                        <a class="sub-slide-item2" href="#">
                          Level-2.1
                        </a>
                        <a class="sub-slide-item2" href="#">
                          Level-2.2
                        </a>
                      </ul>
                      <li>
                        <a class="sub-side-menu__item" href="#">
                          Level1.2
                        </a>
                      </li>
                      <li>
                        <a class="sub-side-menu__item" href="#">
                          Level1.3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <Header />
      </div>
    </>
  );
};
export default LefSide;
