$(document).ready(function(){
			$('a').click(fuction() {
							var target = $($(this).attr('href'));

									$('html, body').animate({
													'scrollTop': target.offset().top
												});
										});
});
