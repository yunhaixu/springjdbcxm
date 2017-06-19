$(function () {
	var guid=Util.getUrlParams('guid');
	var udata;
	var showblogdetail=function(){
		 	udata={
				"guid":guid
			}
			
			$.ajax({
				type: "POST",
			    url: "/springjdbcxm/rest/blog/blogdetail",
			    data: udata,
			    success: function(r){
			    	r=JSON.parse(r);
			    	console.log(r);
			    	if(code="1"){
			    		$.each(r.blog,function(index,value){
				    		$('#'+index).html(value);
				    	});
			    	}
			    	
				}
			});
	};
	
	var addevaluation=function(){
		
	};
	
	
	showblogdetail();
	
});