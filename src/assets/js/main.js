$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header-menu").removeClass("sticky");
            $(".header-menu-1 img").attr("src", "assets/images/logo.png");
            $(".header-menu-2 img").attr("src", "assets/images/logo.png");
            $(".header-menu-4 img").attr("src", "assets/images/logo.png");
        } else {
            $(".header-menu").addClass("sticky");
            $(".header-menu-1 img").attr("src", "assets/images/logo.png");
            $(".header-menu-2 img").attr("src", "assets/images/logo.png");
            $(".header-menu-4 img").attr("src", "assets/images/logo.png");
        }
    });


    //===== categories dropdown

    jQuery(document).ready(function (e) {
        function t(t) {
            e(t).bind("click", function (t) {
                t.preventDefault();
                e(this).parent().fadeOut()
            })
        }
        e(".seylon-toggler").bind("click", function () {
            var t = e(this).parents(".seylon-dropdown").children(".seylon-dropdown-menu").is(":hidden");
            e(".seylon-dropdown .seylon-dropdown-menu").hide();
            e(".seylon-dropdown .seylon-toggler").removeClass("active");
            if (t) {
                e(this).parents(".seylon-dropdown").children(".seylon-dropdown-menu").toggle().parents(".seylon-dropdown").children(".seylon-toggler").addClass("active")
            }
        });
        e(document).bind("click", function (t) {
            var n = e(t.target);
            if (!n.parents().hasClass("seylon-dropdown")) e(".seylon-dropdown .seylon-dropdown-menu").hide();
        });
        e(document).bind("click", function (t) {
            var n = e(t.target);
            if (!n.parents().hasClass("seylon-dropdown")) e(".seylon-dropdown .seylon-toggler").removeClass("active");
        })

    });


    //====== Nice Select

    $('select').niceSelect();


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== slider Range

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 800,
        values: [20, 560],
        slide: function (event, ui) {
            $("#amount1").val("$" + ui.values[0] + ".00");

            $("#amount2").val("$" + ui.values[1] + ".00");
        }
    });

    $("#amount1").val("$" + $("#slider-range").slider("values", 0) + ".00");

    $("#amount2").val("$" + $("#slider-range").slider("values", 1) + ".00");



    //===== slick Products View

    $(".details-image").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.details-image-thumb'
    });

    $(".details-image-thumb").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.details-image',
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        centerMode: false,
        focusOnSelect: true
    });



    //===== Go to Top

    // Scroll Event
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });



    //=====  label File

    $('.input-file').each(function () {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();

        $input.on('change', function (element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });









});
