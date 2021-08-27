$(function () {
    // Navbar
    let navBtn = $(".nav-btn"),
        navContent = $(".nav-content");

    // Open Nav Bar
    navBtn.on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("show");
        navContent.toggleClass("show");
    });

    // Close Navbar When Click Anywhere
    $(document).on("click", function (e) {
        if (navBtn.hasClass("show") && navContent.hasClass("show")) {
            if (e.target !== navBtn && e.target !== navContent) {
                navBtn.removeClass("show");
                navContent.removeClass("show");
            }
        }
    });

    // Stop Propagation For Nav Button & Nav Content
    navContent.click(function (e) {
        e.stopPropagation();
    })

    // Close Navbar When Click On Esc Key
    $(document).keydown(function (e) {
        if (navBtn.hasClass("show") && navContent.hasClass("show")) {
            if (e.keyCode === 27) {
                navBtn.removeClass("show");
                navContent.removeClass("show");
            }
        }
    });

    // Smothe Scroll
    $("nav ul li:not(:first-of-type)").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).data("scroll")).offset().top
        }, 1000);
    });

    $("header .info button").click(function () {
        $("html, body").animate({
            scrollTop: $(".listen").offset().top
        }, 1000);
    });

    // Albums Section
    var albumsSong = $('.albums div'),
        musicSong = $(".player .music > div");

    albumsSong.on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".player .music h2, .our-player h2").text($(this).text());

        var target = $(this).data('name');
        setActiveSong($('.' + target));
    });

    musicSong.on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        $(".player .music h2, .our-player h2").text($(this).find("> span").text());

        var target = $(this).data('name');
        setActiveAlbum($('.' + target));
    });
    
    function setActiveSong(target) {
        musicSong.removeClass('active');
        target.addClass('active');
    }

    function setActiveAlbum(target) {
        albumsSong.removeClass('active');
        target.addClass('active');
    }

    // Run Nice Scroll
    $("body, html").niceScroll({
        cursorcolor: '#e000dc',
        cursorwidth: "8px",
        cursorborderradius: 0,
        cursorborder: '1px solid #e000dc',
        scrollspeed: "30"
    });
});