(function () {
  "use strict";

  var slideMenu = window.JQuery(".side-menu");

  // Toggle Sidebar
  window
    .JQuery(document)
    .on("click", '[data-toggle="sidebar"]', function (event) {
      event.preventDefault();
      window.JQuery(".app").toggleClass("sidenav-toggled");
    });

  window.JQuery(window).on("load resize", function () {
    if (window.JQuery(window).width() < 739) {
      window.JQuery(".side-menu").hover(function (event) {
        event.preventDefault();
        window.JQuery(".app").addClass("sidenav-toggled");
      });
    }
    if (window.JQuery(window).width() > 739.5) {
      window.JQuery(".side-menu").hover(function (event) {
        event.preventDefault();
        window.JQuery(".app").removeClass("sidenav-toggled");
      });
    }
  });

  // Activate sidebar slide toggle
  window.JQuery("[data-toggle='slide']").on("click", function (e) {
    // window.JQuery(this) = window.JQuery(this);
    var checkElement = window.JQuerythis.next();
    var animationSpeed = 300;
    var slideMenuSelector = ".slide-menu";
    if (checkElement.is(slideMenuSelector) && checkElement.is(":visible")) {
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass("open");
      });
      checkElement.parent("li").removeClass("is-expanded");
    } else if (
      checkElement.is(slideMenuSelector) &&
      !checkElement.is(":visible")
    ) {
      var parent = window.JQuerythis.parents("ul").first();
      var ul = parent.find("ul:visible").slideUp(animationSpeed);
      ul.removeClass("open");
      var parent_li = window.JQuerythis.parent("li");
      checkElement.slideDown(animationSpeed, function () {
        checkElement.addClass("open");
        parent.find("li.is-expanded").removeClass("is-expanded");
        parent_li.addClass("is-expanded");
      });
    }
    if (checkElement.is(slideMenuSelector)) {
      e.preventDefault();
    }
  });

  // Activate sidebar slide toggle
  window.JQuery("[data-toggle='sub-slide']").on("click", function (e) {
    //  window.JQuery(this) = window.JQuery(this);
    var checkElement = window.JQuerythis.next();
    var animationSpeed = 300,
      slideMenuSelector = ".sub-slide-menu";
    if (checkElement.is(slideMenuSelector) && checkElement.is(":visible")) {
      checkElement.slideUp(animationSpeed, function () {
        checkElement.removeClass("open");
      });
      checkElement.parent("li").removeClass("is-expanded");
    } else if (
      checkElement.is(slideMenuSelector) &&
      !checkElement.is(":visible")
    ) {
      var parent = window.JQuerythis.parents("ul").first();
      var ul = parent.find("ul:visible").slideUp(animationSpeed);
      ul.removeClass("open");
      var parent_li = window.JQuerythis.parent("li");
      checkElement.slideDown(animationSpeed, function () {
        checkElement.addClass("open");
        parent.find("li.is-expanded").removeClass("is-expanded");
        parent_li.addClass("is-expanded");
      });
    }
    if (checkElement.is(slideMenuSelector)) {
      e.preventDefault();
    }
  });

  //Activate bootstrip tooltips
  window.JQuery("[data-toggle='tooltip']").tooltip();

  // ______________Active Class
  window.JQuery(".app-sidebar a").each(function () {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (this.href == pageUrl) {
      window.JQuery(this).addClass("active");
      window.JQuery(this).parent().addClass("is-expanded");
      window.JQuery(this).parent().parent().prev().addClass("active");
      window.JQuery(this).parent().parent().addClass("open");
      window.JQuery(this).parent().parent().prev().addClass("is-expanded");
      window.JQuery(this).parent().parent().parent().addClass("is-expanded");
      window.JQuery(this).parent().parent().parent().parent().addClass("open");
      window
        .JQuery(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .prev()
        .addClass("active");
      window
        .JQuery(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .addClass("is-expanded");
    }
  });

  var toggleSidebar = function () {
    var w = window.JQuery(window);
    if (w.outerWidth() <= 1024) {
      window.JQuery("body").addClass("sidebar-gone");
      window
        .JQuery(document)
        .off("click", "body")
        .on("click", "body", function (e) {
          if (
            window.JQuery(e.target).hasClass("sidebar-show") ||
            window.JQuery(e.target).hasClass("search-show")
          ) {
            window.JQuery("body").removeClass("sidebar-show");
            window.JQuery("body").addClass("sidebar-gone");
            window.JQuery("body").removeClass("search-show");
          }
        });
    } else {
      window.JQuery("body").removeClass("sidebar-gone");
    }
  };
  toggleSidebar();
  window.JQuery(window).resize(toggleSidebar);

  //p-scroll
  //   const ps1 = new PerfectScrollbar(".sidebar-scroll", {
  //     suppressScrollX: true,
  //   });

  //sticky-header
  window.JQuery(window).on("scroll", function (e) {
    if (window.JQuery(window).scrollTop() >= 70) {
      window.JQuery(".main-header").addClass("fixed-header");
      window.JQuery(".main-header").addClass("visible-title");
    } else {
      window.JQuery(".main-header").removeClass("fixed-header");
      window.JQuery(".main-header").removeClass("visible-title");
    }
  });
})();
