$(function () {
	$('.goto-section').click(function () {
		var $target = $($(this).attr('href'));
		if ($target.length) {
			if (window.matchMedia('(min-width: 1200px)').matches) {
				scrollToTarget($target);
			} else {
				setTimeout(function () {
					scrollToTarget($target);
				}, 350);
			}

		}

		return false;
	});

	$('.sections-nav-link').click(function () {
		$('body').removeClass('sections-nav-in');
	});

	$('.sections-nav-toggler').click(function () {
		$('body').toggleClass('sections-nav-in');
	});

	function scrollToTarget($target) {
		window.scrollTo({
			top: $target.offset().top,
			behavior: 'smooth'
		});
	}
});