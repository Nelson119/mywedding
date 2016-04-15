'use strict';
/*eslint-disable new-cap, no-unused-vars, 
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native*/
/*global  $ */
$(function(){
	$.parallaxify();
	$('#coverflow').coverflow({index: 3, change: function(){
	}});
	var ul = $('<ul></ul>');
	$('#coverflow >*').each(function(){
		var li = $('<li><a href=\'javascript:\'></a></li>');
		li.appendTo(ul);
	});
	ul.insertAfter($('#coverflow'));

});
