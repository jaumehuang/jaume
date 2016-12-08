function list(){
	
	var i=1;
	$(".cm >.catitem >h3> b").click(function(){
		 var self=this;
		 i++;
		 if(i>=3){
		 	i=1;
		 	$(this).css("background","url(../img/list/productList.png)  no-repeat") 
		 	.parent("h3").siblings("ul").slideUp(400);
		 	 $(".left-box").animate({
	  	      height:180
	          },500);
		 }
		if(i==2){
			$(this).css("background","url(../img/list/productList.png) -14px 0 no-repeat")
		    .parent("h3").siblings("ul").slideDown(400);
		     $(".left-box").animate({
	  	      height:330
	          },500);
			
		}else{
				$(this).css("background","url(../img/list/productList.png)  no-repeat")
				.parent("h3").siblings("ul").slideUp(400);
		}
		
//		$(this).css("background","url(../img/list/productList.png) -14px 0 no-repeat")
//		.parent("h3").siblings("ul").slideDown(800).siblings();
//		
		
		
	})
	
	 if(i>=3){
		 	i=1;
		 	$(this).css("background","url(../img/list/productList.png)  no-repeat") 
		 	.parent("h3").siblings("ul").slideUp(400);;
		 }
	 var j=1
	$(".r-select #attr_a  .attr_value .show .know b").click(function(){
		j++;
		if(j>=3){
			
			j=1;
			$(this).css("background","url(../img/list/productList.png) no-repeat -9px -14px");
			$(this).siblings("span").text("更多");
			$(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideUp(400);
	        $("#attr_a").animate({
	  	    height:50
	        },500);
			//-9px -14px
		}
		
		if(j==2){
			$(this).css("background","url(../img/list/productList.png) no-repeat 0 -14px");
			$(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideDown(400);
			$(this).siblings("span").text("收起");
	          $("#attr_a").animate({
	  	    height:130
	        },500);
			
		}else{   
			     $(this).css("background","url(../img/list/productList.png) no-repeat -9px -14px")
			     $(this).siblings("span").text("更多");
				 $(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideUp(400);
	             
		}
		
		
		//底部轮播图
		
	
		
	})
	
	 var k=0;

    var  time =setInterval(move,3000);
	//设计移动函数
	
//	 var width=($(".fl-pic >ul > li").css("width"))*($(".fl-pic> ul> li").length);
//	 $(".fl-pic ul").css("with",width+"px")
	 var $li= $(".fl-pic >ul >li").clone()
	 
	 $(".fl-pic ul").append($li);
	  
	
	function move(){
		 k++;
		 console.log(k)
		
		//判断张数 
	 	
		
		 $(".fl-pic ul").animate({
			
			left:-1000*k
			
		},2000,function(){
			next()
		})

	}
	
	function next(){
		
		if(k>=$(".fl-pic> ul> li").length/2){
		        k=0;
				$(".fl-pic>ul").css({
					left:0
				})
	    }
	}
	
	$(".left-arrow s").click(function(){
		
		if(k==0){
			//瞬间回到第四张图
			$(".fl-pic>ul").css({
			 left:-1000*($(".fl-pic> ul> li").length/2)
		   })
			
		}else{
		   	 k=k-2;
		  }
		
		  move();
	
	})
	
	$(".right-arrow >s").click(function(){
		next();
		move();
		
	})
	
	//鼠标移入时的判断
	 $(".fl-pic").stop().mouseenter(function(){
	 	
	 	clearInterval(time)
	 }).stop().mouseleave(function(){
	 	time=setInterval(move,3000);
	 })
	 
	 
//	 var page = function(_pageindex, _isgenerate){
//				$.get('data/index.txt', {'_': Math.random(), page: _pageindex}, function(response){
//					var obj = JSON.parse(response);
//					var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
//					var pageFlag = '';
//					if(!_isgenerate){
//						return false;
//					}
//					for(var i = 1; i <= pageCount; i++){
//						pageFlag += ('<span>' + i + '</span>');
//					}
//					$(pageFlag).appendTo('#pageing');
//				})
//			}
//			page(1, true);
//			$('#pageing').on('click', function(evt){
//				page($(evt.target).text());
//			}) 

	 //ajax
	    function page(index){
	    	
	    	 $.get("../json/list.json?pageNo=1",function(obj){
		 	
		 	    console.log(obj.data.length)
		 		 
		 		 var dataList=obj.data;
		 		 
		 		 var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
		 		 
		 		 var num=obj.pageSize;
		 		 
		 	     if(!obj){
		 	     	
		 	     	return false;
		 	     }
		 		   
		 		    $(".list_all").html('');
		 		    
		 		    var pageFlag = '';
                     
                     //每个页面显示两个
                     if(index-1==0){
                     	
                     	for(var i = index-1; i <8; i++){	
	                    console.log(obj.data[i].url)
						pageFlag +="<li><div class='list_all_a'>";
					    pageFlag +="<div class='pic'>"+"<a href='#'>"+"<img src="+obj.data[i].url+"></a></div>";//记录图片
		 			    pageFlag +="<div class='price'><span><b>￥</b><strong>"+obj.data[i].price+"</strong></span></div>";//记录价格
		 			    pageFlag +="<div class='title-c'><a href='#'>"+obj.data[i].title+"</a></div>";//记录主题
		 			    pageFlag +="<div class='comment'><a href='#'>"+obj.data[i].comment+"</a><div class='owner_shop_list'>自营</div></div>";
		 			    pageFlag +="<div class='action'><div class='p-num'><span class='p-num_1'><input type='text' value='1'/></span>";
		 			    pageFlag +="<span class='p-num_2'><a href='#' class='p-add'>+</a><a href='#' class='p-reduce'>-</a></span></div>";
		 			    pageFlag +="<div class='mycar'><div class='p-btn'><a href='#'>加入购物车</a></div></div></div></div></li>" ;
		 		
		 		       }
                     	
                     }else if(index-1==1){
                     	
                     	 for(var i = 8; i <16; i++){	
	                    console.log(obj.data[i].url)
						pageFlag +="<li><div class='list_all_a'>";
					    pageFlag +="<div class='pic'>"+"<a href='detail.html'>"+"<img src="+obj.data[i].url+"></a></div>";//记录图片
		 			    pageFlag +="<div class='price'><span><b>￥</b><strong>"+obj.data[i].price+"</strong></span></div>";//记录价格
		 			    pageFlag +="<div class='title-c'><a href='#'>"+obj.data[i].title+"</a></div>";//记录主题
		 			    pageFlag +="<div class='comment'><a href='#'>"+obj.data[i].comment+"</a><div class='owner_shop_list'>自营</div></div>";
		 			    pageFlag +="<div class='action'><div class='p-num'><span class='p-num_1'><input type='text' value='1'/></span>";
		 			    pageFlag +="<span class='p-num_2'><a href='#' class='p-add'>+</a><a href='#' class='p-reduce'>-</a></span></div>";
		 			    pageFlag +="<div class='mycar'><div class='p-btn'><a href='#'>加入购物车</a></div></div></div></div></li>" ;
		 		
		 		  }
                     	
                     }else if(index-1==2){
                     	
                     	 for(var i = 16; i <=21; i++){	
	                    console.log(obj.data[i].url)
						pageFlag +="<li><div class='list_all_a'>";
					    pageFlag +="<div class='pic'>"+"<a href='#'>"+"<img src="+obj.data[i].url+"></a></div>";//记录图片
		 			    pageFlag +="<div class='price'><span><b>￥</b><strong>"+obj.data[i].price+"</strong></span></div>";//记录价格
		 			    pageFlag +="<div class='title-c'><a href='#'>"+obj.data[i].title+"</a></div>";//记录主题
		 			    pageFlag +="<div class='comment'><a href='#'>"+obj.data[i].comment+"</a><div class='owner_shop_list'>自营</div></div>";
		 			    pageFlag +="<div class='action'><div class='p-num'><span class='p-num_1'><input type='text' value='1'/></span>";
		 			    pageFlag +="<span class='p-num_2'><a href='#' class='p-add'>+</a><a href='#' class='p-reduce'>-</a></span></div>";
		 			    pageFlag +="<div class='mycar'><div class='p-btn'><a href='#'>加入购物车</a></div></div></div></div></li>" ;
		 		
		 		  }
                     	
                     }
                     
		 			
		 			 $(".list_all").html(pageFlag);		
            })
	    	
	    }
	 	  
	 
	 page(1)
	 
	 $("#pages ul li").click(function(evt){
	 	 evt.preventDefault()
	 	 console.log($(evt.target).text())
	 	 page($(evt.target).text());
	 	 $(this).css("background","green").siblings().css("background","#fff")
	 	
	 
	   })
}
