/**
 * main.js
 * Created by @falmesino
 */

$(function(){

    // Apply feather icons
    feather.replace();

    // Toggle mobile navigation

    $(document).on('click', '.navigation-mobile__trigger', function(e){
        e.preventDefault();
        $('.navigation-mobile__overlay').stop().addClass('navigation-mobile__overlay--active');
        return false;
    });
    
    $(document).on('click', '.navigation-mobile__close', function(e){
        e.preventDefault();
        $('.navigation-mobile__overlay').stop().removeClass('navigation-mobile__overlay--active');
        return false;
    });

});