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

$( ".custom_package" ).on( "click", function( event ) {
    event.preventDefault();
    $('.filter_data').removeClass('is_checked');
    $(".custom_package").addClass('is_checked');  
  });
  $( ".research_package" ).on( "click", function( event ) {
    event.preventDefault();
    $('.filter_data').removeClass('is_checked');
    $(".research_package").addClass('is_checked');  
  });
  $( ".ultimate_package" ).on( "click", function( event ) {
    event.preventDefault();
    $('.filter_data').removeClass('is_checked');
    $(".ultimate_package").addClass('is_checked');  
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



//   $('.comprehensive_coverage_slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 5,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });


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