var TopMenu = {
    
	leftMove: function() {
          console.log("dfdfd")
		$(".outlst").css({
			background: "#fff"
		})
		var html = ''
		html += "<h3>请选择你的收货城市:</h3>";
		html += "<ul class='top1'><li>北京</li><li>上海</li><li>广州</li><li>深圳</li><li>天津</li><li>苏州</li><li>杭州</li><li>南京</li><li>青岛</li><li>无锡</li><li>武汉</li></ul>";
		html += "<span class='MoreCtiy'>选择更多城市:</span>";
		html += "<ul class='top2'><li class='one'>华东：</li><li>上海</li><li>浙江</li><li>江苏</li><li>安徽</li></ul>"
		html += "<ul class='top2'><li class='one'>华南：</span><li>广东</li><li>福建</li><li>海南</li><li>广西</li></ul>"
		html += "<ul class='top2'><li class='one'>华北：</li><li>北京</li><li>天津</li><li>河北</li><li>山东</li><li>山西</li><li>内蒙古</li></ul>"
		html += "<ul class='top2'><li class='one'>华中：</li><li>湖北</li><li>江西</li><li>湖南</li><li>河南</li></ul>";
		html += "<ul class='top2'><li class='one'>东北：</li><li>黑龙江</li><li>辽宁</li><li>吉林</li></ul>";
		html += "<ul class='top2'><li class='one'>西南：</li><li>重庆</li><li>四川</li><li>云南</li><li>贵州</li><li>西藏</li></ul>"
		html += "<ul class='top2'><li class='one'>西北：</li><li>陕西</li><li>甘肃</li><li>宁夏</li><li>青海</li><li>新疆</li></ul>";
        
		$(".outlst").append(html);
		
		$(".last").stop().mouseenter(function(){
         $(this).css("background","#fff").find(".outlst").show();
		}).stop().mouseleave(function(){
			  $(this).css("background","#F7F7F7").find(".outlst").hide()
		});
//		
		//鼠标在表单上
        $(".outlst").stop().mouseenter(function(){
        	console.log("sdsd")
        	$(this).show()
        }).stop().mouseleave(function(){
        	$(this).hide();
        }).find("li").not(".one").css("cursor","pointer").click(function(){
        	  $(".city_title").text($(this).text());
        	  $(".outlst").hide();
        });
        
   
	},
  

   
}