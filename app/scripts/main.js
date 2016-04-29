'use strict';
/*eslint-disable new-cap, no-unused-vars, 
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native*/
/*global  $, TweenMax, Waypoint */
$(function(){
	if($('body.home').length){
		var ul = $('<ul></ul>');
		$('#coverflow >*').each(function(){
			var li = $('<li><a href=\'javascript:\'></a></li>');
			li.on('click', function(){
				// console.log($(this).index())
				$('#coverflow').coverflow('index', $(this).index());
			});
			li.appendTo(ul);
		});
		ul.insertAfter($('#coverflow'));
		$('#coverflow').coverflow({
			index: 3, 
			// innerAngle: 75,

			change: function(container, element, index){
				$('li', ul).eq(index).addClass('active').siblings().removeAttr('class');
			}
		});

		$('.waypoint').each(function(i,d){
			var a = $(document.createElement('a'));
			var waypoint = new Waypoint({
				element: d,
				handler: function(direction) {
					// console.log(direction);
					a.addClass('active');
					a.siblings().removeClass('active');
				}
			});
			a.on('click', function(){
				var direction = $(window).scrollTop() < $(d).offset().top;
				var top = $(d).offset().top;
				if(($(d).offset().top) < 10){
					top = 0;
				}
				TweenMax.to('html, body', 0.5, {
					scrollTop: top + direction * 1
				});
			});
			$('#waypoints').append(a);
		});
		$(window).on('resize scroll', function(){
			if($(window).width() > 768){
				$.parallaxify();
			}else{
				$.parallaxify('destroy');
			}
		});

		$('.menu').on('click', function(){
			if($('body').hasClass('menuon')){
				$('body').removeClass('menuon');
			}else{
				$('body').addClass('menuon');
			}
		});
	}

});
