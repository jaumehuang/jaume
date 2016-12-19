function float(){
	
//	$(".float")
	
	//滚动条
	
	$(document).scroll(function(){
		
		 $(document).scrollTop();
			if($(window).scrollTop()>600){
		      $("#float_right .float #top").css("display","block")
		
	       }else{	
	        	 $("#float_right .float #top").css("display","none");
	     
	        }
	})

	 $("#float_right .float #top").click(function(){
	
	 	$(window).scrollTop(0);
	 
	 }).stop().mouseenter(function(){
	 	
	 	 $(this).css({"background":"gray",
	 	              "opacity":0.3,
	 	              "color":"#fff"}).text("回到顶部");
	 }).stop().mouseleave(function(){
	 
	 	 $(this).css({"background":"url(../img/float/productList.png) no-repeat 0 -82px",
	 	                 
	 	             "opacity":1
	 	 }).text("")
	 
	 })

	 $("#float_right ").css("z-index",9000)

}
