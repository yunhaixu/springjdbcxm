/*!
 * 公交地图
 * author: zhaoyang
 */

(function(win,$){
	// 百度地图API功能
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(114.504132, 30.496445), 17);  // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var point = new BMap.Point(114.504132, 30.496445);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


    var busMapUrl = '../../json/bus-map.json',
    	para = {
    		"ValidateData": "",
            "paras": {
                " CurrentPageIndex ": "",
                "PageSize": ""

            }
    	},
    	M = Mustache,
    	temp1 = $('#traffic-temp').html(),
    	$traffic = $('#traffic-info'),
    	html = [];

    Util.ajax({
    	url: busMapUrl,
        data: JSON.stringify(para),
        success: function(data) {
            var temp = Util.clearHtml(temp1);
            html.push(M.render(temp1, data.trafficInfo));
            $traffic.empty().prepend(html.join(''));
            html = [];
        }
    });
}(this,jQuery));