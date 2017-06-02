/*!
 * 公共js
 * author: chenxuan
 */
(function(win, $) {
    var zimaoquUrl = '../../json/zimaoqu.json',
        para = {
            "ValidateData": "",
            "paras": {
                " CurrentPageIndex ": "",
                "PageSize": ""

            }
        },
        M = Mustache,
        Temp1 = $('#img-tmpl').html(),
        Temp2 = $('#regulations-tmpl').html(),
        Temp3 = $('#tradeWindow-tmpl').html(),
        $silde = $('#slider'),
        $img = $silde.children('.wb-slider-conbox'),
        $policiesUl = $('#policies-ul'),
        $table = $('#table-window'),
        html = [];
    new TabView({
        dom: '#doc-tabs',
        activeCls: 'cur',
        triggerEvent: 'click'
    });
    //轮播图
    var Xsilder = function() {
        $silde.Xslider({
            affect: 'scrollx', //fade 淡入淡出；scrollx 水平轮播； scrolly 垂直轮播
            speed: 'slow',
            space: 3000,
            conbox: '.wb-slider-conbox',
            ctag: '.wb-slider-ctag',
            switcher: '.wb-slider-switcher',
            stag: '.wb-slider-stag',
            current: 'cur',
            trigger: 'click',
            boxWidth: '368',
            boxHeight: '242'
        });
    };
    //notice列表展示
    Util.ajax({
        url: zimaoquUrl,
        data: JSON.stringify(para),
        success: function(data) {
            var temp1 = Util.clearHtml(Temp1),
                temp2 = Util.clearHtml(Temp2),
                temp3 = Util.clearHtml(Temp3);
            html.push(M.render(temp1, data));
            $img.empty().prepend(html.join(''));
            Xsilder();
            html = [];
            html.push(M.render(temp2, data));
            $policiesUl.empty().prepend(html.join(''));
            html = [];
            html.push(M.render(temp3, data));
            $table.empty().prepend(html.join(''));
            html = [];
        }
    });
}(this, jQuery));
