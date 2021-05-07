$(function() {

	let burger = $('.b-burger');
	let menu = $('.b-menu');

	burger.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-burger_active');
		menu.toggleClass('b-menu_visible');
		$('.b-navbar-phone').toggleClass('b-navbar-phone_visible');
	});


	let title = $('.section-title_backtext');

	

	title.on('scroll', function() {
		let titleText = $(this).find('h2').text();
		$(this).html(`<h2>${titleText}</h2><span>${titleText}</span>`)
	});

});
