(function(win, $) {
    $("#TestSelect").chosen({
        disable_search: true
    }).change(function(event, opt) {
        console.log(opt.selected);
    });

    var $goverbd = $('#gover-bd');
    $goverbd.on('click', '.slide-plus', function() {
        var $this = $(this);
        $this.toggleClass('change').parent().next().slideToggle();
    });


    var eductionUrl = '../../json/style-education.json',
        para = {
            "ValidateData": "",
            "paras": {
                " CurrentPageIndex ": "",
                "PageSize": ""
            }
        },
        M = Mustache,
        temp1 = $('#tmpl1').html(),
        temp2 = $('#tmpl2').html(),
        temp,
        $goverBd = $('#gover-bd'),
        html = [];

    Util.ajax({
        url: eductionUrl,
        data: JSON.stringify(para),
        success: function(data) {
            var tep1 = Util.clearHtml(temp1),
                tep2 = Util.clearHtml(temp2);
            // 循环判断选中模板
            $.each(data.Info, function(i, e) {
                if (e.hasChild) {
                    temp = tep2;
                } else {
                    temp = tep1;
                }
                html.push(M.render(temp, e));
            });
            $goverBd.empty().prepend(html.join(''));
            html = [];

            // layer
            var $win_info = $('.win-info')
            $win_info.click(function() {
                layer.open({
                    type: 2,
                    skin: 'layui-layer-border',
                    closeBtn: 0,
                    area: ['600px', '335px'],
                    title: false,
                    content: 'window-info-layer.html',
                    scrollbar: false
                });
            });
        }
    });
}(this, jQuery));
