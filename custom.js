/* ----------------------------------------------------------------
                [ countUp ]
-----------------------------------------------------------------*/

$(document).ready(function ($) {
    $('.counter_part .counter').countUp({
        delay: 10,
        time: 1500
    });
});

/* ----------------------------------------------------------------
                [ countUp ]
-----------------------------------------------------------------*/


/* ----------------------------------------------------------------
                [ page scroll indicator ]
-----------------------------------------------------------------*/



// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

//menu part for smooth scroll and active

$(function () {
    var windo = $(window);

    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // this is for back to top and sticky menu js

    var bc2top = $('.back-top-btn');
    $('.back-top-btn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();
        var scrolling = $(this).scrollTop();
        //taking banner hieght
        var banners = document.getElementById("home");
        var banneres = banners.offsetHeight;
        var banner = banneres - 130;
        //taking banner height

        //for back to top button visibility

        if (scrollPos > banner) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(200);
        }

        //for menu css change 
        if (x.matches) {
            if (scrolling >= 10) {
                $('.sticky-top').addClass('navcss');
            } else {
                $('.sticky-top').removeClass('navcss');
            }
        } else {
            if (scrolling >= 100) {
                $('.sticky-top').addClass('navcss');
            } else {
                $('.sticky-top').removeClass('navcss');
            }
        }


    });

    //animation scroll



    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior

        if (this.hash !== "") {

            // Prevent default anchor click behavior

            event.preventDefault();
            var hash = this.hash;

            //where to sotp after scrolling

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {

            });
        } // End if
    });

    var x = window.matchMedia("(max-width: 575px)")

});

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------
