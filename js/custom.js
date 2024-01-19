$(document).ready(function() {
    
    
$(function() {
	//----- OPEN
	$('[data-popup-open]').on('click', function(e) {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

		e.preventDefault();
	});

	//----- CLOSE
	$('[data-popup-close]').on('click', function(e) {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

		e.preventDefault();
	});
});


    
    $('.clientScroll').slick({
        rows: 3,
  dots: false,
  infinite: false,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll:2,
   pauseOnHover:false,
   autoplaySpeed: 1500,
   arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
    $('.slider_banner').slick({
      dots:false,
      fade:true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3500,
      infinite: true,
      pauseOnHover:false,
      arrows: false,
    });
    
    $('.gallerySlide').slick({
      dots:true,
      fade:true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3500,
      infinite: true,
      pauseOnHover:false,
      arrows: false,
});
    
    
// localStorage.setItem("scrollTop", document.body.scrollTop);
// window.onload = function() {  
// var scroll = parseInt(localStorage.getItem("scrollTop"));
// //parseInt(localStorage.scrollTop);   
// if (!isNaN(scroll))
// document.body.scrollTop = scroll;
// }


// 	$(window).on('mousewheel DOMMouseScroll', function(e) {
//   var dir,
//       amt = 100;

//   e.preventDefault();
//   if(e.type === 'mousewheel') {
//     dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
//   }
//   else {
//     dir = e.originalEvent.detail < 0 ? '-=' : '+=';
//   }      

//   $('html, body').stop().animate({
//     scrollTop: dir + amt
//   },500, 'linear');
// })




	$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom").css({
		backgroundSize: (100 + scroll/25)  + "%",
		top: -(scroll/20)  + "%",

		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});
});



// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   $(".mb_img img").css({
//     width: (100 + scroll/5) + "%"
//   })
// })


 //Img moving animation
 
scroll_en_cours = false;
le_scroll = 0;

$(window).load(function() {
	TweenMax.to($('#masque'), 1, {transform: 'scale(1.0)', ease:Quart.easeInOut});

	
	if($('body').hasClass('page-template-page-services') && $(window).width()>1024) {
		$(window).scroll(function() {

scrollTop = $(window).scrollTop();
TweenMax.to($('.photo-gauche'), 2.99, {y:scrollTop/15+'px'});
TweenMax.to($('.photo-gauche2'), 2.99, {y:scrollTop/20+'px'});
TweenMax.to($('.photo-gauche3'), 2.99, {y:scrollTop/30+'px'});

		});
	}
	
});




	 $(function(){
        $.stellar({
          horizontalScrolling: false,
          verticalOffset: 40
        });
    });



	// $("html").SmoothScrollWheel({
 //        debug:true,
 //        defaultSpeed: 60,
 //        defaultAnimationTime: 2200
 //    });

 //    $(document).SmoothScrollWheel({
 //        debug: true,
 //        defaultDetailDelta: 3,
 //        defaultWheelDelta: 120,
 //        defaultSpeed: 50,
 //        defaultAnimationTime: 1500
 //    });
 
	$(window).scroll(function(){
	  	var sticky = $('.logo_osho'),
	    scroll = $(window).scrollTop();
		if (scroll >= 200) sticky.addClass('fixed');
	  	else sticky.removeClass('fixed');
	});
  


	$(window).scroll(function(){
	  	var sticky = $('header'),
	    scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('fixed');
	  	else sticky.removeClass('fixed');
	});

	$(window).scroll(function(){
	  	var sticky = $('.about1'),
	    scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('hide_one');
	  	else sticky.removeClass('hide_one');
	});

	$(window).scroll(function(){
	  	var sticky = $('.about2'),
	    scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('animation_js');
	  	else sticky.removeClass('animation_js');
	});

	$(window).scroll(function(){
	  	var sticky = $('.about2'),
	    scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('animation_jss');
	  	else sticky.removeClass('animation_jss');
	});

	// $(window).scroll(function(){
	//   	var sticky = $('.animation-box'),
	//     scroll = $(window).scrollTop();
	// 	if (scroll >= 400) sticky.addClass('animation-fixed');
	//   	else sticky.removeClass('animation-fixed');
	// });

	
	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
	
	  // setTimeout(function(){
	  // 	//$('.video_section').fadeIn(3000).hide();
	  // 	//$('.video_section').hide();

	  // 	$('.video_full').fadeOut(2000);
	  // 	$('.services_ortho').fadeIn(3000).show();
	  // }, 1000);
	
//left_hover

	  $("#left_hover").mouseover(function() {
		   $('.watermark #my_image').addClass('show_opcity');
	  		//$('#my_image').attr('src','img/Image-Circle.png');
	  		$('#my_image').fadeIn();
	  		$('.fadejs').css({
	  			opacity: '1',
	  		});
	  		$('.img_role').css({
		  		left: '-80px',
		  		transform: 'translate(-80px)',
		  		transition: 'all ease-in-out 1.9s',
	  		});
		}).mouseout(function() {
		    $('.watermark #my_image').removeClass('show_opcity');
		  	//$('#my_image').fadeOut();
	  		//$('#my_image').attr('src','');
	  		$('.fadejs').css({
	  			opacity: '0',
	  		});
	  		$('.img_role').css({
		  		left: '0',
		  		transform: '',
		  		transition: 'all ease-in-out 1.9s',
	  		});
	  		
		});


//right_hover

	  $("#right_hover").mouseover(function() {
		    $('.watermark #my_image').addClass('show_opcity');
	  		//$('#my_image').attr('src','img/Image-Circle.png');
	  		$('#my_image').fadeIn(3000);
	  		$('.fadejs').css({
	  			opacity: '1',
	  		});
	  		$('.img_role').css({
		  		right: '-80px',
		  		transform: 'translate(80px)',
		  		background: '',
		  		transition: 'all ease-in-out 1.9s',
	  		});
		}).mouseout(function() {
		    $('.watermark #my_image').removeClass('show_opcity');
		   // $('#my_image').fadeOut(3000);
	  		//$('#my_image').attr('src','');
	  		$('.img_role').css({
		  		right: '0',
		  		transform: '',
		  		transition: 'all ease-in-out 1.9s',
	  		});
	  		$('.fadejs').css({
	  			opacity: '0',
	  		});
		});



		 $('.slider-for').slick({
		   slidesToShow: 1,
		   slidesToScroll: 1,
		   arrows: false,
		   fade: true,
		    infinite: true,
		   asNavFor: '.slider-nav'
		 });
		 $('.slider-nav').slick({
		   slidesToShow: 7,
		   slidesToScroll: 1,
		   asNavFor: '.slider-for',
		   dots: false,
		   focusOnSelect: true
		 });

		 $('a[data-slide]').click(function(e) {
		   e.preventDefault();
		   var slideno = $(this).data('slide');
		   $('.slider-nav').slick('slickGoTo', slideno - 1);
		 });

		  $('.left').click(function(){
          $('.slider-for').slick('slickPrev');
        })

        $('.right').click(function(){
          $('.slider-for').slick('slickNext');
        });



});


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function easeOutBounce (x) {
				var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
				var rate = Math.pow(base,1.5);
				var rateR = Math.pow(1 - x, 2);
				var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
				return (1- rateR) + (progress * rateR);
			}

			var timing,
				timingProps = {
					type: 'delayed',
					duration: 150,
					start: 'autostart',
					pathTimingFunction: Vivus.LINEAR,
					animTimingFunction: Vivus.LINEAR
				};

			function timingTest (buttonEl, property, type) {
				var activeSibling = buttonEl.parentNode.querySelector('button.active');
				activeSibling.classList.remove('active');
				buttonEl.classList.add('active');

				timingProps.type = (property === 'type') ? type : timingProps.type;
				timingProps.pathTimingFunction = (property === 'path') ? Vivus[type] : timingProps.pathTimingFunction;
				timingProps.animTimingFunction = (property === 'anim') ? Vivus[type] : timingProps.animTimingFunction;

				timing && timing.stop().destroy();
				timing = new Vivus('timing-example', timingProps);
			}

			var spout = new Vivus('hi-there', {type: 'scenario-sync', duration: 100, start: 'autostart', dashGap: 100, forceRender: false},
				function () {
					if (window.console) {
						//console.log('Animation finished. [log triggered from callback]');
					}
				});
			var bread = new Vivus('hi-theres', {type: 'scenario-sync', duration: 100, start: 'autostart', dashGap: 100, forceRender: false},
				function () {
					if (window.console) {
					//	console.log('Animation finished. [log triggered from callback]');
					}
				});
			var rice = new Vivus('rice', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
				function () {
					if (window.console) {
					//	console.log('Animation finished. [log triggered from callback]');
					}
				});
			var stand = new Vivus('stand', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
				function () {
					if (window.console) {
						//console.log('Animation finished. [log triggered from callback]');
					}
				});
			var profile = new Vivus('profile', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
				function () {
					if (window.console) {
						//console.log('Animation finished. [log triggered from callback]');
					}
				});
			var snack = new Vivus('snack', {type: 'scenario-sync', duration: 150, start: 'autostart', dashGap: 150, forceRender: false},
				function () {
					if (window.console) {
						//console.log('Animation finished. [log triggered from callback]');
					}
				});
			var zipper = new Vivus('zipper', {type: 'scenario-sync', duration: 20, start: 'autostart', dashGap: 20, forceRender: false},
				function () {
					if (window.console) {
						//console.log('Animation finished. [log triggered from callback]');
					}
				}),
				obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
				obt2 = new Vivus('obturateur2', {type: 'sync', duration: 150}),
				obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
				pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});



var video = document.getElementById("myVideo");
video.autoplay = true;
video.load();

var myVideos = document.getElementById("myVideos");
myVideos.autoplay = true;
myVideos.load();


var footerId = document.getElementById("footerId");
footerId.autoplay = true;
footerId.load();

var processs = document.getElementById("process");
processs.autoplay = true;
processs.load();


// var printing = document.getElementById("printing");
// printing.autoplay = true;
// printing.load();

var inspection = document.getElementById("inspection");
inspection.autoplay = true;
inspection.load();

// var doctoring = document.getElementById("doctoring");
// doctoring.autoplay = true;
// doctoring.load();



function pradeephover() {
	$('#pradeep').show();
	$('#anurag').hide();
	$('#avneet').hide();
}

function anurag() {
	$('#anurag').show();
	$('#pradeep').hide();
	$('#avneet').hide();
}

function avneet() {
	$('#avneet').show();
	$('#pradeep').hide();
	$('#anurag').hide();
}


function openMenu() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";

// $('#main').css({'marginLeft': '250px'});
// $('#mySidenav').css({'width': '250px'});

$('#main').toggleClass('leftswipe');
$('#mySidenav').toggleClass('widthswipe');
}

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }