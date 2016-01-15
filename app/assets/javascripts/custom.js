$(document).ready(function() {
		$('a').click(function() {
				var target = $($(this).attr('href'));

				$('html, body').animate({
						'scrollTop': target.offset().top
				});
		});
});
