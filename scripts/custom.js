$(window).on('load',function() { 
	//Preloaders
	setTimeout(function(){$("#page-preloader").addClass('hide-preloader');},250);// will fade out the white DIV that covers the website.
});

$(document).ready(function(){      
    'use strict'	
	function init_template(){

		$('.home-slider').owlCarousel({
			items:1,
			autoplay:2000,
			lazyLoad:true,
			loop:true,
			margin:10,
			dots:false
		});
		
		baguetteBox.run('.gallery', {});	

		
		$('.preload-image').lazyload();

		$('.show-navigation').on('click',function(){
			  $($('.navigation a')).each(function(i) {
				var $li = $(this);
				setTimeout(function() {
				  $li.toggleClass('visible-menu');
				}, i*100); // delay 100 ms
			  });	
			return false;
		});	

		$('.navigation a').append('<i class="fa fa-angle-right"></i>');

		$('.close-navigation').on('click',function(){
			  $($('.navigation a').get().reverse()).each(function(i) {
				var $li = $(this);
				setTimeout(function() {
				  $li.removeClass('visible-menu');
				}, i*100); // delay 100 ms
			  });	
			return false;
		});
		
		$('.hide-notification').on('click',function(){
			$(this).parent().slideUp(250);
			return false;
		});
		
        //Contact Form
        var formSubmitted = "false";
        jQuery(document).ready(function(e) {
            function t(t, n) {
                formSubmitted = "true";
                var r = e("#" + t).serialize();
                e.post(e("#" + t).attr("action"), r, function(n) {
                    e("#" + t).hide();
                    e("#formSuccessMessageWrap").fadeIn(500)
                })
            }

            function n(n, r) {
                e(".formValidationError").hide();
                e(".fieldHasError").removeClass("fieldHasError");
                e("#" + n + " .requiredField").each(function(i) {
                    if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) {
                        e(this).val(e(this).attr("data-dummy"));
                        e(this).focus();
                        e(this).addClass("fieldHasError");
                        e("#" + e(this).attr("id") + "Error").fadeIn(300);
                        return false
                    }
                    if (e(this).hasClass("requiredEmailField")) {
                        var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        var o = "#" + e(this).attr("id");
                        if (!s.test(e(o).val())) {
                            e(o).focus();
                            e(o).addClass("fieldHasError");
                            e(o + "Error2").fadeIn(300);
                            return false
                        }
                    }
                    if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) {
                        t(n, r)
                    }
                })
            }
            e("#formSuccessMessageWrap").hide(0);
            e(".formValidationError").fadeOut(0);
            e('input[type="text"], input[type="password"], textarea').focus(function() {
                if (e(this).val() == e(this).attr("data-dummy")) {
                    e(this).val("")
                }
            });
            e("input, textarea").blur(function() {
                if (e(this).val() == "") {
                    e(this).val(e(this).attr("data-dummy"))
                }
            });
            e("#contactSubmitButton").click(function() {
                n(e(this).attr("data-formId"));
                return false
            })
        })

		
	}    
	setTimeout(init_template, 0);
	
    $(function(){
		'use strict';
		var options = {
			prefetch: true,
			prefetchOn: 'mouseover',
			cacheLength: 100,
			scroll: true, 
			blacklist: '.default-link' && '.show-gallery',
			forms: 'contactForm',
			onStart: {
				duration:350, // Duration of our animation
				render: function ($container) {
				$container.addClass('is-exiting');// Add your CSS animation reversing class
				$("#page-preloader").removeClass('hide-preloader');
			}
        },
        onReady: {
			duration: 50,
			render: function ($container, $newContent) {
				$container.removeClass('is-exiting');// Remove your CSS animation reversing class
				$container.html($newContent);// Inject the new content
				$("#page-preloader").addClass('hide-preloader');
			}
		},
        onAfter: function($container, $newContent) {
            setTimeout(init_template, 0)//Timeout required to properly initiate all JS Functions. 
			$("#page-preloader").addClass('hide-preloader');

        }
      };
      var smoothState = $('#page-transitions').smoothState(options).data('smoothState');
    });      
});