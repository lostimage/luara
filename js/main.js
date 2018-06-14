;(function($) {
	"use strict";
	
	var introSlider = $('.ba-intro-slider'),
		bgSlider = $('.ba-bg-slider'),
		largeSlider = $('.ba-large-slider'),
		middleSlider = $('.ba-mid-slider'),
		smallSlider = $('.ba-small-slider');


		introSlider.slick({
			prevArrow: '.ba-intro-slider-prev',
			nextArrow: '.ba-intro-slider-next',
			asNavFor: bgSlider,
			speed:500,
			dots:true,
			appendDots: '.ba-intro-slider-nav',
			adaptiveHeight: true
		});
		bgSlider.slick({
			arrows: false,
			asNavFor: introSlider,
			speed: 500,
			fade: true
		});
		largeSlider.slick({
			prevArrow: '.ba-triple-slider-prev',
			nextArrow: '.ba-triple-slider-next',
			asNavFor: '.ba-mid-slider, .ba-small-slider',
			dots: true,
			infinity:true,
			speed: 500,
			
			
		});
		middleSlider.slick({
			arrows: false,
			asNavFor:'.ba-large-slider, .ba-small-slider',
			infinity:true,
			speed: 500,
			
		});
		smallSlider.slick({
			arrows: false,
			asNavFor:'.ba-mid-slider, .ba-small-slider',
			infinity:true,
			speed: 500,
			
		});

		// toggle mob menu 
		var nav = $('.ba-nav') ,
		menuToggle = $('.ba-menu-toggle') ;
		menuToggle.on('click' , function (e) {
			e.preventDefault();
			nav.toggleClass('ba-open');
			
		});
		$('[data-overlay]').on('click', function (e) {
			$('.ba-modal-open').removeClass('ba-modal-open');
		})
		$('[data-modal]').on('click', function (e) {
			e.preventDefault();

			var modalId = $(this).attr('href');

			$(modalId).toggleClass('ba-modal-open');
		});

		// init magnific-popup
		$('[data-modal-video]').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 310
			
		});
})(jQuery);

