$(document).ready(function() {
		$('a').click(function() {
				var target = $($(this).attr('href'));

				$('html, body').animate({
						'scrollTop': target.offset().top
				});
		});
});

$(window).scroll(function(){

		if ($(window).scrollTop() > 50) {
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-inverse', 300);
				$('nav').removeClass('navbar-trans-dark');
				$('nav').addClass('navbar-small', 300);
		}
		else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
						$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
		}

$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

});
