(function(jQuery) {

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var jQuerywindow = jQuery(window),
    jQuerydocument = jQuery(document),
    jQuerybody = jQuery('body');

//Check if function exists
jQuery.fn.exists = function () {
  return this.length > 0;
};

function swiperslider() {

var portfolioswiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#portfolio-swiper-button-next",
          prevEl: "#portfolio-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        },
      });

var portfolioswiper2 = new Swiper(".portfolio-swiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#portfolio-swiper-button-next",
          prevEl: "#portfolio-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
      });

var portfolioswiper3 = new Swiper(".portfolio-swiper3", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#portfolio-swiper-button-next",
          prevEl: "#portfolio-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });

var teamswiper = new Swiper(".team-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#team-pagination",
        clickable: true,
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

var postswiper = new Swiper(".post-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        pagination: {
        el: "#post-pagination",
        clickable: true,
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });


var bannerswiper = new Swiper(".banner-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        effect: "fade",
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: "#banner-swiper-button-next",
          prevEl: "#banner-swiper-button-prev",
        },
      });

var marqueeswiper = new Swiper(".marquee-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 5000,
        loop: true,
        autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      });

var serviceswiper = new Swiper(".service-swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        speed: 5000,
        loop: true,
        pagination: {
        el: "#service-pagination",
        clickable: true,
      },
        navigation: {
          nextEl: "#service-swiper-button-next",
          prevEl: "#service-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });

var serviceswiper2 = new Swiper(".service-swiper2", {
        slidesPerView: 2,
        spaceBetween: 50,
        speed: 5000,
        loop: true,
        pagination: {
        el: "#service-pagination",
        clickable: true,
      },
        navigation: {
          nextEl: "#service-swiper-button-next",
          prevEl: "#service-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });

var serviceswiper3 = new Swiper(".service-swiper3", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 5000,
        loop: true,
        pagination: {
        el: "#service-pagination",
        clickable: true,
      },
        navigation: {
          nextEl: "#service-swiper-button-next",
          prevEl: "#service-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

var testimonialswiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 5000,
        loop: true,
        navigation: {
          nextEl: "#testimonial-swiper-button-next",
          prevEl: "#testimonial-swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
           640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });

var marqueeswiper = new Swiper(".marquee-swiper", {
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  speed: 12000,
      });


};


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
jQuery(document).ready(function() {
    swiperslider();
});

})(jQuery);