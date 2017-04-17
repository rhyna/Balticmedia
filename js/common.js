function headerResizing () {
	if($(window).outerWidth() < 1200) {
		$('.sandwich-menu').css('display', 'inline-block');	
		$('.header_colored_buttons').css('display', 'none');
		$('.header_upper_links').css('display', 'none');
		$('.main_navigation').addClass('resize');
	} else {
		$('.sandwich-menu').css('display', 'none');
		$('.header_colored_buttons').css('display', 'block');
		$('.header_upper_links').css('display', 'block');
		$('.main_navigation').removeClass('resize');
	}
};

headerResizing();
$(window).resize(headerResizing);

function underCountries () {
	if($(window).outerWidth() < 1200) {
		if(!$('.links-under-countries-and-choose-tour-wrapper').length) {
			var container = $('<div/>').addClass('links-under-countries-and-choose-tour-wrapper');
			$('.links_under_countries, .choose_tour_online').appendTo(container);
			$('.check_all_countries').after(container);
		}
	} else {
		if($('.links-under-countries-and-choose-tour-wrapper').length) {
			$('.choose_tour_online').appendTo('.slider_wrapper');
			$('.countries--extra').after($('.links_under_countries'));
			$('.links-under-countries-and-choose-tour-wrapper').remove();
		}
			
	}
};

underCountries();
$(window).on('resize', underCountries);

window.onload = function(){
	$(window).trigger('onload');
};


function resizeHeader () {
	var headerHeight = $('header').height();
	$('main').css('padding-top', headerHeight);
};

$(window).on('resize', resizeHeader);
$(window).on('onload', resizeHeader);

$(window).scroll(function() {
    var height = $(window).scrollTop();
	    if(height > 0) {
	        if(!$('.header_wrapper').hasClass('scrolled')) {
				$('.header_wrapper').addClass('scrolled');
		} 
    } else{
    	$('.header_wrapper').removeClass('scrolled');
    }
});

$('.sandwich-menu').click(function(){
	$('.sliding-side-menu').addClass('visible');
});

$('.close-side-menu').click(function(){
	$('.sliding-side-menu').removeClass('visible');
});

$('.buttons span').click(function() {
	var id = $(this).attr('data-id');

	$('.buttons span').removeClass('active');
	$(this).addClass('active');

	$('.phones-item').removeClass('phones-item--visible');
	$('.phones-item[data-id="' + id + '"]').addClass('phones-item--visible');
});

$('.check_all_countries').click(function(){
	$('.countries--extra').slideToggle();

	$('.countries--extra').toggleClass('show');
	if ($('.countries--extra').hasClass('show')) {
		$('.check_all_countries span>span').text('Скрыть список стран');
	} else {
		$('.check_all_countries span>span').text('Смотреть все страны');
	};
});