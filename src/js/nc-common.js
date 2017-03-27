var nc = {};

/*----------  VALIDATION  ----------*/
nc.elcheck = function(el) {
	'use strict';
	if ($(el).length > 0) {
		return true;
	} else {
		return false;
	};
}

/*----------  COUNTDOWN-CLOCK  ----------*/
nc.countdown = function (obj) {
	'use strict';

	var countdownHtml  = '<div class="inner-dashboard">';
	countdownHtml += '	<!-- DAYS -->';
	countdownHtml += '	<div class="dash days_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">days</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- HOURS -->';
	countdownHtml += '	<div class="dash hours_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">hours</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- MINIUTES -->';
	countdownHtml += '	<div class="dash minutes_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">minutes</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- SECONDS -->';
	countdownHtml += '	<div class="dash seconds_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">seconds</span>';
	countdownHtml += '	</div>';
	countdownHtml += '</div>';

	$(obj).html(countdownHtml);

	var config = {
		day   : parseInt($(obj).attr("data-day"),10),
		month : parseInt($(obj).attr("data-month"),10),
		year  : parseInt($(obj).attr("data-year"),10),
		hour  : parseInt($(obj).attr("data-hr"),10),
		min   : parseInt($(obj).attr("data-min"),10),
		sec   : parseInt($(obj).attr("data-sec"),10)
	}

	// DESKTOP CLOCK
	$(obj).countDown({
		targetDate: {
			'day': 	 config.day,
			'month': config.month,
			'year':  config.year,
			'hour':  config.hour,
			'min': 	 config.min,
			'sec': 	 config.sec
		},
		omitWeeks: true
	});
}

;(function(){
	'use strict';
	
	jQuery(document).ready(function($) {
		/*----------  COUNTDOWN-CLOCK  ----------*/		
		if (nc.elcheck(".countdown-widget")) {
			var countdown = 0;
			$(".countdown-widget").each(function(index, el) {
				var obj = 'countdown'+countdown;
				$(this).attr("id", obj);
				nc.countdown("#"+obj);
				countdown++;
			});
		}
	});
})();