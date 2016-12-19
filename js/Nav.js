var Nav = {

	sort: function() {
		//		$("#pages ul ").on("click","li",function(evt){

		//商品详情
		$(".categories_hover .dt").stop().mouseenter(function() {
			$(this).siblings("#nav").show()
		}).stop().mouseleave(function() {
			$(this).siblings("#nav").hide()
		})

		$("#nav").stop().mouseenter(function() {
				$(this).show();

			})
			//列表导航1
		$(".categories_hover>#nav").stop().on("mouseenter", ".nav", function() {
				$(this).css("background", "#fff").find("a").css("color", "green");

				var index = $(this).index() + 1;
				var _obj = {
					baseDom: '.categories_hover>#list>.list_one',
					cloneSize: 10,
					url: '../json/data_list1.json',
					pageContainer: null,
					page: false
				};
				_obj.url = "../json/data_list" + index + ".json"
				new $("").cloneDom(_obj);
				$(".categories_hover #list").show()
			}).stop().on("mouseleave", ".nav", function() {
				$(this).css("background", "#76AC25").find("a").css("color", "#fff")

			})
			//列表导航2
		$(".categories_hover #list").stop().mouseenter(function() {
			$(this).show()
		}).stop().mouseleave(function() {

			$(this).hide();
			$("#nav").hide()

		})

		$(".categories_hover #list li").click(function() {
			console.log($(this));
			$(this).parent("#list").hide()

		});

		

	}

}