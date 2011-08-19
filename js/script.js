(function($){
	   $.fn.transictionto = function(options) {
	      var settings = $.extend({
	   }, options || {});
	   $(this).each(function() {
	      $(this)
		     .css('background-image', 'url(' + settings.destinationImage + ')')
	         .css('background-repeat', 'no-repeat')
	      .end()
	      .fadeOut(1000, function() {
	         this.src = settings.destinationImage;
	         $(this).show('slow');
	      });
	   });
	}; 

	var slider_u = $('#slider');
	var slelems = $('.slel',slider_u);
	var actIndex = 0;
	var contentBody = $('#content');
	$(window).load(function() {
	    $(slider_u).nivoSlider({
	        effect:'fade',
	        slices:15,
	        animSpeed:1000,
	        pauseTime:15000,
	        startSlide:0,
	        directionNav:true,
	        directionNavHide:true, 
	        controlNav:false, 
	        controlNavThumbs:false, 
	        controlNavThumbsFromRel:false, 
	        controlNavThumbsSearch: '.jpg', 
	        controlNavThumbsReplace: '_thumb.jpg',
	        keyboardNav:false,
	        pauseOnHover:true, 
	        manualAdvance:false, 
	        captionOpacity:0.8, 
	        beforeChange: function(){},
	        afterChange: function(){
				$(contentBody).css({'background-image': 'url(' + $(slelems[actIndex]).attr('rel') + ')'});
			actIndex += 1;				
			},
	        slideshowEnd: function(){},
	        lastSlide: function(){actIndex=0;},
	        afterLoad: function(){actIndex = 1;} 
	    });
	});
})(this.jQuery);
window.log = function(){
  log.history = log.history || [];   
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);
$(document).ready(function() {
$("a#map").fancybox({
		 'autoScale' : true,
		 //'transitionIn' : 'none',
		 //'transitionOut' : 'none',
		 'type' : 'iframe'
		});
$(".servddesc a").click(function(){
speed = 1100;
offset = 20;
anchor = $(this).attr("href");
destination = $(anchor).offset().top;
$parent = ($.browser.safari) ? $("body") : $("html");
$parent.animate({scrollTop:destination-offset},speed);
return false;
});

});