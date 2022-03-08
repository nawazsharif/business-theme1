
jQuery(window).on("load", function () {
    "use strict";
    $("#preloader").fadeOut("slow")
});
jQuery(function ($) {
    "use strict";
    $("a").addClass("transition");
    $(document).on("click", ".navbar-collapse.show", function (data) {
        if ($(data.target).is("a") && $(data.target).attr("class") != "dropdown-toggle") {
            $(this).collapse("hide")
        }
    });
    // $(".about-slider").owlCarousel({
    //     navigation: false,
    //     pagination: true,
    //     slideSpeed: 800,
    //     singleItem: true,
    //     transitionStyle: "fadeUp",
    //     paginationSpeed: 800
    // });
    jQuery("#nav").singlePageNav({
        offset: jQuery("#nav").outerHeight(),
        filter: ":not(.external)",
        speed: 1200,
        currentClass: "current",
        easing: "easeInOutExpo",
        updateHash: true,
        beforeStart: function () {
            console.log("begin scrolling")
        },
        onComplete: function () {
            console.log("done scrolling")
        }
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color", "#2B2C30")
        } else {
            $("#navigation").css("background-color", "rgba(43, 44, 48, .4)")
        }
    });
    var _0xc834x3 = $(window).height();
    $("#slider, .carousel.slide, .carousel-inner, .carousel-inner .carousel-item").css("height", _0xc834x3);
    $(window).resize(function () {
        "use strict",
            $("#slider, .carousel.slide, .carousel-inner, .carousel-inner .carousel-item").css("height", _0xc834x3)
    });
    $(".service-item").on("mouseover", function () {
        $(".service-item .effect").addClass("shadow")
    });
    $(".project-wrapper").mixItUp();
    $(".portfolio-lightbox").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $(".video-work").magnificPopup({
        type: "iframe",
        iframe: {
            markup: "<div class=\"mfp-iframe-scaler\">" + "<div class=\"mfp-close\"></div>" + "<iframe class=\"mfp-iframe\" frameborder=\"0\" allowfullscreen></iframe>" + "</div>",
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            },
            srcAction: "iframe_src"
        }
    });
    $("#facts").parallax("50%", 0.3);
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var data = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: data,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        transitionStyle: "backSlide",
        autoPlay: true
    });
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [768, 1],
        pagination: false,
        autoPlay: true
    });
    $(".list-group-item").addClass("shadow");
    var item = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 120,
        mobile: false,
        live: true
    });
    item.init();
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "You must enter your name.",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "You must enter your email"
            },
            message: {
                required: "yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function (data) {
            $(data).ajaxSubmit({
                type: "POST",
                data: $(data).serialize(),
                url: "sendmail.php",
                success: function () {
                    $("#contact-form :input").attr("disabled", "disabled");
                    $("#contact-form").fadeTo("slow", 0.15, function () {
                        $(this).find(":input").attr("disabled", "disabled");
                        $(this).find("label").css("cursor", "default");
                        $("#success").fadeIn()
                    })
                },
                error: function () {
                    $("#contact-form").fadeTo("slow", 0.15, function () {
                        $("#error").fadeIn()
                    })
                }
            })
        }
    })
})
