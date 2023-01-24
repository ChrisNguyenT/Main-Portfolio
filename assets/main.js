const chrisInit = (function () {
    "use strict";
    var skillWidgets = $('.skill-circle');
    var limit = 335;
    var MainHead = $('.main-chrisheader');
    var Wrapload = $('.wrap-load');
    var popupImage = $(".popup-image");
    var portfoliogrid = $('#porfolio-warp');
    var portfolioFilter = $('.filter li');
    var imagezoom = $('.img-popup-btn');

    history.scrollRestoration = "manual";

    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });


    // zoom magnificpopup init ------------------------
    const magnific = function () {
        imagezoom.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        if (popupImage.length > 0) {
            popupImage.magnificPopup({
                type: 'image',
                fixedContentPos: true,
                gallery: { enabled: true },
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        }
    };

    //Add/remove class on filter list
    portfolioFilter.click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // filter list category portfolio
    portfolioFilter.click(function (e) {
        var filterValue = $(this).attr('data-filter');
        portfoliogrid.isotope({ filter: filterValue });
    });
    // portfoilo init -------------
    const portofolio = function (e) {
        if (portfoliogrid.length) {
            portfoliogrid.isotope({
                resizable: false,
                itemSelector: '.project-item',
                layoutMode: 'masonry',
                filter: '*'
            });
        };
    };

    //binds event ----------------------------
    const bindEvents = function (e) {
        // window onbuffer

        // window load
        window.addEventListener('load', (e) => {
            // preloadder 
            Wrapload.fadeOut(300)

        });
        // document load
        window.addEventListener('DOMContentLoaded', (e) => {
            skillWidgets.circliful({
                backgroundCircleWidth: 10,
                foregroundCircleWidth: 10,
                strokeLinecap: "round"
            });
            magnific();
            portofolio();
            AOS.init({ disable: 'mobile' });
        });
        window.addEventListener("scroll", (e) => {
            var st = $(window).scrollTop();
            MainHead.addClass('fichead');
            if (st <= limit) {
                $('.hero-img, #hero-block, .icon-scroll').css({ 'opacity': (1 - st / limit) });
                MainHead.removeClass('fichead');
            }
        });
    };
    // init - initilizes elements and events
    const AppInit = function (e) {
        bindEvents();
    };
    return {
        AppInit: AppInit
    };
}());
//initilizing app
chrisInit.AppInit();
