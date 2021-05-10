$(function() {

	let burger = $('.b-burger');
	let menu = $('.b-menu');

	burger.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-burger_active');
		menu.toggleClass('b-menu_visible');
		$('.b-navbar-phone').toggleClass('b-navbar-phone_visible');
	});

	let accordeonHead = $('.theme-accordeon__section-head');
	let accordeonHeadActiveClass = 'theme-accordeon__section-head_active';
  
	let accordeonClickToggle = function(e) {
		e.preventDefault();
	  accordeonHead.not(this).removeClass(accordeonHeadActiveClass).next().slideUp(200);
	  $(this).toggleClass(accordeonHeadActiveClass).next().slideToggle(200);
	};
	$('.theme-accordeon__section-head_active').next().show();
	accordeonHead.on('click', accordeonClickToggle);


	let catToggle = $('.b-sidebar-toggle');

	catToggle.on('click', function(e) {
		$(this).toggleClass('b-sidebar-toggle_active');
		$(this).parent().toggleClass('b-sidebar_visible');
	});


	$('.portfolio-subnav__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('portfolio-subnav__toggle_active');
		$(this).parent().toggleClass('portfolio-subnav_active');
	});


	

	

});
