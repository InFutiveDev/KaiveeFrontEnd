"use strict";

$(document).ready(function () {

    $('.mobile-menu-btn').click(function () {
        $('.menu-items').addClass('open-menu');
    });
    $('.close-mobile-menu').click(function () {
        $('.menu-items').removeClass('open-menu');
    });


    // $(".slick-slider").on("load", function (event, slick, currentSlide) {
    //     if (currentSlide === 0) {
    //         $(".slick-prev").addClass("hidden");
    //     }
    // });
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });



    $('.award-slider').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.center').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".checkups-preview-container").slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".checkups-preview-container").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );

    //   $('.pathalogy-checkup').slick({
    //     // autoplay: true,
    //     // autoplaySpeed: 2000,
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 2,
    //     responsive: [
    //       {
    //         breakpoint: 769,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1,
    //         },
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1,
    //         },
    //       },
    //     ],
    //   });
    $(".popular-categories").slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        // infinite: true,
        centerMode: false,
        centerPadding: "60px",
        slidesToShow: 6,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".popular-categories").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );
    $(".organs-collection").slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        centerMode: false,
        centerPadding: "60px",
        slidesToShow: 6,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".organs-collection").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );

    $(".blog-collection").slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".blog-collection").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );
    $(".customers-review-container").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
        // variableWidth: true,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    });
    $(".customers-review-container").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );
    $(".carousel-lab").slick({
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });


    $(".media-slider").slick({
        autoplay: false,
        infinite: true,
        arrows: true,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });


    $(".carousel-lab-midd").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".covid-categories-container").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        // centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                },
            },
        ],
    });
    $(".covid-categories-container").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );
    $(".days-container").slick({
        autoplay: false,
        // autoplaySpeed: 2000,
        infinite: false,
        arrows: true,
        centerMode: false,
        // centerPadding: "60px",
        slidesToShow: 4,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    // centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
        ],
    });
    $(".days-container").on(
        "afterChange",
        function (event, slick, currentSlide) {
            if (currentSlide === 0) {
                $(".slick-prev").addClass("hidden");
            } else {
                $(".slick-prev").removeClass("hidden");
            }
        }
    );
    // $(".schedule-day-display").slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     infinite: true,
    //     arrows: false,
    //     // centerMode: true,
    //     centerPadding: "60px",
    //     slidesToShow: 4,
    //     // variableWidth: true,
    //     responsive: [
    //         {
    //             breakpoint: 769,
    //             settings: {
    //                 arrows: true,
    //                 // centerMode: true,
    //                 centerPadding: "40px",
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: true,
    //                 // centerMode: true,
    //                 centerPadding: "40px",
    //                 slidesToShow: 3
    //             }
    //         }
    //     ]
    // });
    $(window).on("load", function () {
        // code here
        $(".slick-prev").addClass("hidden");
    });

    // $("#slick").on('init', function () {
    //     $(".carouselImg").removeClass('hidden');
    // });
    // number count for stats, using jQuery animate
});
