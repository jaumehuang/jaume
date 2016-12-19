function list() {
	var i = 1;
	$(".cm >.catitem >h3> b").click(function() {
		var self = this;
		i++;
		if(i >= 3) {
			i = 1;
			$(this).css("background", "url(../img/list/productList.png)  no-repeat")
				.parent("h3").siblings("ul").slideUp(400);
			$(".left-box").animate({
				height: 180
			}, 500);
		}
		if(i == 2) {
			$(this).css("background", "url(../img/list/productList.png) -14px 0 no-repeat")
				.parent("h3").siblings("ul").slideDown(400);
			$(".left-box").animate({
				height: 330
			}, 500);

		} else {
			$(this).css("background", "url(../img/list/productList.png)  no-repeat")
				.parent("h3").siblings("ul").slideUp(400);
		}

	})

	if(i >= 3) {
		i = 1;
		$(this).css("background", "url(../img/list/productList.png)  no-repeat")
			.parent("h3").siblings("ul").slideUp(400);;
	}
	var j = 1
	$(".r-select #attr_a  .attr_value .show .know b").click(function() {
		j++;
		if(j >= 3) {

			j = 1;
			$(this).css("background", "url(../img/list/productList.png) no-repeat -9px -14px");
			$(this).siblings("span").text("更多");
			$(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideUp(400);
			$("#attr_a").animate({
				height: 50
			}, 500);
			//-9px -14px
		}

		if(j == 2) {
			$(this).css("background", "url(../img/list/productList.png) no-repeat 0 -14px");
			$(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideDown(400);
			$(this).siblings("span").text("收起");
			$("#attr_a").animate({
				height: 130
			}, 500);

		} else {
			$(this).css("background", "url(../img/list/productList.png) no-repeat -9px -14px")
			$(this).siblings("span").text("更多");
			$(".r-select >#attr_a  >.attr_value >.list").children(".list_ul2").slideUp(400);

		}

		//底部轮播图

	})

	var k = 0;

	var time = setInterval(move, 3000);
	//设计移动函数

	//	 var width=($(".fl-pic >ul > li").css("width"))*($(".fl-pic> ul> li").length);
	//	 $(".fl-pic ul").css("with",width+"px")
	var $li = $(".fl-pic >ul >li").clone()

	$(".fl-pic ul").append($li);

	function move() {
		k++;
		//判断张数 

		$(".fl-pic ul").animate({

			left: -1000 * k

		}, 2000, function() {
			next()
		})

	}

	function next() {

		if(k >= $(".fl-pic> ul> li").length / 2) {
			k = 0;
			$(".fl-pic>ul").css({
				left: 0
			})
		}
	}

	$(".left-arrow s").click(function() {

		if(k == 0) {
			//瞬间回到第四张图
			$(".fl-pic>ul").css({
				left: -1000 * ($(".fl-pic> ul> li").length / 2)
			})

		} else {
			k = k - 2;
		}

		move();

	})

	$(".right-arrow >s").click(function() {
		next();
		move();

	})

	//鼠标移入时的判断
	$(".fl-pic").stop().mouseenter(function() {

		clearInterval(time)
	}).stop().mouseleave(function() {
		time = setInterval(move, 3000);
	})

	//列表翻页
	var _obj = {
		baseDom: '#p-list>.list_all>li',
		cloneSize: 12,
		url: '../json/data_page.json',
		pageContainer: '#pagination-demo1',
		page: true
	};
	new $("").cloneDom(_obj);

}