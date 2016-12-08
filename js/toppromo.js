
//延时2s关闭
function toppromo() {

	setTimeout(function() {

		$(".banner").animate({
			top: -368
		}, 2000,function(){
			$(".banner").next(".close").show()
		    }).next(".close").hide();
       $(".guolv").animate(
       	  {
       	  	height:82
       	  }
       ,2000)
	}, 2000)
   //点击按钮关闭广告窗
   
   $(".banner").next(".close").click(function(){
   	   $(".banner").next(".close").hide();
   	   $(".banner").animate({
   	   	  height:0
   	   },1000).children("a").animate({
   	   	 height:0
   	   },1000)
       $(".guolv").animate(
       	  {
       	  	height:0
       	  }
       ,500)
   })
  
}
