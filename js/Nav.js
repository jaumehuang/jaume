var Nav = {
	
	sort :function(){
		console.log($("#sort"))
		$(".book_sort").children("div").stop().mouseenter(function(){
			$(this).css({"background":"#FFFFFF"}).children("h3").css("color","#76ac25");
			$(this).find("a").css("color","#76AC25");
			$(this).find("p").show()
			$(this).parent(".book_sort").siblings(".categories_hover #list").show()
		}).stop().mouseleave(function(){
		    $(this).css("background","#76ac25");
		    $(this).find("a").css("color","#DDEAC8");
		    $(this).children("h3").css("color","#DDEAC8");
		    $(this).find("p").show();
		    $(this).parent(".book_sort").siblings(".categories_hover #list").hide()
		    
		})
		
		$(".categories_hover #list").stop().mouseenter(function(){
		    	 $(this).show()
		    }).stop().mouseleave(function(){
		    	
		    	$(this).hide()
		    	
		    })
		   
		  $(".categories_hover #list li" ).click(function(){
		      console.log($(this ));
		  	 $(this).parent( "#list").hide()
		  	
		  })
		  
		  //显示隐藏列表
		
		  $(".categories_hover > .dt").stop().mouseenter(function(){
		  	
		  	  $(this).siblings(".allSort").show()
		  	
		  }).stop().mouseleave(function(){
		  	
		  	 $(this).siblings(".allSort").hide()
		  	
		  })
		  
		  $(".allSort").stop().mouseenter(function(){
		  	  $(this).show();
		  	
		  }).stop().mouseleave(function(){
		  	
		  	$(this).hide()
		  })
		    
//		 if($("div"){
//		 	
//		 	
//		 	
//		 }
	}
	
}
