$(document).ready(function(){


	// Banner - Carousel
	$('.banner').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true
	});


	// Work - Carousel
	$('.works-items').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		margin:30,
		responsive:{
			0:{
            items:1
        	},
        	768:{
            items:3,
        	},
		}
	});


	
	// elements corousel
	$('.work-img-item').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true
	});
	


	// Testi - Carousel
	$('.testi-items').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true
	});


	
	// typography corousel
	$('.typography-img-item').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true
	});
	


	// Work Popup 
	$('.work-popup').magnificPopup({
		type: 'image',
	  	gallery:{
	   		enabled:true
	  	}
	});


	// Pie Progress
	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 80
      });
	$('.pie_progress').asPieProgress('start');



	// Top Button
	$('.back-top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});



	//Mobaile Menu
	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000);

		return false;
	})
	

	// Mix It Up
	var mixer = mixitup('.ecommers-area, .megamenu-area',{
	
		 
		})
	
});