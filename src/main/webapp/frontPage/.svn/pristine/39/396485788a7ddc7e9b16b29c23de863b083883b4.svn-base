/*!
 * 窗口电话
 * author: zhaoyang
 */

(function(win,$){
	
    var busMapUrl = '../../json/window-tel.json',
    	para = {
    		"ValidateData": "",
            "paras": {
                " CurrentPageIndex ": "",
                "PageSize": ""

            }
    	},
    	M = Mustache,
    	temp1 = $('#tel-temp').html(),
    	$table = $('#table'),
    	html = [];

    Util.ajax({
    	url: busMapUrl,
        data: JSON.stringify(para),
        success: function(data) {
            var temp = Util.clearHtml(temp1);
            html.push(M.render(temp1, data));
            $table.empty().prepend(html.join(''));
            html = [];
        }
    });
}(this,jQuery));