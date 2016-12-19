function car() {

	//存储商品的信息
	var goodimg = "Goodimg"
	var goodtitle = "Goodtitle"; //记录商品详情
	var goodprice = "Goodprice"; //记录商品价格
	var goodnumber = "Goodnumber"; //记录商品数量

	//	//存储从cookie中取下来的数据
	var goodimg_arr = [];
	var gooodtitle_arr = [];
	var goodprice_arr = [];
	var goodnumber_arr = [];

	//先读取cookie 中的商品信息判断是否有
	//		
	var goodimg_str = $.cookie(goodimg);
	var gooodtitle_str = $.cookie(goodtitle);
	var goodprice_str = $.cookie(goodprice);
	var goodnumber_str = $.cookie(goodnumber);

	if(goodimg_str) {

		goodimg_arr = goodimg_str.split("&");
		gooodtitle_arr = gooodtitle_str.split("&");
		goodprice_arr = goodprice_str.split("&");
		goodnumber_arr = goodnumber_str.split("&");
	}

	//添加入购物车

//	function good() {
//
//		var obj = "";
//		for(var i = 0; i < goodimg_arr.length; i++) {
//			obj += "<tr><td class='input'><input type='checkbox'/></td>";
//			obj += "<td><div class='cart_pimg'><a href='#'>" + "<img src=" + goodimg_arr[i] + "></a></div>";
//			obj += "<div class='cart_pname'><a href='#'>" + gooodtitle_arr[i] + "</a></div></td><td>"
//			obj += "<strong>" + goodprice_arr[i] + "</strong></td><td class='kk'></td><td><span class='rediuce'>-</span><input class='num' type='text' value=" + goodnumber_arr[i] + ">";
//			obj += "<span class='add'>+</span></td><td><div class='weight'>2kg</div></td><td><div class='total_price'>";
//			obj += "¥<span id='total_price'>178</span></td></div><td class='p_1'>现货</td><td class='p_2'>收藏</td><td class='p_3'>删除</td></tr>"
//		}
//		return obj;
//	}

//	$(good()).appendTo("table");

  //显示购物车的信息
    var _data=[];
	for(var i=0;i< goodimg_arr.length;i++){
		  _data.push({"img":goodimg_arr[i],"title":gooodtitle_arr[i],"price":goodprice_arr[i],"Number":goodnumber_arr[i]});
		  
	}
//	//保存data
	var _obj= {
		data:_data,
		baseDom:'.cartMain table tr',
		cloneSize:6,
		url:null,
		pageContainer: '#pagination-demo1',
		page: true
	};
        new cloneDom(_obj);


	//删除购物车  		
	function deleteGoods(index) {
		goodimg_arr.splice(index, 1);
		gooodtitle_arr.splice(index, 1);
		goodprice_arr.splice(index, 1);
        goodnumber_arr.splice(index, 1);
		//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
		//把数据类型转化为str;
		var goodimg_str = goodimg_arr.join("&");
        var goodsum_str= goodnumber_arr.join("&");
		var title_str = gooodtitle_arr.join("&");
		var price_str = goodprice_arr.join("&");

		//cookie的数据准备好了，接下来就是更新cookie里的数据
		//更新cookie中的数据
		$.removeCookie(goodimg);
		$.removeCookie(goodtitle);
		$.removeCookie(goodprice);
		$.removeCookie(goodnumber);

		//存储到cookie

		$.cookie(goodimg, goodimg_str, {
			expires: 3,
			path: '/'
		});

		$.cookie(goodtitle, title_str, {
			expires: 3,
			path: '/'
		});

		$.cookie(goodprice, price_str, {
			expires: 3,
			path: '/'
		});
		$.cookie(goodnumber,goodsum_str, {
			expires: 3,
			path: '/'
		});

	}
    //删除商品
	$("table tr").find(".p_3").click(function() {
 
		var index = $(this).parent("tr").index()
       
		deleteGoods(index);

		$(this).parent("tr").remove();
       
	})
	
   
	
	//商品数量添加
    $("table tr").on("click",".add",function(event){
    	console.log("来了")
    	event.preventDefault();
    	var num=$(this).siblings(".num").val();
    	 num++;
    	var index=$(this).parent("td").parent("tr").index();
    	 goondNumber(index,num);
    	 //刷新输入框的数据
    	 $(this).siblings(".num").val(num);
    	
    })
    //商品数量减少
    $("table tr").on("click",".rediuce",function(event){
    	event.preventDefault();
    	var num=$(this).siblings(".num").val()
    	 num--;
    	 if(num<=0){
    	 	num=0;
    	 	alert("亲！商品不能少于一件哦")
    	 }
    	var index=$(this).parent("td").parent("tr").index();
    	goondNumber(index,num);
    	 //刷新输入框的数据
    	 $(this).siblings(".num").val(num);
    })
    
  
    
    
    //商品数量加减的处理函数
    function goondNumber(index,num){
    	
    	//遍历配对
    	for(var i=0;i< goodnumber_arr.length;i++){
    		//配对成功
    		if(index==i){
    		  goodnumber_arr[i]=num;
    		}
    		
    	}
    	//涮新cookie
    	var goodsum_str= goodnumber_arr.join("&");
    	 $.removeCookie(goodnumber);
    	 $.cookie(goodnumber,goodsum_str, {
			expires: 3,
			path: '/'
		});
    	
    }
    
    
	//继续购物

	$(".cartJsuan").find(".goshop").click(function() {

			window.location.href = "list.html";
		})
		//	  
		//全选商品

	$("#cartMain").find("input").click(function() {
		console.log("2222")

		$("table td").find("input").prop("checked", true);
		if($(this).prop("checked")) {
			for(i = 0; i < $("table tr").length; i++) {

				tatalprice += 198;

			}

			$(".cartOrderCount .cartTotalItem").find("span").text(tatalprice);

		}
	})

	//单选

	var tatalprice = 0;

	$("table td").find("input").click(function() {
		tatalprice += 198;
		if($(this).prop("checked")) {

			$(".cartOrderCount .cartTotalItem").find("span").text(tatalprice)

		};

	})
}