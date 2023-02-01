var COUNTER_DURATION = 1500;
var COUNTER_INTERVAL = 25;
var OFFSET_RATIO = 1/3;
var MIN_TOP = 0;
var MIN_BOTTOM = 80;

$(function () {
	var $sections = $('.section');

	var target;
	$sections.each(function () {
		var topThis = Math.abs(this.getBoundingClientRect().top);
		var topTarget = target ? Math.abs(target.getBoundingClientRect().top) : 0;
		if (!target || topThis < topTarget) {
			target = this;
		}
	});
	handleInteraction(target);

	var offset = $(window).height() * OFFSET_RATIO;
	scrollStop(function () {
		var target;
		$sections.each(function () {
			var top = this.getBoundingClientRect().top;
			var bottom = this.getBoundingClientRect().bottom;

			if (top >= MIN_TOP && top <= offset && (!target || top < Math.abs(target.getBoundingClientRect().top))) {
				target = this;
			} else if (bottom >= MIN_BOTTOM && (!target || bottom < target.getBoundingClientRect().bottom)) {
				target = this;
			}
		});

		handleInteraction(target);
	});

	function handleInteraction(target) {
		if (!target) {
			return;
		}

		var $target = $(target);
		$target.addClass('interaction-in');
		$target.find('[data-counter-from][data-counter-to]:not([data-counter-finished])').each(function () {
			var $counter = $(this);
			$counter.attr('data-counter-finished', '');
			var from = parseInt($counter.data('counter-from'));
			var to = parseInt($counter.data('counter-to'));

			if (to > from) {
				var step = to / (COUNTER_DURATION / COUNTER_INTERVAL);
				var currentCount = 0;
				var lastCount = 0;

				function counter() {
					currentCount = currentCount + step;
					currentCount = currentCount < to ? currentCount : to;
					if (currentCount > lastCount) {
						$counter.text(Math.round(currentCount).toLocaleString());
					}
					lastCount = currentCount;
					if (currentCount < to) {
						setTimeout(counter, COUNTER_INTERVAL);
					}
				}

				setTimeout(counter, COUNTER_INTERVAL);
			}
		});
	}

	$('[data-counter-from][data-counter-to]').each(function () {
		$(this).text($(this).data('counter-from'));
	});
});