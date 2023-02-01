$(function () {
	normalizeCarouselItems();

	window.addEventListener('resize', function () {
		normalizeCarouselItems();
	});

	function normalizeCarouselItems() {
		$('.carousel').each(function () {
			var $items = $(this).find('.carousel-item');
			$items.css('min-height', 0);
			var maxHeight = 0;
			$items.each(function () {
				var height = $(this).height();
				if (height > maxHeight) {
					maxHeight = height;
				}
			});

			$items.css('min-height', maxHeight);
		});
	}
});