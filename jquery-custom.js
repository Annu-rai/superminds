$(document).ready(function(){
	
	 // mobile menu

    $(".bar-btn").click(function(){
    	$('body').addClass("nav-open");
    })

    $(".close_nav").click(function(){
    	$('body').removeClass("nav-open");
    })

    //brand slider
    $('.brand-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                nav:false,
                dots:true
            },
            600:{
                items:3

            },
            1000:{
                items:6
            }
        }
    })


    //testimonials slider
    $('.quote_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        nav:true,
        dots:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:2
            }
        }
    })

    // arrordion 

    $(function () {
        $('.collapse_box_title').click(function (j) {

            var areasAccordion = $(this).closest('.collapse-box').find('.collapse_body');
            $(this).closest('.Collpsrow').find('.collapse_body').not(areasAccordion).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.Collpsrow').find('.collapse_box_title.active').removeClass('active');
                $(this).addClass('active');
            }

            areasAccordion.stop(false, true).slideToggle();
            j.preventDefault();
        });
    });
})