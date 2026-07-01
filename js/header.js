(function($) {
  "use strict";

  // Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*------------------------------------
    HT Menu
  --------------------------------------*/
  function dropdown() {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });
  }

  /*------------------------------------
    HT Fixed Header
  --------------------------------------*/
  function fxheader() {
    $(window).on('scroll', function() {
      var sticky = $('#header-wrap'),
        scroll = $(window).scrollTop();

      if (scroll >= 300) sticky.addClass('fixed-header');
      else sticky.removeClass('fixed-header');
    });
  }

  /*------------------------------------
    HT Search
  --------------------------------------*/
  function search() { 
    // Search Toggle
    $("#search-input-box").hide();
    $("#search, #search-sticky").on("click", function () {
      $("#search-input-box").slideToggle();
      $("#search-input").focus();
    });
    $("#close-search").on("click", function () {
      $('#search-input-box').slideUp(500);
    });
  }

  /*------------------------------------
    HT Window load and functions
  --------------------------------------*/
  $(document).ready(function() {    
      dropdown();
      fxheader();  
      search();
  });

})(jQuery);
