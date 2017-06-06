$(function () {
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
			    	
			    	
				}
			});
	}
	
	$("#btn1").on('click',function(){
		saveblog();
	});
	
});