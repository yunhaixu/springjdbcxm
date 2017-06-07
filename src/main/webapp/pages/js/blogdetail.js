$(function () {
	var guid=Util.getUrlParams('guid');
	var udata;
	var saveblog=function(){
		 	udata={
				"title":$("#title").val(),
				"context":$("#context").val(),
				"writer":$("#writer").val()
			}
			
			$.ajax({
				type: "POST",
			    url: "/springjdbcxm/rest/blog/blogadd",
			    data: udata,
			    success: function(r){
			    	r=JSON.parse(r);
			    	console.log(r);
			    	if(r.code=='1'){
			    		window.location.href="bloglist.html";
			    	}else{
			    		alert('新增失败。请联系管理员！');
			    	}
			    	
				}
			});
	}
	
});