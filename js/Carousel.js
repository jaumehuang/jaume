function Carousel(){
	
	$('#myCarousel').carousel({
	   interval: 3000
	   
     })
	  
	   // 初始化轮播
		$(".start-slide").carousel('cycle');
		
		//当鼠标移入图片时的情况
		
		$("#myCarousel .carousel-inner").find('img').each(function(){
			$(this).stop().mouseenter(function(){
			 
		     clearInterval(time);
			
		}).stop().mouseleave(function(){
			
			 time=setInterval(nav,3000);
		})
		})
		
//		//当鼠标移入图片时的情况
//		$("#myCarousel  ").stop().mouseenter(function(){
//			console.log("111")
//			clearInterval(time);
//			
//		}),stop().mouseleave(function(){
//			
//		   time=setInterval(nav,3000);
//		})
		
		//下标导航
		var i=0;
		$("#myCarousel .nav-list li").eq(0).css("background","#D78105").siblings().css("background","#808080");
		var time=setInterval(nav,3000);
		
		function nav(){
			 i++;
			 if(i>=8){
			 	i=0;
			 	$("#myCarousel .nav-list li").eq(0).css("background","#D78105").siblings().css("background","#808080");
			 }
			
			$("#myCarousel .nav-list li").eq(i).css("background","#D78105").siblings().css("background","#808080");
			 
			 
			
		}
		
		//点击导航‘
		
	   $("#myCarousel .nav-list li").mousedown(function(){
	   	  
	   	  clearInterval(time);
	   	 
	   	  $(this).css("background","#D78105").siblings().css("background","#808080");
	   
	   }).mouseup(function(){
	   	
	   	    i=$(this).text()-1;
	   	    time=setInterval(nav,3000);
	   	    
	   	   
	   })
		
		
	
	  
//	  	// 初始化轮播
//		$(".start-slide").click(function(){
//			$("#myCarousel").carousel('cycle');
//		});
//		// 停止轮播
//		$(".pause-slide").click(function(){
//			$("#myCarousel").carousel('pause');
//		});
//		// 循环轮播到上一个项目
//		$(".prev-slide").click(function(){
//			$("#myCarousel").carousel('prev');
//		});
//		// 循环轮播到下一个项目
//		$(".next-slide").click(function(){
//			$("#myCarousel").carousel('next');
//		});
//		// 循环轮播到某个特定的帧 
//		$(".slide-one").click(function(){
//			$("#myCarousel").carousel(0);
//		});
//		$(".slide-two").click(function(){
//			$("#myCarousel").carousel(1);
//		});
//		$(".slide-three").click(function(){
//			$("#myCarousel").carousel(2);
//		});
//	
	
}
