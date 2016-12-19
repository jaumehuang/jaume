$(function(){
	
      //导航栏
	var _obj= {
		baseDom:'.categories_hover>#nav>.nav',
		cloneSize: 10,
		url: '../json/data_nav.json',
		pageContainer: null,
		page: false
	};
        new  $("").cloneDom(_obj);
        
        //导航栏
		var _obj = {
			baseDom: '#show>#nav>.nav',
			cloneSize: 10,
			url: '../json/data_nav.json',
			pageContainer: null,
			page: false
		};

		new $("").cloneDom(_obj);
})
