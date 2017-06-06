/*(function(window, $) {
	
	
	
}(this, jQuery));*/

$(function () {
	
	var udata={
	}
	
	
	$.ajax({
		type: "POST",
	    url: "/springjdbcxm/rest/blog/bloglist",
	    data: udata,
	    success: function(r){
	    	r=JSON.parse(r);
	    	console.log(r);
	    	var str="";
	    	$.each(r.blist,function(index,value){
	    		str+="<li>"+value.title+"["+value.writer+"]"+value.createdate+"</li>";
	    		$("#bloglistmain").html(str);
	    	});
	    	
		}
	});
	$(".button").on('click',function(){
		window.location.href="blogadd.html";
	});
});




