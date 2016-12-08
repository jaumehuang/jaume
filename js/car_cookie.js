function car(){

	//存储商品的信息
	var goodimg="Goodimg"
	var goodtitle="Goodtitle";//记录商品详情
	var goodprice="Goodprice";//记录商品价格
	var goodnumber="Goodnumber";//记录商品数量
	
//	//存储从cookie中取下来的数据
	var    goodimg_arr=[];   
	var    gooodtitle_arr=[];
	var    goodprice_arr=[] ; 
	var    goodnumber_arr=[];   
	
	
 //先读取cookie 中的商品信息判断是否有
//		
	     var  goodimg_str=$.cookie(goodimg);
	     var  gooodtitle_str=$.cookie(goodtitle);
	     var  goodprice_str=$.cookie(goodprice);
	     var  goodnumber_str=$.cookie(goodnumber);
		
	   if(goodimg_str){
		 console.log("sdsds");
		 goodimg_arr=goodimg_str.split("&");
		 gooodtitle_arr= gooodtitle_str.split("&");
		 goodprice_arr=goodprice_str.split("&");
	  	 goodnumber_arr=goodnumber_str.split("&");
	  }
	
	 
	//添加入购物车
	
	
	function good(){
		
		 var obj="";
		  for(var i=0;i< goodimg_arr.length;i++){
		  obj+="<tr><td class='input'><input type='checkbox'/></td>";
		  obj+="<td><div class='cart_pimg'><a href='#'>"+"<img src="+goodimg_arr[i]+"></a></div>";
		  obj+="<div class='cart_pname'><a href='#'>"+gooodtitle_arr[i]+"</a></div></td><td>"
	      obj+="<strong>¥"+goodprice_arr[i]+"</strong></td><td class='kk'></td><td><span class='rediuce'>-</span><input type='text' value='1' class='num'/>"
	      obj+="<span class='add'>+</span></td><td><div class='weight'>2kg</div></td><td><div class='total_price'>";
	      obj+="¥<span id='total_price'>178</span></td></div><td class='p_1'>现货</td><td class='p_2'>收藏</td><td class='p_3'>删除</td></tr>"
	     }
	    return obj;
	}
	
	   $(good()).appendTo("table");
	   var n=$.cookie("n");
	   
	   //刷新计数
	   
	   var timer=setInterval(function(){
	   	   
	   	    
	   	   
	   	  $("#shoppingcar").find("b").text(n)
	   	
	   },10)
	   
	 
	   
	   //设计一个记录当前商品的数量
	   
	   var num="num";
	   
	   var  num_str=$.cookie(num);
	   
	   var numarr=[];
	   
	   //判断是否有商品数量
	   
//	   if(num){
//	   	  
//	   	  numarr=num_str.split("&");
//	   	  
//	   	  
//	   }
	   
	  
	   
	   
	   
	   //增加商品
	   var i=1;
	   $(".add").click(function(){
	   	   i++;
	   	  $(this).siblings(".num").val(i)
	   	
	   	
	   })
	  
	  //减少商品
	  
	  $(".rediuce").click(function(){
	  	  i--
	  	  if(i<=0){
	  	  	i=1;
	  	  }
	  	  
	  	  $(this).siblings(".num").val(i);
	  	
	  })
	  
	  //存储商品的数量
	  
	  $.cookie("num", $(".num").val(),{ expires: 3, path: '/' });
	  
	  var value=$.cookie("num");
	  
	  
	  $(".num").val(value);
	  
	  //删除购物车
	  
	  		
				 function deleteGoods(index){
				 	
                   	 goodimg_arr.splice(index,1); 
					 gooodtitle_arr.splice(index,1);
					 goodprice_arr.splice(index,1);
					
					
					//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
					//把数据类型转化为str;
					 var goodimg_str= goodimg_arr.join("&");
		  
		             var title_str= gooodtitle_arr.join("&");
		             var price_str=goodprice_arr.join("&");
					
				
					
					//cookie的数据准备好了，接下来就是更新cookie里的数据
					 //更新cookie中的数据
		             $.removeCookie(goodimg);
		             $.removeCookie(goodtitle);
		             $.removeCookie(goodprice);
					
					//存储到cookie
		    
				     $.cookie(goodimg,goodimg_str, { expires: 3, path: '/' });
				     
				     $.cookie(goodtitle,title_str, { expires: 3, path: '/' });
				     
				     $.cookie(goodprice,price_str, { expires: 3, path: '/' });
					
                }
                
	  $("table").find("td").click(function(){
	  	   
	  	   console.log($(this))
	  	   var index=$(this).parent("tr").index()
	  	   
	  	   deleteGoods(index);
	  	   
	  	   $(this).parent("tr").remove();
	  	   
	  	
	  })
	  
	  
	
}
