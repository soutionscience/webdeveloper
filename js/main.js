
jQuery(document).ready(function( $ ) {


	 //for preloader
	 (function () {
	    $(window).load(function() {
	        $('#preloader-item').fadeOut();
	        $('#preloader').delay(350).fadeOut('slow');
	    });
	}());
	
	
	 //for animated
	 new WOW().init();
	 $(document).ready(function(){
			 var btt= $('.scrollup');  
				btt.on('click',function (){
				   $('html,body').animate({
					  scrollTop:0
				   },500);
				});
			 
			 $(window).on('scroll',function(){
				 var self = $(this),
					 height = self.height(),
					 top = self.scrollTop();
					 
					 if(top > 200){
						if(!btt.is(':visible')){
							btt.fadeIn();
						}
					 }else{
						btt.fadeOut();
					 }
			 }); 

		   });
		}); 
