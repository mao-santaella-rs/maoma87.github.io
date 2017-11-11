
'use strict';

$(document).ready(function(){
	
});



$(function(){
	var nav = $('.catalogo');
	var	body = $('body');
    var	animateTime = 500;
    var navLink = $('.btn_ver_todos');

    $('.btn_ver_todos').mouseenter(function(){
    	$(this).css('cursor','pointer');
    	$(this).css({'color':'#95EFC9'},1000);
    });

    $('.btn_ver_todos').mouseleave(function(){
    	$(this).css({'color':'#93C1AF'},1000);
    });

	navLink.click(function(){		
 		if(nav.height() === 455){
    		nav.stop().animate({ height: "+=2100" }, animateTime);
    		body.stop().animate({ height: "+=2100" }, animateTime);
    	} else {
    		nav.stop().animate({ height: "-=2100" }, animateTime);
    		body.stop().animate({ height: "-=2100" }, animateTime);
    	}
  	});
});








$(function() {

    //settings for slider
    var width_sl01 = 580;
    var animationSpeed_sl01 = 1000;
    var pause_sl01 = 9000;
    var currentSlide_sl01 = 1;

    //cache DOM elements
    var $slider_sl01 = $('.slider01');
    var $slideContainer_sl01 = $('.slides', $slider_sl01);
    var $slides_sl01  = $('.slide', $slider_sl01);

    var interval_sl01;

    function startSlider_sl01() {
        interval_sl01 = setInterval(function() {
            $slideContainer_sl01.animate({'margin-left': '-='+width_sl01}, animationSpeed_sl01, function() {
                if (++currentSlide_sl01 === $slides_sl01.length) {
                    currentSlide_sl01 = 1;
                    $slideContainer_sl01.css('margin-left', 0);
                }
            });
        }, pause_sl01);
    }
    function pauseSlider_sl01() {
        clearInterval(interval_sl01);
    }

    $slideContainer_sl01
        .on('mouseenter', pauseSlider_sl01)
        .on('mouseleave', startSlider_sl01 );

    startSlider_sl01();
});


$(function(){
        //settings for slider
    var width_sl02 = 282;
    var animationSpeed_sl02 = 1000;
    var pause_sl02 = 7500;
    var currentSlide_sl02 = 1;

    //cache DOM elements
    var $slider_sl02 = $('.slider02');
    var $slideContainer_sl02 = $('.slides', $slider_sl02);
    var $slides_sl02  = $('.slide', $slider_sl02);

    var interval_sl02;

    function startSlider_sl02() {
        interval_sl02 = setInterval(function() {
            $slideContainer_sl02.animate({'margin-left': '-='+width_sl02}, animationSpeed_sl02, function() {
                if (++currentSlide_sl02 === $slides_sl02.length) {
                    currentSlide_sl02 = 1;
                    $slideContainer_sl02.css('margin-left', 0);
                }
            });
        }, pause_sl02);
    }
    function pauseSlider_sl02() {
        clearInterval(interval_sl02);
    }

    $slideContainer_sl02
        .on('mouseenter', pauseSlider_sl02)
        .on('mouseleave', startSlider_sl02 );

    startSlider_sl02();
})


$(function(){
        //settings for slider
    var width_sl03 = 282;
    var animationSpeed_sl03 = 1000;
    var pause_sl03 = 6000;
    var currentSlide_sl03 = 1;

    //cache DOM elements
    var $slider_sl03 = $('.slider03');
    var $slideContainer_sl03 = $('.slides', $slider_sl03);
    var $slides_sl03  = $('.slide', $slider_sl03);

    var interval_sl03;

    function startSlider_sl03() {
        interval_sl03 = setInterval(function() {
            $slideContainer_sl03.animate({'margin-left': '-='+width_sl03}, animationSpeed_sl03, function() {
                if (++currentSlide_sl03 === $slides_sl03.length) {
                    currentSlide_sl03 = 1;
                    $slideContainer_sl03.css('margin-left', 0);
                }
            });
        }, pause_sl03);
    }
    function pauseSlider_sl03() {
        clearInterval(interval_sl03);
    }

    $slideContainer_sl03
        .on('mouseenter', pauseSlider_sl03)
        .on('mouseleave', startSlider_sl03 );

    startSlider_sl03();
})


$(function(){
        //settings for slider
    var width_sl04 = 282;
    var animationSpeed_sl04 = 1000;
    var pause_sl04 = 4500;
    var currentSlide_sl04 = 1;

    //cache DOM elements
    var $slider_sl04 = $('.slider04');
    var $slideContainer_sl04 = $('.slides', $slider_sl04);
    var $slides_sl04  = $('.slide', $slider_sl04);

    var interval_sl04;

    function startSlider_sl04() {
        interval_sl04 = setInterval(function() {
            $slideContainer_sl04.animate({'margin-left': '-='+width_sl04}, animationSpeed_sl04, function() {
                if (++currentSlide_sl04 === $slides_sl04.length) {
                    currentSlide_sl04 = 1;
                    $slideContainer_sl04.css('margin-left', 0);
                }
            });
        }, pause_sl04);
    }
    function pauseSlider_sl04() {
        clearInterval(interval_sl04);
    }

    $slideContainer_sl04
        .on('mouseenter', pauseSlider_sl04)
        .on('mouseleave', startSlider_sl04 );

    startSlider_sl04();
})

$(function(){
        //settings for slider
    var width_sl05 = 282;
    var animationSpeed_sl05 = 1000;
    var pause_sl05 = 3000;
    var currentSlide_sl05 = 1;

    //cache DOM elements
    var $slider_sl05 = $('.slider05');
    var $slideContainer_sl05 = $('.slides', $slider_sl05);
    var $slides_sl05  = $('.slide', $slider_sl05);

    var interval_sl05;

    function startSlider_sl05() {
        interval_sl05 = setInterval(function() {
            $slideContainer_sl05.animate({'margin-left': '-='+width_sl05}, animationSpeed_sl05, function() {
                if (++currentSlide_sl05 === $slides_sl05.length) {
                    currentSlide_sl05 = 1;
                    $slideContainer_sl05.css('margin-left', 0);
                }
            });
        }, pause_sl05);
    }
    function pauseSlider_sl05() {
        clearInterval(interval_sl05);
    }

    $slideContainer_sl05
        .on('mouseenter', pauseSlider_sl05)
        .on('mouseleave', startSlider_sl05 );

    startSlider_sl05();
})