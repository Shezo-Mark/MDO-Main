$(document).ready(function() {
    // start code for form action
    $('#showCounter').click(function() {
        $('#counterContainer').fadeToggle();
    });

    $('#counter li').click(function() {
        var value = $(this).text();
        $('#buttonContent').text(value);
        $('#counter li').removeClass('active')
        $(this).addClass('active')
        var selectedItem = $(this);
        var container = $('#counterContainer');
        var containerTop = container.offset().top;
        var selectedItemTop = selectedItem.offset().top - containerTop;
        var containerHeight = container.height();
        var selectedItemHeight = selectedItem.outerHeight();
        var scrollPosition = selectedItemTop - (containerHeight - selectedItemHeight) / 2;
        container.scrollTop(scrollPosition);
    });
// accordion js
    $('.custome-accordion-title').click(function(){
        var accordionItem = $(this).parents('.accordion-item');
        var accordionContent = accordionItem.find('.custome-accordion-content');

        if (accordionItem.hasClass('active')) {

            accordionContent.slideUp();
            accordionItem.removeClass('active');
        } else {

            $('.custome-accordion-content').slideUp();
            $('.accordion-item').removeClass('active');

            accordionContent.slideDown();
            accordionItem.addClass('active');
        }
    });
// tab js
    $('.tab-title').click(function(){
        var get = $(this).attr('href');
        $('.filter_data').fadeOut();
        $(get).fadeIn();
    });
// filed validation 
    $('#poppup').click(function(){
        var email = $('.validate').val();

        // Validate the email address using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('.validate').addClass('wrong');
            return; // Exit the function if validation fails
        }
        $('.modal').addClass('show');
    })
    $('.close-step ').click(function(){
        var parent = $(this).parents('.step_2');
        parent.removeClass('active');
        parent.prev().show()
    })
    $('.btn-close').click(function(){
        $('.modal').removeClass('show')
    })
});
// end code for form
$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});

var $owl = $('.comprehensive_coverage_slider');

$owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    nav:false,
    dots:true,
    responsiveClass: true,
    autoplay:true,
    // slideTransition: linear,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1.5
        },
        768: {
            items: 2.5
        },
        1024: {
            items: 3.5
        },
        1440: {
            items: 4.5
        },
        1990: {
            items: 6.5
        }
    }
});

$(document).on('click', '.owl-item>div', function () {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel

    var $speed = 700;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});



$('.test_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            nav: true,
            items: 1
        },
        1000: {
            nav: true,
            items: 2
        },
        1400: {
            nav: true,
            items:4,
        }
    }
})

$(window).on("load resize scroll", function() {
    $("#scrolls").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find(".bg-img")
            .css({ left: leftPosition });
    });
});

$(document).ready(function(){
    $("#click").click(function(){
        $(".step_2").addClass("active");
        $(".step_1").hide();

    });
});