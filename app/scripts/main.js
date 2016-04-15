// console.log('\'Allo \'Allo!');
$(function(){
	$.parallaxify();
	$('#coverflow').coverflow({index: 3, change: function(){
	}});
	var ul = $('<ul></ul>')
	$('#coverflow >*').each(function(){
		var li = $('<li><a href=\'javascript:\'></a></li>');
		li.appendTo(ul);
	})
	ul.insertAfter($('#coverflow'));

});
