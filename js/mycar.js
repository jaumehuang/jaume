
//添加购物车

function mycar(){
	
	//存储商品的信息
	var goodimg="Goodimg"
	var goodtitle="Goodtitle";//记录商品详情
	var goodprice="Goodprice";//记录商品价格
	var goodnumber="Goodnumber";//记录商品数量
	
	//存储从cookie中取下来的数据
	var    goodimg_arr=[];   
	var    gooodtitle_arr=[];
	var    goodprice_arr=[] ; 
	var    goodnumber_arr=[];   
	

	//保存商品信息在数组中
	
	function savegood(goodimgX,goodtitleX,goodpriceX,goodnumberX){
		     goodimg_arr.push(goodimgX);
		     gooodtitle_arr.push(goodtitleX);
		     goodprice_arr.push(goodpriceX);
		     goodnumber_arr.push(goodnumberX); 
		     
		     //因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
		     //把数据类型转化为str;
		     var goodimg_str= goodimg_arr.join("&");
		  
		     var title_str= gooodtitle_arr.join("&");
		     var price_str=goodprice_arr.join("&");
		     var number_str= goodnumber_arr.join("&");
		     
		     
//		     //更新cookie中的数据
		      $.removeCookie(goodimg);
		      $.removeCookie(goodtitle);
		      $.removeCookie(goodprice);
		      $.removeCookie(goodnumber);
		    //存储到cookie
		    
		     $.cookie(goodimg,goodimg_str, { expires: 3, path: '/' });
		     
		     $.cookie(goodtitle,title_str, { expires: 3, path: '/' });
		     
		     $.cookie(goodprice,price_str, { expires: 3, path: '/' });
		     
		     $.cookie(goodnumber,number_str, { expires: 3, path: '/' });
		
		
	}
	
	
	//列表添加商品
	
	console.log($("#p-list .list_all").find(".price"))
	$(".list_all  ").css("background","red")
	
	
	var n=0;
	
	$(".pBtn").click(function(e){
		
		
		//防止刷新
		
		e.preventDefault();
		
		n++;
		//接下来就是获取列表商品的信息了
	
		var goodimgX=$(".zoom-jpg").find("img").attr("src");
		
		var goodtitleX=$(".cm h1").text();
		
		var goodpriceX=$(".priceBox").text();
		
		var goodnumberX=n;

		savegood(goodimgX,goodtitleX,goodpriceX,goodnumberX);
		
		$.removeCookie("n")
		
		$.cookie("n",n,{ expires: 3, path: '/' })
	
	
  });

}