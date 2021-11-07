
(function($) {
	$.fn.jQuerySimpleCounter = function( options ) {
	    settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    const thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};

}(jQuery));


$('#exp').jQuerySimpleCounter({
			start:  0,
	        end:    28,
			duration: 4000
		});

$('#satisfy').jQuerySimpleCounter({
			start:  0,
	        end:    50,
			duration: 4000
		});
$('#corpo').jQuerySimpleCounter({
			start:  0,
	        end:    50,
			duration: 4000
		});
$('#teamm').jQuerySimpleCounter({
			start:  0,
	        end:    15,
			duration: 4000
		});

  