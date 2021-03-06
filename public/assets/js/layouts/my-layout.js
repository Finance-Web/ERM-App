"use strict!";
$(document).ready(function () {
    var l = "themelight1";
    var h = "theme1";
    var r = "theme1";
    var q = "theme1";
    var b = "theme1";
    var d = "theme1";
    var e = "light";
    var B = "false";
    var p = "img1";
    var m = "wide";
    var o = "shrink";
    var u = "overlay";
    var i = "overlay";
    $("#pcoded").pcodedmenu({
        themelayout: "vertical",
        verticalMenuplacement: "left",
        verticalMenulayout: m,
        MenuTrigger: "click",
        SubMenuTrigger: "click",
        activeMenuClass: "active",
        ThemeBackgroundPattern: q,
        HeaderBackground: h,
        LHeaderBackground: r,
        NavbarBackground: l,
        ActiveItemBackground: b,
        SubItemBackground: "theme2",
        ActiveItemStyle: "style0",
        ItemBorder: true,
        ItemBorderStyle: "none",
        NavbarImage: B,
        ActiveNavbarImage: p,
        freamtype: d,
        SubItemBorder: true,
        DropDownIconStyle: "style3",
        menutype: "st2",
        layouttype: e,
        FixedNavbarPosition: true,
        FixedHeaderPosition: true,
        collapseVerticalLeftHeader: true,
        VerticalSubMenuItemIconStyle: "style7",
        VerticalNavigationView: "view1",
        verticalMenueffect: {
            desktop: o,
            tablet: u,
            phone: i,
        },
        defaultVerticalMenu: {
            desktop: "expanded",
            tablet: "offcanvas",
            phone: "offcanvas",
        },
        onToggleVerticalMenu: {
            desktop: "offcanvas",
            tablet: "expanded",
            phone: "expanded",
        },
    });

    function c() {
        $(".theme-color > a.navbg-pattern").on("click", function () {
            var C = $(this).attr("navbg-pattern");
            $(".pcoded").attr("sidebar-img-type", C)
        })
    }
    c();

    function a() {
        $(".theme-color > a.Layout-type").on("click", function () {
            var C = $(this).attr("layout-type");
            $(".pcoded").attr("layout-type", C);
            if (C == "dark") {
                $(".pcoded-header").attr("header-theme", "theme6");
                $(".pcoded-navbar").attr("navbar-theme", "theme1");
                $(".pcoded").attr("sidebar-img", "false");
                $("body").addClass("dark");
                $("body").attr("themebg-pattern", "theme6");
                $(".pcoded-navigation-label").attr("menu-title-theme", "theme9")
            }
            if (C == "light") {
                $(".pcoded-header").attr("header-theme", "theme1");
                $(".pcoded-navbar").attr("navbar-theme", "themelight1");
                $(".pcoded").attr("sidebar-img", "false");
                $(".pcoded-navigation-label").attr("menu-title-theme", "theme1");
                $("body").removeClass("dark");
                $("body").attr("themebg-pattern", "theme1")
            }
            if (C == "img") {
                $(".pcoded-header").attr("header-theme", "theme1");
                $(".pcoded-navbar").attr("navbar-theme", "themelight1");
                $(".pcoded-navbar").attr("navbar-theme", "themelight1");
                $(".pcoded").attr("sidebar-img", "true");
                $(".pcoded").attr("frame-type", "theme1");
                $(".pcoded-navigation-label").attr("menu-title-theme", "theme1")
            }
        })
    }
    a();

    function x() {
        $(".theme-color > a.leftheader-theme").on("click", function () {
            var C = $(this).attr("lheader-theme");
            $(".pcoded-navigation-label").attr("menu-title-theme", C)
        })
    }
    x();

    function f() {
        $(".theme-color > a.header-theme").on("click", function () {
            var C = $(this).attr("header-theme");
            var D = $(this).attr("active-item-color");
            $(".pcoded-header").attr("header-theme", C);
            $(".pcoded-navbar").attr("active-item-theme", D);
            $(".pcoded").attr("fream-type", C);
            $(".pcoded-navigation-label").attr("menu-title-theme", C);
            $("body").attr("themebg-pattern", C)
        })
    }
    f();

    function t() {
        $(".theme-color > a.navbar-theme").on("click", function () {
            var C = $(this).attr("navbar-theme");
            $(".pcoded-navbar").attr("navbar-theme", C);
            $(".pcoded").attr("sidebar-img", "false");
            if (C == "themelight1") {
                $(".pcoded-navigation-label").attr("menu-title-theme", "theme1")
            }
            if (C == "theme1") {
                $(".pcoded-navigation-label").attr("menu-title-theme", "theme9")
            }
        })
    }
    t();

    function k() {
        $(".theme-color > a.active-item-theme").on("click", function () {
            var C = $(this).attr("active-item-theme");
            $(".pcoded-navbar").attr("active-item-theme", C)
        })
    }
    k();

    function y() {
        $(".theme-color > a.themebg-pattern").on("click", function () {
            var C = $(this).attr("themebg-pattern");
            $("body").attr("themebg-pattern", C)
        })
    }
    y();

    function w() {
        $("#theme-layout").change(function () {
            if ($(this).is(":checked")) {
                $(".pcoded").attr("vertical-layout", "box");
                $("#bg-pattern-visiblity").removeClass("d-none")
            } else {
                $(".pcoded").attr("vertical-layout", "wide");
                $("#bg-pattern-visiblity").addClass("d-none")
            }
        })
    }
    w();

    function n() {
        $("#vertical-menu-effect").val("shrink").on("change", function (C) {
            C = $(this).val();
            $(".pcoded").attr("vertical-effect", C)
        })
    }
    n();

    function s() {
        $("#vertical-border-style").val("solid").on("change", function (C) {
            C = $(this).val();
            $(".pcoded-navbar .pcoded-item").attr("item-border-style", C)
        })
    }
    s();

    function v() {
        $("#vertical-dropdown-icon").val("style1").on("change", function (C) {
            C = $(this).val();
            $(".pcoded-navbar .pcoded-hasmenu").attr("dropdown-icon", C)
        })
    }
    v();

    function z() {
        $("#vertical-subitem-icon").val("style5").on("change", function (C) {
            C = $(this).val();
            $(".pcoded-navbar .pcoded-hasmenu").attr("subitem-icon", C)
        })
    }
    z();

    function g() {
        $("#sidebar-position").change(function () {
            if ($(this).is(":checked")) {
                $(".pcoded-navbar").attr("pcoded-navbar-position", "fixed");
                $(".pcoded-header .pcoded-left-header").attr("pcoded-lheader-position", "fixed")
            } else {
                $(".pcoded-navbar").attr("pcoded-navbar-position", "absolute");
                $(".pcoded-header .pcoded-left-header").attr("pcoded-lheader-position", "relative")
            }
        })
    }
    g();

    function A() {
        $("#header-position").change(function () {
            if ($(this).is(":checked")) {
                $(".pcoded-header").attr("pcoded-header-position", "fixed");
                $(".pcoded-navbar").attr("pcoded-header-position", "fixed");
                $(".pcoded-main-container").css("margin-top", $(".pcoded-header").outerHeight())
            } else {
                $(".pcoded-header").attr("pcoded-header-position", "relative");
                $(".pcoded-navbar").attr("pcoded-header-position", "relative");
                $(".pcoded-main-container").css("margin-top", "0px")
            }
        })
    }
    A();

    function j() {
        $("#collapse-left-header").change(function () {
            if ($(this).is(":checked")) {
                $(".pcoded-header, .pcoded ").removeClass("iscollapsed");
                $(".pcoded-header, .pcoded").addClass("nocollapsed")
            } else {
                $(".pcoded-header, .pcoded").addClass("iscollapsed");
                $(".pcoded-header, .pcoded").removeClass("nocollapsed")
            }
        })
    }
    j()
});

function handlemenutype(a) {
    $(".pcoded").attr("nav-type", a)
}
handlemenutype("st2");
