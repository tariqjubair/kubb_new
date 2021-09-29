
// ==== jQuery ====

$(function () {

// ==== ==== Header: on-scroll class ==== ====
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar").addClass("ext_hd");
            $(".navbar-nav .nav-link").css("margin-left", "50px");
        } 
        else {
            $(".navbar").removeClass("ext_hd");
            $(".navbar-nav .nav-link").css("margin-left", "");
        }
    });

// ==== ==== Header: x-sm Fixed-Header ==== ====

    $('#menu_btn').click(function(){
        $(".navbar").toggleClass("xsm_menu_bg");
    });

// ==== ==== Insta: insta_slider ==== ====

    $('.insta_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
        arrows: false,
		fade: false,
		// fadeSpeed: 1000,
		dots: true,
		
		responsive: [
            {
                breakpoint: 992, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
		
	});














});

// ==== javascript ====

