(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
    $(document).ready(function (){
	    $('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');
				_d.addClass('show');
				setTimeout(function(){
					_d[_d.is(':hover')?'addClass':'removeClass']('show');
					if ($(_d).hasClass("show")) {
						$(".search").css({'z-index':'-1'});
					}
					else {
						$(".search").css({'z-index':'0'});
					}
				},1);

				
			}
	    });	
    });


	//Switch light/dark
	
	$(document).on('click', '#switch', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});

	$(document).ready(function (){
	    $('body').on('mouseenter mouseleave','.dropdown-submenu',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.dropdown-submenu');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	    });	
    });
	
  })(jQuery); 

  $(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});