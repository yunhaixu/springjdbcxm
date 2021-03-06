(function(win, $) {
    var url = '../../json/message.json',
        M = Mustache,
        msgTemp = $('#msg-temp').html(),
        realTemp,
        $traffic = $('#msg-list'),
        html = [],
        $buttons = $('#buttons'),
        request = {
            "ValidateData": "",
            "para": {
                CategoryGuid : 0
            }
        },
        pageSize = 8,
        pageIndex = 0;

    //按钮点击选中事件
    $buttons.on('click', 'button', function() {
        var $this = $(this),
            tempType;
        $this.addClass('active').siblings().removeClass('active');
        var id = $this[0].id,
            value = $this.data('value');
        switch (id) {
            case "all":
                request.para.CategoryGuid = value;
                break;
            case "unread":
                request.para.CategoryGuid = value;
                break;
        }
        requestData(pageSize, pageIndex);
    });


    // // 初始化请求第一页数据，每页五条
    requestData(pageSize, pageIndex);

    function requestData(pagesize, pageindex) {
        if (pagesize >= 0 && pageindex >= 0) {
            request.para.PageSize = pagesize;
            request.para.PageIndex = pageindex;
        } else {
            return false;
        }

        Util.ajax({
            url: url,
            data: JSON.stringify(request),
            success: function(data) {
                html.push(M.render(msgTemp, {item:data.notice}));
                $traffic.empty().prepend(html.join(''));
                html = [];
                initPager(data, pagesize, pageindex);
            }
        });
    };

    function initPager(data, pagesize, pageindex) {
        var total = data.total;
        if ($("#pager").pagination()) {
            $("#pager").pagination('destroy');
        };
        $("#pager").pagination({
            total: total,
            pageElementSort: ['$page', '$size', '$info', '$jump'],
            pageSize: pagesize,
            pageIndex: pageindex,
            prevBtnText: '上页 <',
            nextBtnText: '下页 >',
            showInfo: true,
            showJump: true,
            noInfoText: "抱歉搜索到0条记录,请重新搜索!",
            infoFormat: pageindex + 1 + "/" + Math.ceil(total / pagesize)
        });
        $("#pager").on("pageClicked", function(event, pageData) { //分页按钮点击事件
            request.para.PageIndex = pageData.pageIndex;
            requestData(pageData.pageSize, pageData.pageIndex);
        }).on("jumpClicked", function(event, pageData) { //跳转按钮点击事件
            request.para.PageIndex = pageData.pageIndex;
            requestData(pageData.pageSize, pageData.pageIndex);
        });
    };


}(this, jQuery));
