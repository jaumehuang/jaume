function flying(){
	
	$(".btncar").click(function(event){
		event.preventDefault()
		 var addcar = $(this);
		 flyGood(event,addcar);
		 console.log(event.clientY+"wu1")
	});
	
	$(".rushBuy").click(function(event){
		event.preventDefault()
		 var addcar = $(this);
		 flyGood(event,addcar);
		console.log(event.clientY+"wu2")
	});
   
   $(".pBtn").click(function(event){
		event.preventDefault()
		 var addcar = $(".jqzoom");
			var offset = $("#float_right").offset();
		var img = addcar.find("img").attr('src');
		var flyer = $('<img class="u-flyer " src="'+img+'">');
		//判断飞入的距离
		flyer.fly({
			start: {
				left: event.clientX,
				top: event.clientY,
			  
			},
			end: {
				left: $("#float_right").offset().left+0,
				top: $("#float_right").offset().top-20,
				width: 0,
				height: 0,
			
			},
			onEnd: function(){
				this.destory();
			}
		});
		
	});
    
    //列表添加进入购物车
   
    $("#p-list .list_all ").on("click",".p-btn",function(event){
    	 event.preventDefault()
    	var  addcar = $(this).parentsUntil("li").find("img");
    	var offset = $("#float_right").offset();
		var img = addcar.attr('src');
		var flyer = $('<img class="u-flyer " src="'+img+'">');
		//判断飞入的距离
		flyer.fly({
			start: {
				left: event.clientX,
				top: event.clientY,
			  
			},
			end: {
				left: $("#float_right").offset().left+10,
				top: $("#float_right").offset().top-300,
				width: 0,
				height: 0,
			
			},
			onEnd: function(){
				this.destory();
			}
		});
		
    	
    	
    	
    	
    })


	//商品飞入购物车
	function flyGood(event,addcar){
		var offset = $("#float_right").offset();
		var img = addcar.parent('li').find("img").attr('src');
		var flyer = $('<img class="u-flyer " src="'+img+'">');
		//判断飞入的距离
		flyer.fly({
			start: {
				left: event.clientX,
				top: event.clientY,
			  
			},
			end: {
				left: $("#float_right").offset().left+400,
				top: $("#float_right").offset().top,
				width: 0,
				height: 0,
			
			},
			onEnd: function(){
				this.destory();
			}
		});
		
	}

}
