$(document).ready(function() {

    // Display correct links based on day of week

    var Now = new Date();
    var CurrentDay = Now.getDay();

    // Display brunch menu and brunch drinks menu
    if ((CurrentDay == 0 || CurrentDay == 6) && Now.getHours()< 16) {
        $('#brunch_link').show();
        $('#brunch_drinks_link').show();
    } 
    // Display lunch menu
    else if ((CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3 || CurrentDay == 4 || CurrentDay == 5) && Now.getHours()< 16) {
        $('#lunch_link').show();
    } 
    // Display dinner menu
    else if (Now.getHours()>16) {
    $('#dinner_link').show();
    } 
    

    // click on links to display different menus

    $("#lunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Lunch.jpg');
    });

    $("#brunch_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch.jpg');
    });

    $("#dinner_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dinner.jpg');
    });

    $("#cocktails_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Cocktails.jpg');
    });

    $("#BTG_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/WBTG_Beer.jpg');
    });

    $("#BTB_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Wine_BTB.jpg');
    });

    $("#dessert_digestifs_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Dessert_Amaro_Mezcal.jpg');
    });

    $("#brunch_drinks_link").on("click", function () {
        $('#menu_active').attr('src', 'images/menus/Brunch_Cocktails.jpg');
    });

    
})