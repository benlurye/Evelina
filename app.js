$(document).ready(function() {

    // // Determine day of week and time for menu availability purposes

    var Now = new Date();
    var CurrentDay = Now.getDay();

 
    // Dim breakfast/lunch links on weekend
    
    if ((CurrentDay == 0 || CurrentDay == 6) && Now.getHours()< 16) {
        $('#lunch_link').css('opacity', '.5');
        $('#breakfast_link').css('opacity', '.5');
    };

    function hideMenu(menuToHide) {
        $(menuToHide).css('display', 'none');
    }
    

    // click on links to display different menus
    $("#breakfast_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Breakfast.jpg');
        $('#menu_avail_hours').css('display', 'block');
        $('#menu_avail_hours').text('Served Mon-Fri | 8 AM-11:30 AM');
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

    $("#between_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Between.jpg');
        $('#menu_avail_hours').css('display', 'none');
    });

    $("#special_menu_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Thanksgiving.jpg');
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
        $('#menu_active').attr('src', 'images/menus/WBTG.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#BTB_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/WBTB.jpg');
        $('#menu_avail_hours').css('display', 'none');
        hideMenu('#menu_active_2');
    });

    $("#dessert_digestifs_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dolci.jpg');
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

// const video1 = document.getElementById("video1");
// const video2 = document.getElementById("video2");
// const video3 = document.getElementById("video3");

// video1.addEventListener('ended', function() {
//     video1.style.display = "none";     
// });

// video2.addEventListener("timeupdate", function(){
//     if(this.currentTime = 3) {
//         this.pause();
//     }

// // video2.addEventListener('ended', function() {
// //     video2.style.display = "none";     
// // });

// video3.addEventListener('ended', function() {
//     video3.style.display = "none";
// });


    
})