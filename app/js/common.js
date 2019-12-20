$(document).ready(function() {

	$('.hamburger').click(function (){

		$(this).toggleClass('is-active')

		if($(this).hasClass('is-active')){
			$('.menu').addClass('menu_visible')

		}else{
			$('.menu').removeClass('menu_visible')
		}

	});

});

$(window).resize(function (){

	if($('.hamburger').hasClass('is-active')) $('.hamburger').click()


});

$(window).scroll(function (){
	if($(this).scrollTop() >= 50){
		$('.menu').addClass('menu_scroll')
	}else{
		$('.menu').removeClass('menu_scroll')
	}
});
