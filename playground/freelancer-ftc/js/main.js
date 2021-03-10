/**
 * main.js
 * Created by @falmesino
 */

$(function(){

    // Apply feather icons
    feather.replace();

    // Toggle mobile navigation

    $('.navigation-mobile__trigger').on('click', 'button', function(e){
        e.preventDefault();
        $('.navigation-mobile').stop().addClass('navigation-mobile--active');
        return false;
    });
    
    $('.navigation-mobile').on('click', 'button.navigation-mobile__close', function(e){
        e.preventDefault();
        $('.navigation-mobile').stop().removeClass('navigation-mobile--active');
        return false;
    });

});