$('.nav-tabs-dropdown').each(function (i, elm) {

    $(elm).text($(elm).next('ul').find('li.active a').text());

});

$('.nav-tabs-dropdown').on('click', function (e) {

    e.preventDefault();

    $(e.target).toggleClass('open').next('ul').slideToggle();

});

$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function (e) {

    e.preventDefault();

    $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());

});


//(function($){
//	$(document).ready(function(){
//		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
//			event.preventDefault(); 
//			event.stopPropagation(); 
//			$(this).parent().siblings().removeClass('open');
//			$(this).parent().toggleClass('open');
//		});
//	});
//})(jQuery);