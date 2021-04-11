$(document).ready(function() {

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


})