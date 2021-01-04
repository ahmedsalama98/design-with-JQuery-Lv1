/*global $,alert,console*/


$(function() {


    //change header height //
    var header = $(".header");
    header.height($(window).height())


    $(window).resize(function() {
            header.height($(window).height())



            slider.each(function() {
                $(this).css("padding", ($(window).height() - $(".slider div").height()) / 2)
            })
        })
        //change header height //

    //add class active to clicked navbar//

    var navlinks = $(".links li");

    navlinks.click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    })

    //add class active to clicked navbar//

    //slider//
    slider = $(".slider");
    slider.bxSlider()


    slider.each(function() {
        $(this).css("padding-top", ($(window).height() - $(".slider div").height()) / 2)
    })

    //slider//


    //mame smooth scroll//

    navlinks.click(function() {
        $("body,html").animate({
            scrollTop: $($(this).data("scrol")).offset().top

        }, 500)
    })




    //mame smooth scroll//


    // what clint say slide//

    function slide() {
        $(".slide2 .active").each(function() {
            if (!$(this).is(":last-child")) {
                $(this).delay(4000).fadeOut(500,
                    function() {
                        $(this).removeClass("active").next().addClass("active").fadeIn()
                        slide()
                    }
                );

            } else {
                $(this).delay(4000).fadeOut(500, function() {
                    $(this).removeClass("active").siblings().eq(0).addClass("active").fadeIn()
                    slide()
                })
            }



        })

    }
    slide()


    // what clint say slide//


    $(".projects .over span i").click(function() {

            $(this).css({ "color": "red" }).next().text(parseInt($(this).next().text()) + 1)


        })
        // trigger shuflling//

    mixitup($("#container"))




    $(".portofilio li").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    })

    // trigger shuflling//






    $(".navbar .pars i").click(function() {
        $(".navbar .links").slideToggle()
    })
    var nav = $(".navbar");
    $("body").css({
        paddingTop: nav.innerHeight() + "px"
    })


    var scoltop = $(".scroll-top");


    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 200) {

            scoltop.fadeIn()
        } else {
            scoltop.fadeOut()
        }

    })
    scoltop.on("click", function() {
        $("html,body").animate({
            scrollTop: "0"
        })
    })


})