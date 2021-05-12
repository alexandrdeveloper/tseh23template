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

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".b-sidebar_visible"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.b-sidebar').removeClass('b-sidebar_visible');
			$('.b-sidebar-toggle').removeClass('b-sidebar-toggle_active');
		}
	});


	$('.portfolio-subnav__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('portfolio-subnav__toggle_active');
		$(this).parent().toggleClass('portfolio-subnav_active');
	});

	

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".portfolio-subnav__list_active"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.portfolio-subnav__list').removeClass('portfolio-subnav__list_active');
		}
	});

	$('.portfolio-subnav__toggle').on('click', function(e) {
		e.preventDefault();
		$('.portfolio-subnav__list').toggleClass('portfolio-subnav__list_active');
	});

	
	jQuery('.gallery-init').on('click', function () {
		jQuery('.portfolio-grid').magnificPopup('open');
	});
	
	$('.portfolio-grid').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	}); 

	

	
	
	

	

	$('.portfolio-subnav__item').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('portfolio-subnav__item_active');
	});

	$('.modal-file-init').on('click', function(e) {
		e.preventDefault();
		$('.b-modal-file').fadeIn(300);
		$('body').addClass('no-scroll');

	});
	$('.modal-call-init').on('click', function(e) {
		e.preventDefault();
		$('.b-modal-contact').fadeIn(300);
		$('body').addClass('no-scroll');

	});

	$('.modal-close').on('click', function(e) {
		e.preventDefault();
		$('.b-modal').fadeOut(300);
		$('body').removeClass('no-scroll');

	});

	$('.b-modal-social__toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-modal-social__toggle_active');
		$('.b-modal-social').toggleClass('b-modal-social_visible');
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".b-modal__window"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.b-modal').fadeOut(300);
			$('body').removeClass('no-scroll');
		}
	});



	$(".soft-scroll").mPageScroll2id();

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		 /*Если сделали скролл на 100px задаём новый класс для header*/
		if(height > 100){
		$('.scroll-up').addClass('scroll-up_visible');
		} else{
		/*Если меньше 100px удаляем класс для header*/
		$('.scroll-up').removeClass('scroll-up_visible');
		}
	});
	
	
	



	$(".user-phone").mask("+ 7 (999)-999-99-99");

	
	
	var mixer = mixitup('.portfolio-grid');

	
	


	

	

});
