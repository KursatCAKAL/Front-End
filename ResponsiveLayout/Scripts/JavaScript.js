$(document).ready(function () {
    $(".container").on("mouseover", '.social', function () {

        $(this).closest('.social').addClass('bigger');
        $(this).next('.social').addClass('medium');
        $(this).next('.social').next('.social').addClass('smaller');
        $(this).prev('.social').addClass('medium');
        $(this).prev('.social').prev('.social').addClass('smaller');


    });

    $(".container").on("mouseout", '.social', function () {

        $(this).closest('.social').removeClass('bigger');
        $(this).next('.social').removeClass('medium');
        $(this).next('.social').next('.social').removeClass('smaller');
        $(this).prev('.social').removeClass('medium');
        $(this).prev('.social').prev('.social').removeClass('smaller');

    });

});