(function($) {
  "use strict";

  // Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*------------------------------------
    SECTION 1: Color Customizer Panel Changer
  --------------------------------------*/
  function initColorCustomizer() {
    var style_switcher = $('.color-customizer');
    if (!style_switcher.length) return;
    
    var panelWidth = style_switcher.outerWidth(true);
    $('.color-customizer .opener').on("click", function(){
      if ($(".color-customizer.closed").length > 0) {
        style_switcher.animate({"right" : "0px"});
        $(".color-customizer.closed").removeClass("closed");
        $(".color-customizer").addClass("opened");
      } else {
        $(".color-customizer.opened").removeClass("opened");
        $(".color-customizer").addClass("closed");
        style_switcher.animate({"right" : '-' + panelWidth});
      }
      return false;
    });

    var link = $('link[data-style="styles"]');
    $('.color-customizer .colorChange li').on('click', function(){
      if (link.length > 0) {
        var $this = $(this),
            tp_stylesheet = $this.data('style');
        $(".color-customizer .colorChange .selected").removeClass("selected");
        $this.addClass("selected");
        // Adjust style path if loaded in a subdirectory (Pages/)
        var isSubdir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1 || window.location.pathname.toLowerCase().indexOf('\\pages\\') !== -1;
        var prefix = isSubdir ? "../" : "";
        link.attr('href', prefix + 'css/theme-color/' + tp_stylesheet + '.css');
        $.cookie('tp_stylesheet', tp_stylesheet, 30);
      } 
    });

    $('.color-customizer .reset a.reset-btn').on('click', function() { 
      $.cookie('tp_stylesheet', 'theme-default', 30);
      var tp_stylesheet = 'theme-default';
      $('.color-customizer .colorChange li.selected').removeClass("selected");
      $('.color-customizer .colorChange li[data-style="'+tp_stylesheet+'"]').addClass("selected");
      var isSubdir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1 || window.location.pathname.toLowerCase().indexOf('\\pages\\') !== -1;
      var prefix = isSubdir ? "../" : "";
      link.attr('href', prefix + 'css/theme-color/' + tp_stylesheet + '.css');
      $(window).trigger('resize');
      $('.desktopTopFixed').removeClass('desktopTopFixed');
    });
  }

  /*------------------------------------
    SECTION 2: Swiper Sliders
  --------------------------------------*/
  function swiperslider() {
    if (typeof Swiper === "undefined") return;

    var portfolioswiper = new Swiper(".portfolio-swiper", {
      slidesPerView: 5,
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 2, spaceBetween: 0 },
        768: { slidesPerView: 3, spaceBetween: 0 },
        1024: { slidesPerView: 5, spaceBetween: 0 },
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 0 },
        1024: { slidesPerView: 2, spaceBetween: 0 },
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 1, spaceBetween: 0 },
      },
    });

    var teamswiper = new Swiper(".team-swiper", {
      slidesPerView: 5,
      spaceBetween: 20,
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
        0: { slidesPerView: 1, spaceBetween: 12 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 18 },
        1024: { slidesPerView: 4, spaceBetween: 18 },
        1400: { slidesPerView: 5, spaceBetween: 20 },
      },
    });

    var postswiper = new Swiper(".post-swiper", {
      slidesPerView: 4,
      spaceBetween: 24,
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
      },
    });

    var bannerswiper = new Swiper(".banner-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      watchSlidesProgress: true,
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
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
        0: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 1, spaceBetween: 0 },
        768: { slidesPerView: 1, spaceBetween: 0 },
        1024: { slidesPerView: 1, spaceBetween: 0 },
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
  }

  /*------------------------------------
    SECTION 3: GSAP Animations
  --------------------------------------*/
  function registerGsap() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
        nullTargetWarn: !1,
        trialWarn: !1
    });

    var $splitone = $('.split_texts').length;

    function splitone() {
        if ($splitone != '') {
          const split_texts = document.querySelector(".split_texts");
          if (!split_texts) return;
          ScrollTrigger.matchMedia({
              "(min-width: 992px)": function() {
                  gsap.to(".split_images", {
                    scrollTrigger: {
                      trigger: ".ht-img-split-scroller",
                      pin: ".split_images",
                      scrub: 0.5,
                      start: "top top",
                      end: () => "+=" + (split_texts.scrollHeight - window.innerHeight),
                      id: "ht-img-split-scroller"
                    }
                  });

                  const tl = gsap.timeline({
                    scrollTrigger: {
                      trigger: ".ht-img-split-scroller",
                      start: "top top",
                      end: "bottom",
                      pin: false,
                      scrub: true,
                      id: "img"
                    }
                  });
                  const split_images_blk = gsap.utils.toArray(".split-img-block");
                  split_images_blk.forEach((img, i) => {
                    if (split_images_blk[i + 1]) {
                      tl.to(img, { opacity: 0 }, "+=0.2").to(
                        split_images_blk[i + 1],
                        { opacity: 1 },
                        "<"
                      );
                    }
                  });
                  tl.to({}, {}, "+=0.2");
              }
          });
        }
    }

    function splittwo() {
      const panels = gsap.utils.toArray(".sticky-panel");
      if (panels.length === 0) return;
      ScrollTrigger.matchMedia({
          "(min-width: 992px)": function() {
              gsap.to(panels, {
                xPercent: (i) => -100 * i,
                x: (i) => i && 0 * (i - 1),
                duration: (i) => i,
                ease: "none",
                scrollTrigger: {
                  trigger: ".sticky-panel-content",
                  start: "top top",
                  end: "+=" + 100 * panels.length + "5",
                  scrub: true,
                  pin: true,
                }
              });
          }
      });
    }

    function htbgmove() {
      const ht_elm = gsap.utils.toArray('.ht-bg-move-effect');
      if (ht_elm.length == 0) return;
      ScrollTrigger.matchMedia({
          "(min-width: 992px)": function() {
              ht_elm.forEach((box, i) => {
                  let tl = gsap.timeline({
                      scrollTrigger: {
                          trigger: box,
                          start: "top 80%",
                          end: "+=700px",
                          scrub: 1
                      },
                      defaults: {
                          ease: "none"
                      }
                  });
                  tl.fromTo(box, {
                      clipPath: 'inset(0% 7% 0% 7%)'
                  }, {
                      clipPath: 'inset(0% 0% 0% 0%)',
                      duration: 3
                  });
              });
          }
      });
    }

    ScrollTrigger.matchMedia({
        "(max-width: 1200px)": function() {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }
    });

    splitone();
    splittwo();
    htbgmove();
    gsap.delayedCall(1, () => ScrollTrigger.getAll().forEach((t) => {
        t.refresh();
    }));
  }

  /*------------------------------------
    SECTION 4: Image Reveal Animations
  --------------------------------------*/
  function imgReveal() {
    if (typeof gsap === "undefined") return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    let revealCallback = (entries, self) => {
      entries.forEach(entry => {
        let container = entry.target;
        let img = entry.target.querySelector("img");
        const easeInOut = "power3.out";
        const revealAnim = gsap.timeline({ ease: easeInOut });

        if (entry.isIntersecting) {
          revealAnim.set(container, {
            visibility: "visible"
          });
          revealAnim.fromTo(
            container,
            {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1,
              ease: easeInOut
            }
          );
          revealAnim.from(img, 4, {
            scale: 1.5,
            ease: easeInOut,
            delay: -5
          });
          self.unobserve(entry.target);
        }
      });
    };

    let revealObserver = new IntersectionObserver(revealCallback, options);

    document.querySelectorAll(".ht-img-effect .ht-img-effect-image").forEach(reveal => {
      revealObserver.observe(reveal);
    });
  }

  /*------------------------------------
    SECTION 5: Director's Message Collapsible Toggle
  --------------------------------------*/
  function initDirectorReadMore() {
    var btn  = document.getElementById('directorReadMoreBtn');
    var wrap = document.getElementById('directorMsgWrap');
    var fade = document.getElementById('directorFade');
    if (!btn || !wrap || !fade) return;

    var expanded = false;

    btn.addEventListener('click', function () {
      expanded = !expanded;
      if (expanded) {
        wrap.style.maxHeight = wrap.scrollHeight + 'px';
        fade.style.opacity   = '0';
        btn.querySelector('span').textContent = 'Read Less';
        btn.querySelector('i').className      = 'flaticon-minus';
      } else {
        wrap.style.maxHeight = '230px';
        fade.style.opacity   = '1';
        btn.querySelector('span').textContent = 'Read Full Message';
        btn.querySelector('i').className      = 'flaticon-plus';
      }
    });
  }

  /*------------------------------------
    SECTION 6: Specialists Modal
  --------------------------------------*/
  const doctorsDb = [
    {
      name: "Dr. Preeti Sharma",
      slug: "preeti-sharma",
      specialty: "Medical Oncologist",
      img: "images/team/01.jpg",
      degrees: "MD, DM (Medical Oncology)",
      experience: "12+ Years",
      dept: "Medical Oncology",
      opdWeekday: "09:00 AM - 04:00 PM",
      opdSaturday: "09:00 AM - 01:00 PM"
    },
    {
      name: "Dr. Sunita Patel",
      slug: "sunita-patel",
      specialty: "Surgical Oncologist",
      img: "images/team/02.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "15+ Years",
      dept: "Breast & Gynecological Oncology",
      opdWeekday: "10:00 AM - 05:00 PM",
      opdSaturday: "10:00 AM - 02:00 PM"
    },
    {
      name: "Dr. Vikram Malhotra",
      slug: "vikram-malhotra",
      specialty: "Radiation Oncologist",
      img: "images/team/03.jpg",
      degrees: "MD, DNB (Radiation Oncology)",
      experience: "10+ Years",
      dept: "Radiation Oncology",
      opdWeekday: "09:00 AM - 04:00 PM",
      opdSaturday: "Closed"
    },
    {
      name: "Dr. Sandeep Kapoor",
      slug: "sandeep-kapoor",
      specialty: "Robotic Oncologist",
      img: "images/team/04.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "18+ Years",
      dept: "Robotic Surgery",
      opdWeekday: "10:00 AM - 04:00 PM",
      opdSaturday: "10:00 AM - 01:00 PM"
    },
    {
      name: "Dr. Anjali Mehta",
      slug: "anjali-mehta",
      specialty: "Hemato Oncologist",
      img: "images/team/05.jpg",
      degrees: "MD, DM (Clinical Hematology)",
      experience: "8+ Years",
      dept: "Hematology & BMT Unit",
      opdWeekday: "09:00 AM - 03:00 PM",
      opdSaturday: "09:00 AM - 12:00 PM"
    },
    {
      name: "Dr. Rohan Gupta",
      slug: "rohan-gupta",
      specialty: "Surgical Oncologist",
      img: "images/team/06.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "11+ Years",
      dept: "Head & Neck Surgery",
      opdWeekday: "09:30 AM - 04:30 PM",
      opdSaturday: "09:30 AM - 01:30 PM"
    }
  ];

  function getAdjustedPath(path) {
    const isSubdir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1 || window.location.pathname.toLowerCase().indexOf('\\pages\\') !== -1;
    return isSubdir ? "../" + path : path;
  }

  function createDoctorsModal() {
    if (document.getElementById('all-doctors-modal')) return;

    const modalHTML = `
      <div id="all-doctors-modal" class="all-doctors-modal-overlay">
        <div class="all-doctors-modal-wrapper">
          <div class="all-doctors-modal-header">
            <div class="header-title-container">
              <span class="header-badge">Homi Bhabha Hospital</span>
              <h2 class="all-doctors-modal-title">Our Oncology Specialists</h2>
            </div>
            <button id="close-doctors-modal" class="all-doctors-close-btn" aria-label="Close modal">
              <i class="bi bi-x"></i>
            </button>
          </div>
          <div class="all-doctors-modal-body">
            <div class="all-doctors-grid">
              ${doctorsDb.map(doc => `
                <div class="all-doctors-card">
                  <div class="all-doctors-card-img-wrapper">
                    <img class="all-doctors-card-img" src="${getAdjustedPath(doc.img)}" alt="${doc.name}">
                  </div>
                  <div class="all-doctors-card-info">
                    <span class="all-doctors-card-specialty">${doc.specialty}</span>
                    <h4 class="all-doctors-card-name">${doc.name}</h4>
                    <p class="all-doctors-card-degrees">${doc.degrees}</p>
                  </div>
                  <!-- Hover Overlay Details -->
                  <div class="all-doctors-card-hover-overlay">
                    <div class="hover-details-content">
                      <span class="hover-specialty">${doc.specialty}</span>
                      <h4 class="hover-name">${doc.name}</h4>
                      <hr class="hover-divider">
                      <ul class="hover-details-list">
                        <li><i class="bi bi-award-fill"></i> <strong>Exp:</strong> ${doc.experience}</li>
                        <li><i class="bi bi-building-fill"></i> <strong>Dept:</strong> ${doc.dept}</li>
                        <li><i class="bi bi-calendar-check-fill"></i> <strong>OPD Mon-Fri:</strong> ${doc.opdWeekday}</li>
                        <li><i class="bi bi-clock-fill"></i> <strong>OPD Sat:</strong> ${doc.opdSaturday}</li>
                      </ul>
                      <a href="${getAdjustedPath('Pages/team-single.html?doc=' + doc.slug)}" target="_blank" class="hover-view-more-btn">
                        <span>View Full Profile</span> <i class="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalHTML;
    document.body.appendChild(tempDiv.firstElementChild);

    document.getElementById('close-doctors-modal').addEventListener('click', closeDoctorsModal);
    document.getElementById('all-doctors-modal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeDoctorsModal();
      }
    });
  }

  function showDoctorsModal() {
    createDoctorsModal();
    const modal = document.getElementById('all-doctors-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDoctorsModal() {
    const modal = document.getElementById('all-doctors-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function initModalTrigger() {
    const btn = document.getElementById('view-all-doctors-btn');
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        showDoctorsModal();
      });
    }
  }

  /*------------------------------------
    SECTION 7: Theme Utilities & Stats
  --------------------------------------*/
  function preloader() {
     $('#ht-preloader').fadeOut();
  }

  function counter() {  
    var elementSelector = $('.count-number');
    if (typeof Odometer === "undefined") return;
    elementSelector.each(function(){
        elementSelector.appear(function(e) {
            var el = this;
            var updateData = $(el).attr("data-count");
            var od = new Odometer({
                el: el,
                format: 'd',
                duration: 2000
            });
            od.update(updateData);
        });
    });
  }

  function magnificpopup() {
    if (!$.fn.magnificPopup) return;

    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });

    if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
       $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
      });
    }
  }

  function scrolltop() {
    var progressPath = document.querySelector('.scroll-top path');
    if (!progressPath) return;
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';      
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);  
    var offset = 50;
    var duration = 550;
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $('.scroll-top').addClass('active-progress');
        } else {
            $('.scroll-top').removeClass('active-progress');
        }
    });             
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
  }

  function progressbar () {
    var progressBar = $('.progress');
    if(progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data('value');
          Self.find('.progress-bar').animate({
            width:progressValue+'%'           
          }, 1000);
        });
      })
    }
  }

  function databgcolor() {
    $('[data-bg-color]').each(function(index, el) {
     $(el).css('background-color', $(el).data('bg-color'));  
    });
    $('[data-text-color]').each(function(index, el) {
     $(el).css('color', $(el).data('text-color'));  
    });
    $('[data-bg-img]').each(function() {
     $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });

    if ($.fn.datepicker) {
      $('#datepicker').datepicker();
    }
  }

  function texteffct() {
    if ($(".ht-split-text").length && typeof Splitting !== "undefined") {
      Splitting();
      var themeht_animation_text = function(container, item) {
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(container).each(function(index, value) {
            var objectBottom = $(this).offset().top + $(this).outerHeight() * 0.1;

            if (objectBottom < windowBottom) {
              var seat = $(this).find(item);
              for (var i = 0; i < seat.length; i++) {
                (function(index) {
                  setTimeout(function() {
                    seat.eq(index).addClass('ht-text-animated');
                  }, 200 * index);
                })(i);
              }
            }
          });
        }).scroll();
      };

      $(function() {
        themeht_animation_text(".theme-title", ".splitting");
      });
    }
  }

  function countdown() {
    if (!$.fn.countdown) return;
    $('.countdown').each(function () {
      var $this = $(this),
        finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
      });
    });
  }

  function btnproduct() {
    $('.btn-product-up').on('click', function (e) {
      e.preventDefault();
      var numProduct = Number($(this).next().val());
      if (numProduct > 1) $(this).next().val(numProduct - 1);
    });
    $('.btn-product-down').on('click', function (e) {
      e.preventDefault();
      var numProduct = Number($(this).prev().val());
      $(this).prev().val(numProduct + 1);
    }); 
  }

  function contactform() { 
    $('#contact-form, #main-form').on('submit', function (e) {
      if (!e.isDefaultPrevented()) {
          var url = "php/contact.php";
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form, #main-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
                    $('#contact-form, #main-form')[0].reset();
                }
              }
          });
          return false;
      }
    });
  }

  /*------------------------------------
    SECTION 8: Visitor Counter Logic
  --------------------------------------*/
  function initVisitorCounter() {
    var countContainer = document.getElementById('visitor-count-container');
    if (!countContainer) return;
    
    var currentCount = localStorage.getItem('visitor_count');
    if (!currentCount) {
      currentCount = 18427;
    } else {
      currentCount = parseInt(currentCount) + 1;
    }
    localStorage.setItem('visitor_count', currentCount);
    
    var countStr = currentCount.toString();
    while (countStr.length < 6) {
      countStr = '0' + countStr;
    }
    
    countContainer.innerHTML = '<i class="bi bi-people-fill me-2"></i>Visitor No: <span class="visitor-count-num">' + countStr + '</span>';
  }

  /*------------------------------------
    Document Ready and Window Load Bindings
  --------------------------------------*/
  $(document).ready(function() {    
      initColorCustomizer();
      swiperslider();
      registerGsap();
      imgReveal();
      initDirectorReadMore();
      initModalTrigger();
      initVisitorCounter();
      
      counter();
      magnificpopup();
      scrolltop();
      progressbar();
      databgcolor();
      texteffct();
      countdown();
      btnproduct();
      contactform();
  });

  $(window).on('load', function() {
      preloader();
  });

})(jQuery);
