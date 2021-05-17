$(document).ready(function() {

    // // Determine day of week and time for menu availability purposes

    var Now = new Date();
    var CurrentDay = Now.getDay();

 
    // Dim morning menus links to make it clearer what is available right now
    if ((Now.getHours()<12 && CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 5)) {
        $('#lunch_link').css('opacity', '.5');
    };
    
    if (Now.getHours()<14) {
        $('#dinner_link').css('opacity', '.5');
    };
    
    if ((CurrentDay == 0 || CurrentDay == 6) && Now.getHours()< 16) {
        $('#lunch_link').css('opacity', '.5');
        $('#breakfast_link').css('opacity', '.5');
    };
    
    if ((Now.getHours()<16 && CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 5)) {
        $('#brunch_link').css('opacity', '.5');
        $('#brunch_drinks_link').css('opacity', '.5');
    };

    if ((Now.getHours()>12 && CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 5)) {
        $('#breakfast_link').css('opacity', '.5');
    };

    


    function hideMenu(menuToHide) {
        $(menuToHide).css('display', 'none');
    }
    

    // click on links to display different menus
    $("#breakfast_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Breakfast.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Mon-Fri | 8 AM-12 PM');
        hideMenu('#menu_active_2');
    });


    $("#lunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Lunch.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Mon-Fri | 11:30 AM-3:30 PM');
        hideMenu('#menu_active_2');
    });

    $("#brunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Sat-Sun');
    });

    $("#special_menu_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Special_Brunch.jpg');
        $('#menu_active_2').css('display', 'block');
        $('#menu_active_2').attr('src', 'images/menus/Special_Dinner.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#dinner_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dinner.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#cocktails_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Cocktails.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#BTG_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/WBTG_Beer.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#BTB_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Wine_BTB.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#dessert_digestifs_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dessert_Amaro_Mezcal.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#brunch_drinks_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch_Cocktails.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Sat-Sun');
        hideMenu('#menu_active_2');
    });

// mobile menu

var $mobileNav = $(".nav_choices");
var $mobileLinks = $(".nav_choice");
var $hamburger = $("#hamburger");

// hamburger navigation effect
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");

  // open/close menu
  $mobileNav.toggleClass("active-nav");
});


// mobile links dissapear on link click/tap
$mobileLinks.on("click", function(e) {
  $mobileNav.toggleClass("active-nav");
});
    
})