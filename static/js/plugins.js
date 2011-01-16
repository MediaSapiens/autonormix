
(function($){

	   $.fn.transictionto = function(options) {
	      var settings = $.extend({
	   }, options || {});
	   //wrap into div if no div is present.
	   $(this).each(function() {
	/*	
	      if ($(this).parent('div').size() == 0) {
	         $(this).wrap('<div></div>')
	      }
	*/
	      //now swap with background trick
			////.parent()
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
	        effect:'random', //Specify sets like: 'fold,fade,sliceDown'
	        slices:15,
	        animSpeed:1000, //Slide transition speed
	        pauseTime:15000,
	        startSlide:0, //Set starting Slide (0 index)
	        directionNav:true, //Next & Prev
	        directionNavHide:true, //Only show on hover
	        controlNav:false, //1,2,3...
	        controlNavThumbs:false, //Use thumbnails for Control Nav
	        controlNavThumbsFromRel:false, //Use image rel for thumbs
	        controlNavThumbsSearch: '.jpg', //Replace this with...
	        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
	        keyboardNav:false, //Use left & right arrows
	        pauseOnHover:true, //Stop animation while hovering
	        manualAdvance:false, //Force manual transitions
	        captionOpacity:0.8, //Universal caption opacity
	        beforeChange: function(){
				//console.log($(slelems[actIndex]).attr('rel'));

			},
	        afterChange: function(){
				//console.log($(this).attr('style'));
				//console.log(el2);
				//console.log(this);
				//console.log($(this));
				//console.log($('#slider').data('nivo:vars'));
				//.stop();
				//actIndex += 1;
				//console.log(slelems);
				$(contentBody).css({'background-image': 'url(' + $(slelems[actIndex]).attr('rel') + ')'});
				//$(contentBody).transictionto({ destinationImage: $(slelems[actIndex]).attr('rel')  });
				actIndex += 1;				
			},
	        slideshowEnd: function(){
				//$('#slider').data('nivoslider').stop();
				//actIndex = 0;
			}, //Triggers after all slides have been shown
	        lastSlide: function(){actIndex=0;}, //Triggers when last slide is shown
	        afterLoad: function(){actIndex = 1;} //Triggers when slider has loaded
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


