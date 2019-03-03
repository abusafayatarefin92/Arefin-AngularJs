/* ////////////////////////////////   materialcss script /////////////////////////////////////////// */

'use strict';

/* Prepage loader */
$(window).on('load', function() { $("#prepage-loader").delay(400).fadeOut('slow'); });

// write inside all jquery function
$(function() {

    /* Initialization variable for global use */

    // initialize browser width
    var browerBodyWidth = $(window).width();

    // initialize rightsidebar width
    var rightSidebarWidth = browerBodyWidth > 600 ? 350 : 300;
    // initialize tooltipped class
    var tootltipAnchor = $('.left-sidebar .leftside-navigation a.tooltipped');
    // window resize
    $(window).resize(function() {
        browerBodyWidth = $(window).width();
        rightSidebarWidth = browerBodyWidth > 600 ? 350 : 300;

        // show and hide tooltip on left sidebar menu when sidebar collapsed
        if (browerBodyWidth < 990) {
            if ($("#control-body").hasClass("collapsed-sidebar")) {
                tootltipAnchor.tooltip('remove');
            }
        } else {
            if ($("#control-body").hasClass("collapsed-sidebar")) {
                tootltipAnchor.tooltip();
            }
        }


    });

    // dropdowns with default option
    $('.dropdown-button').dropdown({
        constrainWidth: true, // Does change width of dropdown to that of the activator
        belowOrigin: false // Displays dropdown top the button
    });
    //dropdown with width change
    $('.dropdown-button.dropdown-widthChange').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: false // Displays dropdown top the button
    });
    //dropdown with below origin
    $('.dropdown-button.dropdown-belowOrigin').dropdown({
        constrainWidth: true, // Does change width of dropdown to that of the activator
        belowOrigin: true // Displays dropdown below the button
    });

    //dropdown with width change and below origin
    $('.dropdown-button.dropdown-widthChange.dropdown-belowOrigin').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: true // Displays dropdown top the button
    });

    //dropdown with width change and right alignment
    $('.dropdown-button.dropdown-widthChange.dropdown-rightAlignment').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: false, // Displays dropdown top the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    });

    //dropdown with width change,below origin and right alignment
    $('.dropdown-button.dropdown-widthChange.dropdown-belowOrigin.dropdown-rightAlignment').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown top the button
        alignment: 'right' // Displays dropdown with edge aligned to the right of button
    });

    // dropdowns with default option with active on hover
    $('.dropdown-button.dropdown-hover').dropdown({
        constrainWidth: true, // Does change width of dropdown to that of the activator
        belowOrigin: false, // Displays dropdown top the button
        hover: true // Activate on hover
    });
    //dropdown with width change and active on hover
    $('.dropdown-button.dropdown-widthChange.dropdown-widthChange-hover').dropdown({
        constrainWidth: false, // Does change width of dropdown to that of the activator
        belowOrigin: false, // Displays dropdown top the button
        hover: true // Activate on hover
    });
    //dropdown with below origin and active on hover
    $('.dropdown-button.dropdown-belowOrigin.dropdown-hover').dropdown({
        constrainWidth: true, // Does change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown below the button
        hover: true // Activate on hover
    });

    //dropdown with width change, below origin and active on hover
    $('.dropdown-button.dropdown-widthChange.dropdown-belowOrigin.dropdown-widthChange-hover').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown top the button
        hover: true // Activate on hover
    });

    //dropdown with width change, right alignment and active on hover
    $('.dropdown-button.dropdown-widthChange.dropdown-rightAlignment.dropdown-widthChange-hover').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: false, // Displays dropdown top the button
        alignment: 'right', // Displays dropdown with edge aligned to the right of button
        hover: true // Activate on hover
    });

    //dropdown with width change, below origin, right alignment and active on hover
    $('.dropdown-button.dropdown-widthChange.dropdown-belowOrigin.dropdown-rightAlignment.dropdown-widthChange-hover').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown top the button
        alignment: 'right', // Displays dropdown with edge aligned to the right of button
        hover: true // Activate on hover
    });


    /* full screen */
    $('#page-fullscreen').on('click', function() {

        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    });

    /* Page Refresh*/

    $('#page-refresh').on('click', function() {
        location.reload();
        return false;

    });

    /* hide and show left sidebar */

    $('#toggle-left-sidebar,.left-sidebar-overlay').on('click', function() {

        $("#control-body").toggleClass("md-medium-sidebar");

    });

    /* collapsed Left sidebar menu*/

    if ($("#control-body").hasClass("collapsed-sidebar")) {
        tootltipAnchor.tooltip();
    } else {
        tootltipAnchor.tooltip('remove');
    }


    $(document).on('click', '#collapsed-left-sidebar,.collapsed-sidebar .collapsible-label1', function() {
        if (browerBodyWidth > 990) {
            $("#control-body").toggleClass("collapsed-sidebar");
            if ($("#control-body").hasClass("collapsed-sidebar")) {
                tootltipAnchor.tooltip();
            } else {
                tootltipAnchor.tooltip('remove');
            }
        }
    });

    /* Left sidebar sub menu show and hide */

    $(document).on('click', '.left-sidebar-body .collapsible-label1', function() {
        if ($(this).next('.collapsible-body').css("display") != 'block') {
            $('.left-sidebar-body .collapsible-label1').next('.collapsible-body').slideUp();
            $('.left-sidebar-body .collapsible-label1').removeClass("active");
        }
        $(this).toggleClass("active");
        $(this).next('.collapsible-body').slideToggle();

    });

    $(document).on('click', '.collapsible-label2', function() {
        if ($(this).next('.collapsible-body').css("display") != 'block') {
            $('.collapsible-label2').next('.collapsible-body').slideUp();
            $('.collapsible-label2').removeClass("active");
        }
        $(this).toggleClass("active");
        $(this).next('.collapsible-body').slideToggle();

    });

    /* right sidebar show and hide*/

    $('.toggle-right-sidebar,.right-sidebar-overlay').on('click', function() {
        $('.right-sidebar').animate({
            width: 'toggle'
        }, 200);

        $('.right-sidebar-overlay').toggleClass('hide');
    });

    /*hide and show searchbox*/
    $('.hide-show-nav-search,.search-overlay').on('click', function() {
        $('#search-body').animate({
            width: 'toggle'
        }, 100)
        $('.search-box').find('input')[0].focus();
        $('.search-overlay').toggleClass('hide');
    });

    /*scroll page bottom to top*/

    $('#scroll-top-dash').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    /* show prepage loader when click on sidebar menu*/
    $('.menu').on('click', function() {
        $("#prepage-loader").show();
    });

    /* page settings */

    // layout options
    $('input[name="layout"]').on('click', function() {
        var layoutOptions = $(this).attr('id');
        switch (layoutOptions) {
            case "default-layout":
                $("#control-body").addClass(" fixed-sidebar fixed-nav").removeClass("unfixed-sidebar unfixed-nav layout-boxed");
                break;
            case "fixed-header-unfixed-sidebar":
                $("#control-body").addClass(" unfixed-sidebar fixed-nav").removeClass("fixed-sidebar unfixed-nav layout-boxed");
                break;

            case "unfixed-header-sidebar":
                $("#control-body").addClass(" unfixed-sidebar unfixed-nav").removeClass("fixed-sidebar fixed-nav layout-boxed");
                break;

            case "default-boxed-layout":
                $("#control-body").addClass("layout-boxed fixed-sidebar fixed-nav").removeClass("unfixed-sidebar unfixed-nav ");
                break;

            case "boxed-fixed-header-unfixed-sidebar":
                $("#control-body").addClass("layout-boxed unfixed-sidebar fixed-nav").removeClass("fixed-sidebar unfixed-nav ");
                break;

            case "boxed-unfixed-sidebar-header":
                $("#control-body").addClass("layout-boxed unfixed-sidebar unfixed-nav").removeClass("fixed-sidebar fixed-nav ");
                break;

        }
    });

    /* initialize swipeable tab*/

    $('.tabs.tabs-swipe').tabs({
        swipeable: true
    });

    // chips example
    // Set tags
    $('.chips').material_chip();
    // Set initial tags
    $('.chips-initial').material_chip({
        data: [{
            tag: 'Apple',
        }, {
            tag: 'Microsoft',
        }, {
            tag: 'Google',
        }],
    });
    // Use placeholders and override hint texts
    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });


    /*initialize models*/
    $('.modal').modal();

    /*initialize select*/
    $('select').material_select();

    /* index page */
    // initialize ledt sidebar
    $('.index-mobile-collapse').sideNav();

}); // end of document ready