$(document).ready(function () {
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('active')
	})

	var decimal = $('.decimal');

	appear({
		elements: function elements(){
		    return document.getElementsByClassName('track');
		},
		appear: function appear(decimal){
		    $('.js-decimal').countTo({
		    	speed: 2000
		    });
		},
		bounds: 200,
	});

	$('.js-link').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 800,
            offset: -60,
            easing: 'ease-in-out'
        });
    });

    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		},

	});

	
})