function shoppingcar(){
 
 
	$(".bt").children("li").stop().mouseenter(function(){
		
		 $(this).find(".btncar").slideDown(500);
	}).stop().mouseleave(function(){
		$(this).find(".btncar").slideUp(500);
	})
	
	
}
