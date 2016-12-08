
function detail(){
	
	//选择放大的中图
	
	$(".pic-list .pic-items ul  li").stop().mouseenter(function(index){
	
		
		var  i= $(this).index()+1;
//		 console.log(i);
		$(".zoom-jpg").children("img").attr("src","../img/detail/middle_"+i+".jpg")
	   
	   //选择放大的图片
		
		$(".zoom-jpg").children("img").attr("jqimg","../img/detail/original_"+i+".jpg")
		
	}).stop().mouseleave(function(){
		
		
	})
	

	
	//放大镜
	
	$(".zoom-jpg").jqueryzoom({
		  xzoom: 500,//放大区域宽度
		  yzoom: 400,//放大区域高度
		  preload: 1,//是否显示预加载
		  offset:10,//放大区域偏离小图的距离
		  position: "right",//放大区域显示的位置（left,right）
		  lens:true //是否显示小图上的透明区域
	  });
	
	
	
}
