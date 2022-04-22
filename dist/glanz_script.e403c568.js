// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/glanz_script.js":[function(require,module,exports) {
(function ($) {
  "use strict"; // Start of use strict

  /* Logo Lettering */

  var logo_rotate = $("header .gla_logo_animation").attr('data-rotate');

  if (logo_rotate != '') {
    $("header .gla_logo_animation").addClass('gla_logo_rotate_' + logo_rotate);
  }

  var main_menu_icon = $(".gla_main_menu_icon b");
  main_menu_icon.lettering();
  main_menu_icon.each(function () {
    var i = 2;
    $(this).find('span').each(function () {
      $(this).css('transition-delay', '0.' + i + 's');
      i++;
    });
  });
  $("header .gla_logo_animation").lettering();
  $("header .gla_logo_animation span").each(function () {
    var min = 0;
    var max = 50;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    $(this).css('transition-delay', '0.' + randomNumber + 's');
  });
  /* Map */

  $('.gla_map').on("click", function (e) {
    $(this).toggleClass('gla_active_map');
  });
  /*CountTo*/

  $('.gla_timer').appear(function () {
    var e = $(this);
    e.countTo({
      from: 0,
      to: e.html(),
      speed: 1300,
      refreshInterval: 60
    });
  });
  $('.date_picker').datepicker();
  /*Gallery Lightbox*/

  $('.lightbox').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
      // HTML markup of popup, `mfp-close` will be replaced by the close button
      patterns: {
        youtube: {
          index: 'youtube.com/',
          // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: 'v=',
          // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; } 
          src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 

        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'http://player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        } // you may add here more sources

      },
      srcAction: 'iframe_src' // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".

    }
  });
  /*OWL Intro Slider*/

  if ($('.gla_slider_carousel .gla_slider').length > 1) {
    if ($('#video_background').length == 1) {
      $(".gla_slider_carousel").owlCarousel({
        navigation: true,
        pagination: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 200,
        addClassActive: true,
        paginationSpeed: 200,
        rewindSpeed: 200,
        items: 1,
        autoPlay: false,
        touchDrag: true,
        singleItem: true,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>'],
        transitionStyle: "fade",
        afterAction: function afterAction(current) {
          current.find('video').get(0).play();
        }
      });
    } else {
      $(".gla_slider_carousel").owlCarousel({
        navigation: true,
        pagination: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        slideSpeed: 200,
        addClassActive: true,
        paginationSpeed: 200,
        rewindSpeed: 200,
        items: 1,
        autoPlay: false,
        touchDrag: true,
        singleItem: true,
        navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>'],
        transitionStyle: "fade"
      });
    }
  }
  /*OWL Team*/


  $(".gla_team").owlCarousel({
    navigation: true,
    pagination: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    slideSpeed: 200,
    addClassActive: true,
    paginationSpeed: 200,
    rewindSpeed: 200,
    items: 3,
    itemsTablet: [1000, 2],
    itemsMobile: [569, 1],
    itemsDesktop: 3,
    autoPlay: false,
    touchDrag: true,
    navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
  });
  $(".gla_team_menu").owlCarousel({
    navigation: true,
    pagination: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    slideSpeed: 200,
    addClassActive: true,
    paginationSpeed: 200,
    rewindSpeed: 200,
    items: 2,
    itemsTablet: [1000, 1],
    itemsMobile: [569, 1],
    itemsDesktop: 2,
    autoPlay: false,
    touchDrag: true,
    navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
  });
  /* OWL Team Single*/

  $(".gla_team_slider_single").owlCarousel({
    navigation: true,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    slideSpeed: 200,
    addClassActive: true,
    paginationSpeed: 200,
    rewindSpeed: 200,
    items: 1,
    autoPlay: true,
    singleItem: true,
    autoHeight: true,
    touchDrag: true,
    navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
  });
  /* OWL Guests Single*/

  $(".gla_guests_slider_single").owlCarousel({
    navigation: true,
    pagination: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    slideSpeed: 200,
    addClassActive: true,
    paginationSpeed: 200,
    rewindSpeed: 200,
    items: 1,
    autoPlay: true,
    singleItem: true,
    autoHeight: true,
    touchDrag: true,
    navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
  });
  /* OWL PARTNERS*/

  $(".gla_partners").owlCarousel({
    navigation: true,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    slideSpeed: 200,
    addClassActive: true,
    paginationSpeed: 200,
    rewindSpeed: 200,
    items: 5,
    autoPlay: true,
    autoHeight: true,
    touchDrag: true,
    navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
  });
  /*OWL Carousel in Shop Item*/

  if ($('.gla_shop_item_slider img').length > 1) {
    $(".gla_shop_item_slider").owlCarousel({
      navigation: false,
      responsive: true,
      responsiveRefreshRate: 200,
      responsiveBaseElement: window,
      slideSpeed: 200,
      addClassActive: true,
      paginationSpeed: 200,
      rewindSpeed: 200,
      singleItem: true,
      autoPlay: false,
      touchDrag: true,
      navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
    });
  }
  /*Instafeed*/


  if ($('#instagram-carousel').length > 0) {
    var feed = new Instafeed({
      get: 'user',
      userId: 4075526338,
      accessToken: '4075526338.17dd6bd.0fcd5eb0262e416390ef273090854cc7',
      sortBy: 'most-liked',
      template: '<div class="gla_bordered_block gla_image_bcked_zoom"><a href="{{link}}" target="_blank"></a><div class="gla_image_over gla_image_bck" data-image="{{image}}"></div><div class="gla_box_content text-center"><div class="gla_bottom_title gla_hidden_title"><p>{{caption}}</p></div></div></div>',
      target: 'instagram-carousel',
      limit: 9,
      resolution: 'standard_resolution',
      after: function after() {
        $('#instagram-carousel').owlCarousel({
          items: 3,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            980: {
              items: 3
            }
          },
          navigation: true,
          responsiveRefreshRate: 200,
          pagination: true,
          autoPlay: 4000,
          margin: 40,
          loop: true,
          navigationText: ['<i class="ti ti-angle-left"></i>', '<i class="ti ti-angle-right"></i>']
        });
        /* Section Background */

        $('.gla_image_bck').each(function () {
          var image = $(this).attr('data-image');
          var gradient = $(this).attr('data-gradient');
          var color = $(this).attr('data-color');
          var blend = $(this).attr('data-blend');
          var opacity = $(this).attr('data-opacity');
          var position = $(this).attr('data-position');
          var height = $(this).attr('data-height');

          if (image) {
            $(this).css('background-image', 'url(' + image + ')');
          }

          if (gradient) {
            $(this).css('background-image', gradient);
          }

          if (color) {
            $(this).css('background-color', color);
          }

          if (blend) {
            $(this).css('background-blend-mode', blend);
          }

          if (position) {
            $(this).css('background-position', position);
          }

          if (opacity) {
            $(this).css('opacity', opacity);
          }

          if (height) {
            $(this).css('height', height);
          }
        });
      }
    });
    feed.run();
  }
  /* Mobile Menu */


  $('.gla_main_menu').on("click", function (e) {
    $(this).next('.gla_main_menu_content').toggleClass('active');
    $(this).next().next('.gla_main_menu_content_menu').toggleClass('active');
    $(this).toggleClass('active');
  });
  /* Section Background */

  $('.gla_image_bck').each(function () {
    var image = $(this).attr('data-image');
    var gradient = $(this).attr('data-gradient');
    var color = $(this).attr('data-color');
    var blend = $(this).attr('data-blend');
    var opacity = $(this).attr('data-opacity');
    var position = $(this).attr('data-position');
    var height = $(this).attr('data-height');

    if (image) {
      $(this).css('background-image', 'url(' + image + ')');
    }

    if (gradient) {
      $(this).css('background-image', gradient);
    }

    if (color) {
      $(this).css('background-color', color);
    }

    if (blend) {
      $(this).css('background-blend-mode', blend);
    }

    if (position) {
      $(this).css('background-position', position);
    }

    if (opacity) {
      $(this).css('opacity', opacity);
    }

    if (height) {
      $(this).css('height', height);
    }
  });
  /* Over */

  $('.gla_over, .gla_head_bck').each(function () {
    var color = $(this).attr('data-color');
    var image = $(this).attr('data-image');
    var opacity = $(this).attr('data-opacity');
    var blend = $(this).attr('data-blend');
    var gradient = $(this).attr('data-gradient');

    if (gradient) {
      $(this).css('background-image', gradient);
    }

    if (color) {
      $(this).css('background-color', color);
    }

    if (image) {
      $(this).css('background-image', 'url(' + image + ')');
    }

    if (opacity) {
      $(this).css('opacity', opacity);
    }

    if (blend) {
      $(this).css('mix-blend-mode', blend);
    }
  });
  $('.gla_slide_title, h2').each(function () {
    var color = $(this).attr('data-color');

    if (color) {
      $(this).find('span').css('color', color);
    }
  });
  $('.gla_icon_box').each(function () {
    var color = $(this).attr('data-color');

    if (color) {
      $(this).find('i').css('color', color);
    }
  });
  $('.skill-bar-content').each(function () {
    var color = $(this).attr('data-color');

    if (color) {
      $(this).css('background-image', color);
    }
  });
  $('img.gla_img_shadow').each(function () {
    var color = $(this).attr('data-shadow');

    if (color) {
      $(this).css('filter', color);
    }
  });
  $('.gla_page').each(function () {
    var border = $(this).attr('data-border');

    if (border) {
      $('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);
      $('.gla_bordered_block').css('border-left-color', border);
      $('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
      $('.gla_team_simple .gla_bordered_block').css('border-top-color', border);
    }
  });
  $('.gla_default_menu').each(function () {
    var color = $(this).attr('data-color');

    if (color) {
      $(this).find('ul').css('background-color', color);
    }
  });
  /* Map */

  $('.gla_map_over').on("click", function (e) {
    $(this).parents('.gla_section').toggleClass('active_map');
  });
  /* Mobile Menu */

  $('.gla_top_menu_mobile_link').on("click", function (e) {
    $(this).next('.gla_top_menu_cont').fadeToggle();
    $(this).parents('.gla_light_nav').toggleClass('active');
  });
  $('.gla_countdown').each(function () {
    var year = $(this).attr('data-year');
    var month = $(this).attr('data-month');
    var day = $(this).attr('data-day');
    $(this).countdown({
      until: new Date(year, month - 1, day)
    });
  });
  $('.gla_countdown_gold').each(function () {
    var year = $(this).attr('data-year');
    var month = $(this).attr('data-month');
    var day = $(this).attr('data-day');
    $(this).countdown({
      until: new Date(year, month - 1, day),
      layout: '<span class="countdown-row countdown-show3"><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_day gla_image{d100}"></span><span class="gla_image{d10}"></span><span class="gla_image{d1}"></span></span><span class="countdown-period">Days</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_hours gla_image{h10}"></span><span class="gla_image{h1}"></span></span><span class="countdown-period">Hours</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_minutes gla_image{m10}"></span><span class="gla_image{m1}"></span></span><span class="countdown-period">Minutes</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_sec gla_image{s10}"></span><span class="gla_image{s1}"></span></span><span class="countdown-period">Seconds</span></span></span>	'
    });
  });
  /*Scroll Effect*/

  $('.gla_go').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 300);
    e.preventDefault();
  });
  /*Animation Block Delay*/

  $('div[data-animation=animation_blocks]').each(function () {
    var i = 0;
    $(this).find('.gla_icon_box, .skill-bar-content, .gla_anim_box').each(function () {
      $(this).css('transition-delay', '0.' + i + 's');
      i++;
    });
  });
  /*Increase-Decrease*/

  $('.increase-qty').on("click", function (e) {
    var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    var qtyb = qtya * 1 + 1;
    $(this).parents('.add-to-cart').find('#qty').val(qtyb);
    e.preventDefault();
  });
  $('.decrease-qty').on("click", function (e) {
    var qtya = $(this).parents('.add-to-cart').find('#qty').val();
    var qtyb = qtya * 1 - 1;

    if (qtyb < 1) {
      qtyb = 1;
    }

    $(this).parents('.add-to-cart').find('#qty').val(qtyb);
    e.preventDefault();
  });
  /* Shortcode Nav */

  var top_offset = $('header').height() - 1;
  $('#nav-sidebar').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 700,
    scrollOffset: top_offset,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });
  /* Bootstrap */

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  /* Anchor Scroll */

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".gla_logo").addClass('active');
      $('body').addClass('gla_first_step');
    } else {
      $('body').removeClass('gla_first_step');
      $(".gla_logo").removeClass('active');
    }

    if ($(window).scrollTop() > 500) {
      $('body').addClass('gla_second_step');
    } else {
      $('body').removeClass('gla_second_step');
    }
  });
  /* Fixed for Parallax */

  $(".gla_fixed").css("background-attachment", "fixed");
  /* Submenu */

  $('.gla_parent').on({
    mouseenter: function mouseenter() {
      $(this).find('ul').addClass('active');
    },
    mouseleave: function mouseleave() {
      $(this).find('ul').removeClass('active');
    }
  });
  $('.gla_search_parent').on({
    mouseenter: function mouseenter() {
      $(this).find('ul').addClass('active');
    },
    mouseleave: function mouseleave() {
      $(this).find('ul').removeClass('active');
    }
  });
  /* Music */

  $('.gla_music_icon').on('click', function () {
    $('.gla_music_icon_cont').fadeToggle();
  });
  /* Mobile Menu */

  $('.gla_main_menu_content_menu .gla_parent').on("click", function (e) {
    $(this).find('ul').slideToggle(300);
  });
  $('.gla_mobile_menu').on("click", function (e) {
    $(this).toggleClass('active');
    $('.gla_mobile_menu_hor').toggleClass('active');
  });
  $('.gla_header_search span').on("click", function (e) {
    $(this).next('.gla_header_search_cont').fadeToggle();
  });
  $(window).load(function () {
    // Page loader
    $("body").imagesLoaded(function () {
      $(".gla_page_loader div").fadeOut();
      $(".gla_page_loader").delay(200).fadeOut("slow");
    });
    /*Masonry*/

    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      stagger: 0,
      transitionDuration: '0',
      isAnimated: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    });
    $grid.imagesLoaded().progress(function () {
      $grid.isotope('layout');
    });
    /*SkroolR*/

    if (!device.tablet() && !device.mobile()) {
      var s = skrollr.init({
        forceHeight: false
      });
    }

    $('.masonry').masonry({
      itemSelector: '.masonry-item'
    });
    $('.filter-button-group').on('click', 'a', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    $(window).resize(function () {
      $grid.isotope('layout');
    });

    if (!device.tablet() && !device.mobile()) {
      $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        verticalOffset: 50
      });
    }
    /*Boxes AutoHeight*/


    function setEqualHeight(columns) {
      var tallestcolumn = 0;
      columns.each(function () {
        $(this).css('height', 'auto');
        var currentHeight = $(this).height();

        if (currentHeight > tallestcolumn) {
          tallestcolumn = currentHeight;
        }
      });
      columns.height(tallestcolumn);
    }
    /* Block Autheight */


    if (!device.tablet() && !device.mobile()) {
      $('.gla_auto_height').each(function () {
        setEqualHeight($(this).find('> div[class^="col"]'));
      });
    }

    if (device.tablet() && device.landscape()) {
      $('.gla_auto_height').each(function () {
        setEqualHeight($(this).find('> div[class^="col"]'));
      });
    }

    $(window).resize(function () {
      if (!device.tablet() && !device.mobile()) {
        $('.gla_auto_height').each(function () {
          setEqualHeight($(this).find('> div[class^="col"]'));
        });
      }

      if (device.tablet() && device.landscape()) {
        $('.gla_auto_height').each(function () {
          setEqualHeight($(this).find('> div[class^="col"]'));
        });
      }

      if (device.tablet() && device.portrait()) {
        $('.gla_auto_height').each(function () {
          $(this).find('> div[class^="col"]').height('auto');
        });
      }
    });
  });
})(jQuery);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64391" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/glanz_script.js"], null)
//# sourceMappingURL=/glanz_script.e403c568.js.map