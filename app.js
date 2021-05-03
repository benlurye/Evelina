$(document).ready(function() {

    // // Display correct links based on day of week

    // var Now = new Date();
    // var CurrentDay = Now.getDay();

    // // Display brunch menu and brunch drinks menu
    // if ((CurrentDay == 0 || CurrentDay == 6) && Now.getHours()< 16) {
    //     $('#brunch_link').show();
    //     $('#brunch_drinks_link').show();
    // } 
    // // Display lunch menu
    // if ((CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 5) && Now.getHours()< 16) {
    //     $('#lunch_link').show();
    // } 
    // // Display dinner menu
    // if (Now.getHours()>=16) {
    // $('#dinner_link').show();
    // } 
    

    // click on links to display different menus

    $("#lunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Lunch.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served M-F');
    });

    $("#brunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Sat-Sun');
    });

    $("#dinner_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dinner.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#cocktails_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Cocktails.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#BTG_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/WBTG_Beer.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#BTB_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Wine_BTB.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#dessert_digestifs_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dessert_Amaro_Mezcal.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#brunch_drinks_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch_Cocktails.jpg');
        $('#menu_avail_hours').css('display', 'none');
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