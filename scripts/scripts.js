(function($){
  $(function(){

  	$('.tooltipped').tooltip({delay: 50});

    $('.button-collapse').sideNav();

    $('.materialboxed').materialbox();

    $('.carousel').carousel();

    $('.slider').slider();

		// Pause slider
		$('.slider').slider('pause');
		// Start slider
		$('.slider').slider('start');
		// Next slide
		$('.slider').slider('next');
		// Previous slide
		$('.slider').slider('prev');

	// Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.

	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.

	// Set to nth slide
	$('.carousel').carousel('set', 4);

	$('.logo').click(function(){
		  $('.logo').effect( "bounce", { times: 3 }, "slow" );
	});


  }); // end of document ready
})(jQuery); // end of jQuery name space