(function($) {
	"use strict"; // Start of use strict

	/* Logo Lettering */
	var logo_rotate = $("header .gla_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .gla_logo_animation").addClass('gla_logo_rotate_'+logo_rotate);
	}

	var main_menu_icon = $(".gla_main_menu_icon b");
	main_menu_icon.lettering();
	main_menu_icon.each(function(){
	 	var i = 2;
	 	$(this).find('span').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	 });

	$("header .gla_logo_animation").lettering();
	$("header .gla_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });

	/*CountTo*/
	$('.gla_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })

	/* OWL Team Single*/
	$(".gla_team_slider_single").owlCarousel({
 		navigation : true,
 		responsive: true,
 		responsiveRefreshRate : 200,
 		responsiveBaseElement:window,
 		slideSpeed : 200,
 		addClassActive:true,
		paginationSpeed : 200,
		rewindSpeed : 200,
		items:1,
		autoPlay : true,
		singleItem:true,
		autoHeight : true,
		touchDrag:true,
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/* Section Background */
	$('.gla_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (blend){
			$(this).css('background-blend-mode', blend);
		}
		if (position){
			$(this).css('background-position', position);
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (height){
			$(this).css('height', height);
		}

	});



	/* Over */
	$('.gla_over, .gla_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		var gradient = $(this).attr('data-gradient');
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);
		}
	});
	$('.gla_slide_title, h2').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('span').css('color', color);
		}
	});
	$('.gla_icon_box').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('i').css('color', color);
		}
	});
	$('.skill-bar-content').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).css('background-image', color);
		}
	});
	$('img.gla_img_shadow').each(function(){
		var color = $(this).attr('data-shadow');
		if (color){
			$(this).css('filter', color);
		}
	});
	$('.gla_page').each(function(){
		var border = $(this).attr('data-border');
		if (border){
			$('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);
			$('.gla_bordered_block').css('border-left-color', border);
			$('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
			$('.gla_team_simple .gla_bordered_block').css('border-top-color', border);
		}
	});
	$('.gla_default_menu').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('ul').css('background-color', color);
		}
	});

	$('.gla_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});

	/*Scroll Effect*/
	$('.gla_go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});

	/*Animation Block Delay*/

	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;
		$(this).find('.gla_icon_box, .skill-bar-content, .gla_anim_box').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".gla_logo").addClass('active');
			$('body').addClass('gla_first_step');

		}
		else {
			$('body').removeClass('gla_first_step');
			$(".gla_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('gla_second_step');
		}
		else {
			$('body').removeClass('gla_second_step');
		}
	});

	/* Fixed for Parallax */
	$(".gla_fixed").css("background-attachment","fixed");

  var scriptMusic = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9T7J07LQffc" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
  var once = false;
  /* Music */
	$('.gla_music_icon').on('click',function(){
    if (!(once)) {
      $('.gla_music_icon_cont').append(scriptMusic);
      once = true;
    }
		$('.gla_music_icon_cont').fadeToggle();
  });

	$(window).load(function(){

			// Page loader

	    $("body").imagesLoaded(function(){
	        $(".gla_page_loader div").fadeOut();
	    	$(".gla_page_loader").delay(200).fadeOut("slow");
	    });

		/*SkroolR*/
		if( !device.tablet() && !device.mobile() ) {
			var s = skrollr.init({
				forceHeight: false,
			});
		}

		if( !device.tablet() && !device.mobile() ) {
				$(window).stellar({
				 	horizontalScrolling: false,
					responsive: true,
					verticalOffset: 50
			 	});
    }


		/*Boxes AutoHeight*/
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					$(this).css('height','auto');
					var currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
						{
						tallestcolumn = currentHeight;
						}
				}
			);
		columns.height(tallestcolumn);
		}

		/* Block Autheight */
		if( !device.tablet() && !device.mobile() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		}

		$(window).resize(function() {
			if( !device.tablet() && !device.mobile() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.landscape() ) {
				$('.gla_auto_height').each(function(){
					setEqualHeight($(this).find('> div[class^="col"]'));
				});
			}
			if( device.tablet() && device.portrait() ) {
				$('.gla_auto_height').each(function(){
					$(this).find('> div[class^="col"]').height('auto');
				});
			}
		});


	});



})(jQuery);





