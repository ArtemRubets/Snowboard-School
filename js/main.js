$(document).ready(function(){
	$('.slider-wrap').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	});
	$('.menu-btn').on('click',function(){
		$('.list').toggleClass('active');
	}); 
});

